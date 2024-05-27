<script context="module" lang="ts">
	/**
	 * @brief   Specifies the entries to the submenu of primary navigation tabs.
	 */
	type ToolSpec = {
		label: string;
		on_click;
		icon;
	};
</script>

<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
	export let spec: ToolSpec;
</script>

<Tooltip.Root openDelay={250}>
	<Tooltip.Trigger class="h-full">
		<slot />
	</Tooltip.Trigger>
	<Tooltip.Content
		transition={flyAndScale}
		transitionConfig={{ y: 8, duration: 100 }}
		sideOffset={8}
	>
		<div class="bg-neutral-4">
			<Tooltip.Arrow class="" />
		</div>
		<div class="rounded-sm bg-neutral-1 p-3 text-neutral-11">
			{spec.label}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
