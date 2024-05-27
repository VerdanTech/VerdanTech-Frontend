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
	export let spec: PrimaryTabSpec;
	export let flipped: boolean = false;
</script>

<!--
@component
Single tab for navigating between feature domains on the main sidebar.
-->

<div class="group relative flex justify-evenly bg-neutral-2 py-1 hover:bg-neutral-3">
	<a href={spec.url}>
		<i>
			<svelte:component this={spec.icon} class="my-2 text-4xl text-neutral-12" />
		</i>
	</a>

	<!-- Submenu. -->
	<ul
		class="invisible absolute left-full flex w-auto -translate-y-1 flex-col rounded-r-lg bg-neutral-3 {flipped
			? 'bottom-0 flex-col-reverse'
			: 'top-0 flex-col'} text-sm opacity-0 transition duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
	>
		<li class="w-full">
			<Button
				href={spec.url}
				class="w-full rounded-none text-lg font-bold text-neutral-12 opacity-90 hover:bg-primary-5 hover:text-primary-12 {flipped
					? 'rounded-br-lg'
					: 'rounded-tr-lg'}">{spec.label}</Button
			>
		</li>
		{#if spec.submenu_items.length > 0}
			<li class="w-full">
				<Separator class="bg-neutral-6 opacity-50" />
			</li>
		{/if}
		{#each spec.submenu_items ?? [] as item, index}
			<li class="w-full">
				<Button
					href={item.url}
					class="w-full justify-start rounded-none text-lg text-neutral-12 opacity-80 hover:bg-primary-4 hover:text-primary-12 {index ===
						spec.submenu_items.length - 1 && !flipped
						? 'rounded-br-lg'
						: ''} {index === spec.submenu_items.length - 1 && flipped ? 'rounded-tr-lg' : ''}"
				>
					<i>
						<svelte:component this={item.icon} class="text-foreground my-2 mr-2 text-xl" />
					</i>
					{item.label}
				</Button>
			</li>
		{/each}
	</ul>
</div>
