<script lang="ts">
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Calendar } from '$lib/components/generic/ui/calendar';
	import { Popover, Button } from 'bits-ui';

	const df = new DateFormatter('en-US', {
		day: '2-digit',
		month: 'short',
		year: '2-digit'
	});

	export let value: DateValue;
	export let onValueChange: (date: DateValue | undefined) => void;
	export let minValue: DateValue | undefined;
	export let maxValue: DateValue | undefined;

	import CaretLeft from 'virtual:icons/ph/caret-left-bold';
	import CaretRight from 'virtual:icons/ph/caret-right-bold';
</script>

<Popover.Root openFocus>
	<Popover.Trigger asChild let:builder>
		<Button.Root
			class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
			builders={[builder]}
		>
			{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a date'}
		</Button.Root>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value initialFocus {onValueChange} {minValue} {maxValue} />
	</Popover.Content>
</Popover.Root>
