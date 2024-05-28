<script lang="ts">
	import {today, getLocalTimeZone} from '@internationalized/date';
	import DatePicker from './DatePicker.svelte';
	import { Button } from 'bits-ui';

	import MonthReverseIcon from 'virtual:icons/mdi/chevron-triple-left'
	import WeekReverseIcon from 'virtual:icons/mdi/chevron-double-left'
	import DayReverseIcon from 'virtual:icons/mdi/chevron-left'
	import DayForwardIcon from 'virtual:icons/mdi/chevron-right'
	import WeekForwardIcon from 'virtual:icons/mdi/chevron-double-right'
	import MonthForwardIcon from 'virtual:icons/mdi/chevron-triple-right'

	let selected_range_reverse_delta_months = 3;
	let selected_range_forward_delta_months = 3; 

	let selected_day = today(getLocalTimeZone());;
	let selected_days_begin_range = selected_day.subtract({months: selected_range_reverse_delta_months});
	let selected_days_end_range = selected_day.add({months: selected_range_forward_delta_months});
	
	function selected_day_on_value_change(value: DateValue | undefined) {
		let reverse_delta = value.subtract
	}
</script>

<div class="flex h-auto w-full flex-col">
	<div class="flex flex-row justify-between">
		<div class="">
			<DatePicker bind:value = {selected_days_begin_range}/>
		</div>
		<div class="flex flex-row justify-center">
			<Button.Root>
				<MonthReverseIcon />
			</Button.Root>
			<Button.Root>
				<WeekReverseIcon />
			</Button.Root>
			<Button.Root>
				<DayReverseIcon />
			</Button.Root>
			<DatePicker value={selected_day} on_value_change={selected_day_on_value_change}/>
			<Button.Root>
				<DayForwardIcon />
			</Button.Root>
			<Button.Root>
				<WeekForwardIcon />
			</Button.Root>
			<Button.Root>
				<MonthForwardIcon />
			</Button.Root>
		</div>
		<div>
			<DatePicker bind:value={selected_days_end_range}/>
		</div>
	</div>
	<div class="h-16">asrt</div>
</div>
