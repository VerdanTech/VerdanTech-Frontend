<script lang="ts">
	import { today, getLocalTimeZone } from '@internationalized/date';
	import type { DateValue, DateDuration } from '@internationalized/date';
	import DatePicker from './DatePicker.svelte';
	import { Button, Slider } from 'bits-ui';

	import MonthReverseIcon from 'virtual:icons/mdi/chevron-triple-left';
	import WeekReverseIcon from 'virtual:icons/mdi/chevron-double-left';
	import DayReverseIcon from 'virtual:icons/mdi/chevron-left';
	import DayForwardIcon from 'virtual:icons/mdi/chevron-right';
	import WeekForwardIcon from 'virtual:icons/mdi/chevron-double-right';
	import MonthForwardIcon from 'virtual:icons/mdi/chevron-triple-right';

	import {
		timeline_selection,
		focused_day_on_value_change,
		forward_selection,
		reverse_selection,
		min_select_offset,
		max_select_bounds
	} from '$lib/stores/timeline';

	function focused_date_picker_on_value_change(new_date: DateValue | undefined) {
		if (new_date != undefined) {
			focused_day_on_value_change(new_date);
		}
	}
</script>

<div class="flex flex-row justify-between">
	<div class="">
		<DatePicker
			bind:value={$timeline_selection.begin_selected_days}
			minValue={$timeline_selection.focused_day.subtract(max_select_bounds)}
			maxValue={$timeline_selection.focused_day.subtract(min_select_offset)}
		/>
	</div>
	<div class="flex flex-row justify-center">
		<Button.Root
			on:click={() => {
				reverse_selection({ months: 1 });
			}}
		>
			<i>
				<svelte:component this={MonthReverseIcon} class="text-2xl" />
			</i>
		</Button.Root>
		<Button.Root
			on:click={() => {
				reverse_selection({ weeks: 1 });
			}}
		>
			<i>
				<svelte:component this={WeekReverseIcon} class="text-2xl" />
			</i>
		</Button.Root>
		<Button.Root
			on:click={() => {
				reverse_selection({ days: 1 });
			}}
		>
			<i>
				<svelte:component this={DayReverseIcon} class="text-2xl" />
			</i>
		</Button.Root>
		<DatePicker
			value={$timeline_selection.focused_day}
			onValueChange={focused_date_picker_on_value_change}
		/>
		<Button.Root
			on:click={() => {
				forward_selection({ days: 1 });
			}}
		>
			<i>
				<svelte:component this={DayForwardIcon} class="text-2xl" />
			</i>
		</Button.Root>
		<Button.Root
			on:click={() => {
				forward_selection({ weeks: 1 });
			}}
		>
			<i>
				<svelte:component this={WeekForwardIcon} class="text-2xl" />
			</i>
		</Button.Root>
		<Button.Root
			on:click={() => {
				forward_selection({ months: 1 });
			}}
		>
			<i>
				<svelte:component this={MonthForwardIcon} class="text-2xl" />
			</i>
		</Button.Root>
	</div>
	<div>
		<DatePicker
			bind:value={$timeline_selection.end_selected_days}
			minValue={$timeline_selection.focused_day.add(min_select_offset)}
			maxValue={$timeline_selection.focused_day.add(max_select_bounds)}
		/>
	</div>
</div>
