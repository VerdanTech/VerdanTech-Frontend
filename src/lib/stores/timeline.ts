import { today, getLocalTimeZone } from '@internationalized/date';
import type { DateValue, DateDuration } from '@internationalized/date';

import { writable } from 'svelte/store';

const current_day: DateValue = today(getLocalTimeZone());
export const default_selection_offset: DateDuration = { months: 1 };
const default_timeline_display_offset: DateDuration = { months: 1 };
export const min_select_offset: DateDuration = { days: 1 };
/* Half the total max selection length. */
export const max_select_bounds: DateDuration = { years: 4 };

const default_focused_day = current_day;
const default_begin_selected_days = default_focused_day.subtract(default_selection_offset);
const default_end_selected_days = default_focused_day.add(default_selection_offset);
const default_begin_timeline_displayed_days = default_begin_selected_days.subtract(
	default_timeline_display_offset
);
const default_end_timeline_displayed_days = default_end_selected_days.add(
	default_timeline_display_offset
);

interface TimelineSelection {
	focused_day: DateValue;
	focused_day_prev: DateValue;
	begin_selected_days: DateValue;
	end_selected_days: DateValue;
	begin_timeline_displayed_days: DateValue;
	end_timeline_displayed_days: DateValue;
}

export const timeline_selection = writable<TimelineSelection>({
	focused_day: default_focused_day,
	focused_day_prev: default_focused_day,
	begin_selected_days: default_begin_selected_days,
	end_selected_days: default_end_selected_days,
	begin_timeline_displayed_days: default_begin_timeline_displayed_days,
	end_timeline_displayed_days: default_end_timeline_displayed_days
});

//export const slider_selection = writable<number[]>()

/**
 * @brief Given the new value of the focused day, applies the same delta
 * to the selected day range.
 *
 * @param value The new value of the focused day.
 */
export function focused_day_on_value_change(new_focused_day: DateValue) {
	timeline_selection.update((state: TimelineSelection) => {
		state.focused_day_prev = state.focused_day;

		/* Calculate the difference between two dates in days.  */
		let delta_days = calculate_delta_days(new_focused_day, state.focused_day_prev);

		console.log(delta_days);

		/* Apply the delta to the selected range. */
		state.begin_selected_days = state.begin_selected_days.add({ days: delta_days });
		state.end_selected_days = state.end_selected_days.add({ days: delta_days });

		state.focused_day = new_focused_day;
		return state;
	});
}

export function forward_selection(translation: DateDuration) {
	timeline_selection.update((state: TimelineSelection) => {
		/* Apply the delta to the focused day and selected range. */
		state.focused_day = state.focused_day.add(translation);
		state.begin_selected_days = state.begin_selected_days.add(translation);
		state.end_selected_days = state.end_selected_days.add(translation);
        state.begin_timeline_displayed_days = state.begin_timeline_displayed_days.add(translation)
        state.end_timeline_displayed_days = state.end_timeline_displayed_days.add(translation)

		return state;
	});
}

export function reverse_selection(translation: DateDuration) {
	timeline_selection.update((state: TimelineSelection) => {
		/* Apply the delta to the focused day and selected range. */
		state.focused_day = state.focused_day.subtract(translation);
		state.begin_selected_days = state.begin_selected_days.subtract(translation);
		state.end_selected_days = state.end_selected_days.subtract(translation);
        state.begin_timeline_displayed_days = state.begin_timeline_displayed_days.subtract(translation)
        state.end_timeline_displayed_days = state.end_timeline_displayed_days.subtract(translation)

		return state;
	});
}

export function calculate_delta_days(current: DateValue, prev: DateValue): number {
	let current_ms = current.toDate(getLocalTimeZone());
	let prev_ms = prev.toDate(getLocalTimeZone());
	return Math.round((current_ms.getTime() - prev_ms.getTime()) / (1000 * 3600 * 24));
}

