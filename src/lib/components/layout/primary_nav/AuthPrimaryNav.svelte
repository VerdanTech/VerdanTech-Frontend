<script lang="ts">
	import Logo from '$lib/components/graphics/logo.svelte';
	import { Button } from '$lib/components/generic/ui/button';
	import { Separator } from '$lib/components/generic/ui/separator/index.js';
	import { garden_context } from '$lib/stores/gardens';
	import type { GardenFullSchema, userLogin } from '$lib/codegen';
	import GardenQueryService from '$lib/backend/gardens/query';
	import AuthPrimaryNavSidebarTab from './AuthPrimaryNavSidebarTab.svelte';
	import AuthPrimaryNavBottomTabDropdown from './AuthPrimaryNavBottomTabDropdown.svelte';
	import AuthPrimaryNavBottomTabDrawer from './AuthPrimaryNavBottomTabDrawer.svelte';
	import type { PrimaryTabSpec } from './AuthPrimaryNavSidebarTab.svelte';
	import { tabs } from './tabs';

	let active_garden_key: string | null;
	garden_context.subscribe(function (value) {
		active_garden_key = value.active_garden_key;
	});
	//let garden = GardenQueryService.get_by_key([active_garden_key])
	let garden = { name: 'GardenName', key: 'GARDEN_KEY', description: 'rst' };

	let nonGardenTabs: (PrimaryTabSpec | undefined)[] = [tabs.find((t) => t.id === 'gardens')];
	let gardenTabs: (PrimaryTabSpec | undefined)[] = [
		tabs.find((t) => t.id === 'garden'),
		tabs.find((t) => t.id === 'planner'),
		tabs.find((t) => t.id === 'workspaces'),
		tabs.find((t) => t.id === 'attributes'),
		tabs.find((t) => t.id === 'environments'),
		tabs.find((t) => t.id === 'devices')
	];
	let bottomTabs: (PrimaryTabSpec | undefined)[] = [
		tabs.find((t) => t.id === 'resources'),
		tabs.find((t) => t.id === 'profile')
	];

	// Note: right handed order
	let mobile_tabs: (PrimaryTabSpec | undefined)[] = [
		tabs.find((t) => t.id === 'profile'),
		tabs.find((t) => t.id === 'resources'),
		tabs.find((t) => t.id === 'gardens')
	];
</script>

<!--
@component
Primary navigation between different feature domains
in the Garden as well as non-garden related app resources.

Shown to authenticated users everywhere in the app.
-->

<!-- Small screens bottom bar. -->
<nav
	class="fixed bottom-0 flex h-16 w-full flex-row items-center justify-around bg-neutral-2 lg:h-0 first:lg:hidden"
>
	{#each mobile_tabs ?? [] as tab}
		{#if tab !== undefined}
			<AuthPrimaryNavBottomTabDropdown spec={tab} />
		{/if}
	{/each}
	<AuthPrimaryNavBottomTabDrawer specs={gardenTabs} />
</nav>

<!-- Large screens sidebar. -->
<nav
	class="text-foreground fixed top-0 z-10 hidden h-full w-0 flex-col items-center justify-between border-r-0 bg-neutral-2 lg:flex lg:w-16"
>
	<!-- Links displayed at the top. -->
	<ul class="flex w-full flex-col">
		<!-- VerdanTech logo. -->
		<li>
			<a href="/" class="flex items-center justify-evenly py-3">
				<i class="">
					<Logo size="3rem" />
				</i>
			</a>
		</li>

		<!-- Non-garden links. -->
		{#each nonGardenTabs ?? [] as tab}
			{#if tab !== undefined}
				<li>
					<AuthPrimaryNavSidebarTab spec={tab} />
				</li>
			{/if}
		{/each}

		<Separator class="bg-neutral-6" />

		<!-- Garden links. -->
		{#each gardenTabs ?? [] as tab}
			{#if tab !== undefined}
				<li>
					<AuthPrimaryNavSidebarTab spec={tab} />
				</li>
			{/if}
		{/each}
	</ul>

	<!-- Links displayed at the bottom. -->
	<ul class="flex w-full flex-col">
		{#each bottomTabs ?? [] as tab}
			{#if tab !== undefined}
				<li>
					<AuthPrimaryNavSidebarTab spec={tab} flipped={true} />
				</li>
			{/if}
		{/each}
	</ul>
</nav>
