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
	import * as Drawer from '$lib/components/generic/ui/drawer';
	import DrawerOpenIcon from 'virtual:icons/material-symbols/menu-open-rounded';
	import * as DropdownMenu from '$lib/components/generic/ui/dropdown-menu';
	import * as Accordion from '$lib/components/generic/ui/accordion';
	//import {Accordion} from 'bits-ui';
	export let specs: (PrimaryTabSpec | undefined)[];
</script>

<!--
@component
Single tab for navigating between feature domains on the main bottom bar.
-->

<Drawer.Root direction="bottom">
	<Drawer.Trigger class="flex h-full w-full justify-center">
		<i>
			<svelte:component this={DrawerOpenIcon} class="my-2 text-4xl text-neutral-12" />
		</i>
	</Drawer.Trigger>
	<Drawer.Content class="bg-neutral-3">
		<Accordion.Root>
			{#each specs ?? [] as tab}
				{#if tab !== undefined}
					<Accordion.Item value={tab.label}>
						<Accordion.Trigger class="mx-8 flex items-center">
							<Button href={tab.url} class="mr-2 flex items-center">
								<i class="mr-6">
									<svelte:component this={tab.icon} class="my-2 text-2xl text-neutral-12" />
								</i>
								<span>
									{tab.label}
								</span>
							</Button>
						</Accordion.Trigger>
						<Accordion.Content class="mx-8 rounded-lg bg-neutral-4">
							<ul class="mx-2 my-4 flex h-full flex-col justify-center">
								{#each tab.submenu_items ?? [] as submenu_item}
									<li>
										<Button
											href={submenu_item.url}
											class="my-2 flex items-center justify-start rounded-md hover:bg-primary-5"
										>
											<i class="mr-4">
												<svelte:component
													this={submenu_item.icon}
													class="text-xl text-neutral-12"
												/>
											</i>
											<span>
												{submenu_item.label}
											</span>
										</Button>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				{/if}
			{/each}
		</Accordion.Root>
	</Drawer.Content>
</Drawer.Root>
