<script context="module" lang="ts">
	/**
	 * @brief   Specifies the secondary navigation tabs between sections
	 *              of a feature domain.
	 */
	export type TabSpec = {
		title: string;
		route: string;
	};
</script>

<script lang="ts">
	import DropIcon from 'virtual:icons/material-symbols/arrow-drop-down';
	import SecondaryNavTab from './SecondaryNavTab.svelte';

	export let title: string;
	export let tabs: TabSpec[];
</script>

<!--
@component
Secondary navigation between different sections of a single
feature domain.
-->

<nav class="bg-base-200 h-12">
	<div class="grid grid-cols-3">
		<!-- Top Row -->
		<div class="col-span-1">
			<!-- Top Left Section -->
			<h1 class="p-2 pl-6 text-xl">{title}</h1>
		</div>
		<div class="col-span-1">
			<!-- Top Middle Section -->
			<div role="tablist" class="tabs tabs-boxed h-full">
				{#each tabs as tab}
					<SecondaryNavTab title={tab.title} route={tab.route} />
				{/each}
			</div>
		</div>
		<div class="col-span-1 justify-self-end">
			<!-- Top Right Section -->
			<DropIcon></DropIcon>
		</div>
	</div>
</nav>
