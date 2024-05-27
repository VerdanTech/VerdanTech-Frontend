<script lang="ts">
	import ResourcesIcon from 'virtual:icons/material-symbols/book-2-outline-rounded';
	import GardensIcon from 'virtual:icons/mdi/planet';
	import GardenIcon from 'virtual:icons/material-symbols/home-and-garden';
	import DropIcon from 'virtual:icons/material-symbols/arrow-drop-down';
	import MenuIcon from 'virtual:icons/material-symbols-light/menu-rounded';
	import PlannerIcon from 'virtual:icons/mdi/planner-outline';
	import WorkspaceIcon from 'virtual:icons/tabler/tools';
	import CultivarIcon from 'virtual:icons/tabler/plant-2';
	import EnvironmentIcon from 'virtual:icons/material-symbols/sunny-outline-rounded';
	import DeviceIcon from 'virtual:icons/material-symbols/network-node';
	import ConfigIcon from 'virtual:icons/mdi/gear-outline';
	import Logo from '$lib/components/graphics/logo.svelte';
	import { externalLinks } from '$lib/external';
	import type { GardenFullSchema } from '$lib/codegen';
	import GardenQueryService from '$lib/backend/gardens/query';

	export let garden_key: string | null;
	//let garden = GardenQueryService.get_by_key([garden_key])
	let garden = { name: 'GardenName', key: 'GARDEN_KEY', description: 'rst' };

	let sidebarOpen: boolean = false;
	// Variable to keep track of the currently open submenu
	let openSubmenus = new Set<string>();

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;

		openSubmenus = new Set();

		console.log(openSubmenus);
	}

	// Function to toggle submenu
	function toggleSubmenu(submenuId: string) {
		if (openSubmenus.has(submenuId)) {
			openSubmenus.delete(submenuId);
		} else {
			openSubmenus.add(submenuId);
		}
		openSubmenus = new Set(openSubmenus); // Trigger reactivity
		console.log(openSubmenus);
	}

	let links = [
		{
			label: 'Resources',
			icon: ResourcesIcon,
			url: '/',
			submenuItems: [
				{ label: 'Guides', url: '/guides' },
				{ label: 'Project', url: externalLinks.project },
				{ label: 'Donate', url: externalLinks.donation }
			],
			dividerAfter: false
		},
		{
			label: 'Gardens',
			icon: GardensIcon,
			url: 'app/gardens/',
			submenuItems: [{ label: 'Garden1', url: 'app/gardens/u28SeS/' }],
			dividerAfter: true
		},
		{
			label: 'Garden',
			icon: GardenIcon,
			url: 'app/gardens/eFuSuF/',
			submenuItems: [
				{ label: 'Dashboard', url: '/app/gardens/' + garden.key + '/dash/' },
				{ label: 'Attributes', url: '/app/gardens/' + garden.key + '/attributes/' },
				{ label: 'Members', url: '/app/gardens/' + garden.key + '/members/' },
				{ label: 'Metrics', url: '/app/gardens/' + garden.key + '/metrics/' }
			],
			dividerAfter: false
		},
		{
			label: 'Planner',
			icon: PlannerIcon,
			url: 'planner/',
			submenuItems: [
				{ label: 'Windows', url: '/app/gardens/' + garden.key + '/planner/windows' },
				{
					label: 'Verdagraph',
					url: '/app/gardens/' + garden.key + '/attributes/verdagraph'
				}
			]
		},
		{
			label: 'Workspaces',
			icon: WorkspaceIcon,
			url: 'app/gardens/' + garden.key + '/workspaces/',
			submenuItems: [
				{
					label: 'Workspace1',
					url: '/app/gardens/' + garden.key + '/workspaces/workspace1'
				}
			],
			dividerAfter: false
		},
		{
			label: 'Cultivars',
			icon: CultivarIcon,
			url: 'app/gardens/eFuSuF/cultivars/',
			submenuItems: [
				{ label: 'CultivarSet1', url: '/app/gardens/eFuSuF/cultivars/cultivar1/' }
			],
			dividerAfter: false
		},
		{ label: 'Environment', icon: EnvironmentIcon },
		{ label: 'Devices', icon: DeviceIcon }
	];

	let bottomLinks = [
		{
			label: 'ProfileName',
			icon: ConfigIcon,
			url: 'app/gardens/eFuSuF/cultivars/',
			submenuItems: [
				{ label: 'CultivarSet1', url: '/app/gardens/eFuSuF/cultivars/cultivar1/' }
			],
			dividerAfter: false
		}
	];
</script>

<!-- Large screens sidebar. -->
<div class="hidden lg:block">
	<div
		class={`bg-base-200 fixed left-0 top-0 flex h-full flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-60' : 'w-20'}`}
	>
		<!-- Logo and VerdanTech text. -->
		<a href="/" class="w-100 mb-4 flex items-center p-2.5">
			<i class="mr-4">
				<Logo size="3.5rem" />
			</i>
			<span class="text-base-content overflow-hidden text-2xl font-bold"
				>VerdanTech</span
			>
		</a>

		<!-- Main navigation links -->
		<ul>
			{#each links as link}
				<li class="hover:bg-base-300 group relative transition">
					<div class="relative flex list-none justify-between overflow-hidden p-2">
						<a href={link.url} class="flex items-center">
							<i class="mr-4">
								<svelte:component this={link.icon} style="font-size: 3.2rem" />
							</i>
							<span class="text-xl font-semibold"> {link.label} </span>
						</a>
						<button on:click={() => toggleSubmenu(link.label)}>
							{#if (link.submenuItems ?? []).length > 0}
								<DropIcon
									class={`transition-transform duration-200 ${openSubmenus.has(link.label) ? 'rotate-180' : ''}`}
									style="font-size: 2rem"
								/>
							{/if}
						</button>
					</div>

					<!-- Submenu. -->
					{#if sidebarOpen}
						<ul
							class={`duration-400 bg-base-300 flex w-full flex-col items-center overflow-hidden text-sm transition-all ease-in-out ${openSubmenus.has(link.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
						>
							{#each link.submenuItems ?? [] as item}
								<li class="p-1">
									<a
										href={item.url}
										class="text-lg opacity-80 transition hover:opacity-100"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<ul
							class="bg-base-300 invisible absolute left-full top-0 flex w-32 -translate-y-1 flex-col items-center rounded-r-lg text-sm opacity-0 transition duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
						>
							<li class="p-1">
								<a
									href={link.url}
									class="text-lg font-bold opacity-80 transition hover:opacity-100"
								>
									{link.label}
								</a>
							</li>
							{#each link.submenuItems ?? [] as item}
								<li class="p-1">
									<a
										href={item.url}
										class="text-lg opacity-80 transition hover:opacity-100"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
				{#if link.dividerAfter}
					<div class="divider"></div>
				{/if}
			{/each}
		</ul>

		<!-- Bottom navigation links -->
		<ul class="mt-auto">
			<div class="divider"></div>
			{#each bottomLinks as link}
				<li class="hover:bg-base-300 group relative transition">
					<div class="relative flex list-none justify-between overflow-hidden p-2">
						<a href={link.url} class="flex items-center">
							<i class="mr-4">
								<svelte:component this={link.icon} style="font-size: 3.2rem" />
							</i>
							<span class="text-xl font-semibold"> {link.label} </span>
						</a>
						<button on:click={() => toggleSubmenu(link.label)}>
							{#if (link.submenuItems ?? []).length > 0}
								<DropIcon
									class={`transition-transform duration-200 ${openSubmenus.has(link.label) ? 'rotate-180' : ''}`}
									style="font-size: 2rem"
								/>
							{/if}
						</button>
					</div>

					<!-- Submenu. -->
					{#if sidebarOpen}
						<ul
							class={`duration-400 bg-base-300 flex w-full flex-col items-center overflow-hidden text-sm transition-all ease-in-out ${openSubmenus.has(link.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
						>
							{#each link.submenuItems ?? [] as item}
								<li class="p-1">
									<a
										href={item.url}
										class="text-lg opacity-80 transition hover:opacity-100"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<ul
							class="bg-base-300 invisible absolute left-full top-0 flex w-32 -translate-y-1 flex-col items-center rounded-r-lg text-sm opacity-0 transition duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
						>
							<li class="p-1">
								<a
									href={link.url}
									class="text-lg font-bold opacity-80 transition hover:opacity-100"
								>
									{link.label}
								</a>
							</li>
							{#each link.submenuItems ?? [] as item}
								<li class="p-1">
									<a
										href={item.url}
										class="text-lg opacity-80 transition hover:opacity-100"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
				{#if link.dividerAfter}
					<div class="divider"></div>
				{/if}
			{/each}
		</ul>

		<!-- Sidebar collapse button. -->
		<!--
			<div class="absolute left-full top-0 p-1">
				<button on:click={() => toggleSidebar()}>
					<MenuIcon style="font-size: 1.5rem" />
				</button>
			</div>

		-->
	</div>
</div>

<!-- Small screens bottom bar. -->
<div class="block lg:hidden">
	<div class="bg-base-200 fixed bottom-0 left-0 h-20 w-full"></div>
</div>
