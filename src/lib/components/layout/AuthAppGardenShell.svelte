<script lang="ts">
	import ResourcesIcon from 'virtual:icons/material-symbols/book-2-outline-rounded';
	import GardensIcon from 'virtual:icons/mdi/planet';
	import GardenIcon from 'virtual:icons/material-symbols/home-and-garden';
	import DropIcon from 'virtual:icons/material-symbols/arrow-drop-down';
	import MenuIcon from 'virtual:icons/material-symbols-light/menu-rounded';
	import PlannerIcon from 'virtual:icons/mdi/planner-outline'
	import ConfigIcon from 'virtual:icons/mdi/gear-outline'
	import Logo from '$lib/components/graphics/logo.svelte';
	import { externalLinks } from '$lib/external';

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
			]
		},
		{
			label: 'Gardens',
			icon: GardensIcon,
			url: 'app/gardens/',
			submenuItems: [{ label: 'Garden1', url: 'app/gardens/u28SeS/' }]
		},
		{
			label: 'Garden',
			icon: GardenIcon,
			url: 'app/gardens/eFuSuF/',
			submenuItems: [
				{ label: 'Dashboard', url: '/app/gardens/eFuSuF/dash/' },
				{ label: 'Members', url: '/app/gardens/eFuSuF/members/' },
				{ label: 'Metrics', url: '/app/gardens/eFuSuF/metrics/' }
			]
		},
		{
			label: 'Planner',
			icon: PlannerIcon,
			url: 'app/gardens/eFuSuF/planner/',
		},
		{
			label: 'Config',
			icon: ConfigIcon,
			url: 'app/gardens/eFuSuF/config/',
			submenuItems: [
				{ label: 'Workspaces', url: '/app/gardens/eFuSuF/config/workspaces/' },
				{ label: 'Cultivars', url: '/app/gardens/eFuSuF/config/cultivars/' },
			]
		}
	];

</script>

<!-- Sidebar. -->
<div
	class={`fixed left-0 top-0 h-full bg-base-200 transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-60' : 'w-20'}`}
>
	<!-- Logo and VerdanTech text. -->
	<a href="/" class="w-100 p-2.5 mb-4 flex items-center">
		<i class="mr-4">
			<Logo size="3.5rem" />
		</i>
		<span class="overflow-hidden text-2xl font-bold text-base-content">VerdanTech</span>
	</a>

	<!-- Garden non-specific navigation links. -->
	<ul>
		{#each links as link}
		<li class="group relative transition hover:bg-base-300">
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
					class={`duration-400 flex w-full flex-col items-center overflow-hidden bg-base-300 text-sm transition-all ease-in-out ${openSubmenus.has(link.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
				>
					{#each link.submenuItems ?? [] as item}
						<li class="p-1">
							<a href={item.url} class="text-lg opacity-80 transition hover:opacity-100">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<ul
					class="invisible absolute left-full top-0 flex w-32 -translate-y-1 flex-col items-center rounded-r-lg bg-base-300 text-sm opacity-0 transition duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
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
							<a href={item.url} class="text-lg opacity-80 transition hover:opacity-100">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</li>
		{/each}
	</ul>

	<!-- Sidebar collapse button. -->
	<div class="absolute left-full top-0 p-1">
		<button on:click={() => toggleSidebar()}>
			<MenuIcon style="font-size: 1.5rem" />
		</button>
	</div>
</div>
