<script context="module" lang="ts">
	/**
	 * @brief   Specifies the entries to the submenu of primary navigation tabs.
	 */
	export type PrimaryTabItemSpec = {
		label: string;
		url: string;
		icon;
	};

	/**
	 * @brief   Specifies the primary navigation tabs between feature domains.
	 */
	export type PrimaryTabSpec = {
		label: string;
		icon;
		url: string;
		submenu_items: PrimaryTabItemSpec[];
	};
</script>

<script lang="ts">
	import { Button } from '$lib/components/generic/ui/button';
	import { Separator } from '$lib/components/generic/ui/separator/index.js';
	import * as DropdownMenu from '$lib/components/generic/ui/dropdown-menu';
	import { Popover } from 'bits-ui';
	export let spec: PrimaryTabSpec;
	import { flyAndScale } from '$lib/utils';

	let popover_open: boolean = false;
</script>

<!--
@component
Single tab for navigating between feature domains on the main bottom bar.
-->

<Popover.Root bind:open={popover_open}>
	<Popover.Trigger
		class="flex h-full w-full justify-center text-neutral-12 transition-all {popover_open
			? 'bg-neutral-3'
			: 'bg-neutral-2'}"
	>
		<i>
			<svelte:component this={spec.icon} class="my-2 text-4xl" />
		</i>
	</Popover.Trigger>
	<Popover.Content
		class="w-auto -translate-y-2 justify-evenly rounded-lg bg-neutral-3"
		transition={flyAndScale}
		transitionConfig={{ duration: 150, y: 10, start: 1 }}
	>
		<ul class="flex flex-col-reverse justify-center">
			<li class="w-full">
				<Button
					href={spec.url}
					class="w-full rounded-none rounded-bl-lg rounded-br-lg bg-neutral-2 text-lg font-bold text-neutral-12 opacity-90 hover:bg-primary-5 hover:text-primary-12"
					>{spec.label}</Button
				>
			</li>
			<Separator class="w-full bg-neutral-6 opacity-50" />
			{#each spec.submenu_items ?? [] as item, index}
				<li class="flex items-center">
					<Button
						href={item.url}
						class="w-full justify-start rounded-none bg-neutral-2 text-lg text-neutral-12 opacity-80 hover:bg-primary-5 hover:text-primary-12 {index ===
						spec.submenu_items.length - 1
							? 'rounded-t-lg'
							: ''}"
					>
						<i>
							<svelte:component this={item.icon} class="text-foreground my-2 mr-2 text-xl" />
						</i>
						{item.label}
					</Button>
				</li>
			{/each}
			<li></li>
		</ul>
	</Popover.Content>
</Popover.Root>
