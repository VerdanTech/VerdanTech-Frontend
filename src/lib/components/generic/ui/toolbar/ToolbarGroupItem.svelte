<script lang="ts">
	import { Toolbar } from 'bits-ui';

	import TooltipWrapper from '$lib/components/generic/ui/TooltipWrapper.svelte';
	import type { ToolSpec } from './types.ts';

	export let spec: ToolSpec;
	export let size: string = 'text-lg';
	export let padding: string = 'p-4';
</script>

<TooltipWrapper {spec}>
	<Toolbar.GroupItem
		aria-label={spec.label}
		value={spec.label}
		class="flex h-full items-center bg-neutral-2 {padding} text-neutral-12 hover:bg-neutral-3 active:bg-neutral-4 data-[state=on]:bg-neutral-3 hover:data-[state=on]:bg-neutral-4 active:data-[state=on]:bg-neutral-5"
	>
		<i>
			<svelte:component this={spec.icon} class="{size} text-neutral-12" />
		</i>
	</Toolbar.GroupItem>
</TooltipWrapper>
