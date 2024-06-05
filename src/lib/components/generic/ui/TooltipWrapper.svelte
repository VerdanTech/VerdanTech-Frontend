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

	import { theme } from '$lib/stores/theme';
	export let spec: ToolSpec;
</script>

<Tooltip.Root openDelay={250}>
	<Tooltip.Trigger class="h-full">
		<slot />
	</Tooltip.Trigger>
	<!-- Note that we reapply the 'dark' theme class as for whatever reason this does not happen to the tooltip automatically. -->
	<Tooltip.Content
		transition={flyAndScale}
		transitionConfig={{ y: 8, duration: 100 }}
		sideOffset={8}
		class={$theme.includes('dark') ? 'dark' : ''}
	>
		<div class="bg-neutral-4">
			<Tooltip.Arrow class="border-l border-t border-neutral-7" />
		</div>
		<div class="rounded-md border border-neutral-7 bg-neutral-3 p-3 text-neutral-11 shadow-md">
			{spec.label}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
