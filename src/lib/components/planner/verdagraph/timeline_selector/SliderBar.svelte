<script lang="ts">
    import { writable } from 'svelte/store';
	import { createSlider, melt, type CreateSliderProps } from '@melt-ui/svelte';
	import { startOfYear, startOfMonth, startOfWeek, isSameDay } from '@internationalized/date';
	import type { DateValue } from '@internationalized/date';
	import {
		timeline_selection,
		focused_day_on_value_change,
		forward_selection,
		reverse_selection,
		min_select_offset,
		max_select_bounds,
		calculate_delta_days
	} from '$lib/stores/timeline';

	let num_displayed_days = calculate_delta_days(
		$timeline_selection.end_timeline_displayed_days,
		$timeline_selection.begin_timeline_displayed_days
	);
	function date_to_timeline_display_index(date: DateValue): number {
		return calculate_delta_days(date, $timeline_selection.begin_timeline_displayed_days);
	}

	function timeline_display_index_to_date(index: number): DateValue {
		return $timeline_selection.begin_timeline_displayed_days.add({ days: index });
	}

	const slider_on_value_change: CreateSliderProps['onValueChange'] = ({ curr, next }) => {
		let begin_selected_days_index_next = next[0];
		let focused_day_index_next = next[1];
		let end_selected_days_index_next = next[2];

		$timeline_selection.begin_selected_days = timeline_display_index_to_date(
			begin_selected_days_index_next
		);
		$timeline_selection.focused_day = timeline_display_index_to_date(focused_day_index_next);
		$timeline_selection.end_selected_days = timeline_display_index_to_date(
			end_selected_days_index_next
		);

		return next;
	};

	const {
		elements: { root, range, thumbs, ticks }
	} = createSlider({
		defaultValue: [
			date_to_timeline_display_index($timeline_selection.begin_selected_days),
			date_to_timeline_display_index($timeline_selection.focused_day),
			date_to_timeline_display_index($timeline_selection.end_selected_days)
		],
		min: 1,
		max: num_displayed_days,
		step: 1,
		onValueChange: slider_on_value_change
	});

	enum TickTypes {
		NORMAL_DAY,
		FIRST_OF_WEEK,
		FIRST_OF_MONTH,
		FIRST_OF_YEAR
	}

    let tick_indices = Array.from({length: $ticks.length}, (v, k) => k+1)
    let ticks_to_types = []

    $: {
    num_displayed_days = calculate_delta_days(
      $timeline_selection.end_timeline_displayed_days,
      $timeline_selection.begin_timeline_displayed_days
    );
    ticks_to_types = tick_indices.map(index => ({date: $timeline_selection.begin_timeline_displayed_days.add({ days: index }), tick_type: timeline_display_index_to_type_of_tick(index)}))
    console.log(ticks_to_types)
    console.log($timeline_selection.begin_timeline_displayed_days)
  }

	function timeline_display_index_to_type_of_tick(index: number): TickTypes {
		let date = timeline_display_index_to_date(index);
		if (isSameDay(date, startOfYear(date))) {
			return TickTypes.FIRST_OF_YEAR;
		} else if (isSameDay(date, startOfMonth(date))) {
			return TickTypes.FIRST_OF_MONTH;
		} else if (isSameDay(date, startOfWeek(date, 'en-US'))) {
			return TickTypes.FIRST_OF_WEEK;
		} else {
			return TickTypes.NORMAL_DAY;
		}
	}
    
</script>

<div use:melt={$root} class="relative flex h-32 w-full">
	<span class="h-[3px] w-full self-center bg-neutral-6">
		<span use:melt={$range} class="h-[3px] bg-neutral-9" />
	</span>

	<span use:melt={$thumbs[0]} class="h-1/2 w-2 self-center bg-neutral-9" />
	<span use:melt={$thumbs[1]} class="h-1/4 w-2 self-center bg-primary-9" />
	<span use:melt={$thumbs[2]} class="h-1/2 w-2 self-center bg-neutral-9" />

        {#each $ticks as tick, index}
        {#if ticks_to_types[index].tick_type === TickTypes.FIRST_OF_YEAR}
        <span use:melt={tick} class="h-5 w-[3px] self-end bg-neutral-11 rounded-t-lg" >
        </span>
        {:else if ticks_to_types[index].tick_type === TickTypes.FIRST_OF_MONTH}
        <span use:melt={tick} class="h-4 w-[2px] self-end bg-neutral-11 rounded-t-lg">
    </span>
    {:else if ticks_to_types[index].tick_type === TickTypes.FIRST_OF_WEEK}
    <span use:melt={tick} class="bg-neutral-10 h-3 w-[2px] self-end rounded-t-lg">
    </span>
    {:else if ticks_to_types[index].tick_type === TickTypes.NORMAL_DAY}
    <span use:melt={tick} class="bg-neutral-9 h-2 w-[1px] self-end rounded-t-lg">
    </span>
    {/if}
	{/each}
</div>
