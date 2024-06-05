<script lang="ts">
	import { Toolbar } from 'bits-ui';

	import TooltipWrapper from '$lib/components/generic/ui/TooltipWrapper.svelte';
	import type { ToolSpec } from './types';
	import type { stringToArray } from 'konva/lib/shapes/Text';

	export let spec: ToolSpec;
	export let size: string = 'text-lg';
	export let padding: string = 'p-4';
</script>

<TooltipWrapper {spec}>
	<Toolbar.Button
		on:click={spec.on_click}
		class="flex h-full items-center bg-neutral-2 {padding} text-neutral-12 transition-all hover:bg-neutral-3 active:bg-neutral-4"
	>
		<i class="h-full">
			<svelte:component this={spec.icon} class={size} />
		</i>
	</Toolbar.Button>
</TooltipWrapper>
