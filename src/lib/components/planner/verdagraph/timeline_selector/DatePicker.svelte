<script lang="ts">
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Calendar } from '$lib/components/generic/ui/calendar';
	import {Popover, Button} from 'bits-ui'

	const df = new DateFormatter('en-US', {
		day: '2-digit', month: 'short', year: '2-digit'
	});

	export let value: DateValue | undefined = undefined;
	export let on_value_change = () => {};
</script>

<Popover.Root openFocus>
	<Popover.Trigger asChild let:builder>
		<Button.Root
			class={cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')}
			builders={[builder]}
		>
			<CalendarIcon class="mr-2 h-4 w-4" />
			{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a date'}
		</Button.Root>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value initialFocus onValueChange={on_value_change} />
	</Popover.Content>
</Popover.Root>
