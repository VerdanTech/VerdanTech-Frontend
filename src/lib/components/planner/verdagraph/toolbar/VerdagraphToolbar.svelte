<script lang="ts">
	import { Separator, Toolbar, Menubar } from 'bits-ui';
	import AddIcon from 'virtual:icons/mdi/plus-circle-outline';
	import PointerSelectIcon from 'virtual:icons/mdi/cursor-default-outline';
	import GroupSelectIcon from 'virtual:icons/mdi/selection';
	import RecordObservationIcon from 'virtual:icons/mdi/eye-outline';
	import GroupPlantsIcon from 'virtual:icons/mdi/group';
	import UngroupPlantsIcon from 'virtual:icons/mdi/ungroup';
	import PullIcon from 'virtual:icons/mdi/compost';
	import DeleteIcon from 'virtual:icons/mdi/delete';
	import CalendarToggleIcon from 'virtual:icons/mdi/calendar-text';
	import LayoutToggleIcon from 'virtual:icons/mdi/land-plots-circle-variant';
	import ListToggleIcon from 'virtual:icons/mdi/format-list-text';
	import PatternsIcon from 'virtual:icons/mdi/dots-hexagon';
	import PlansIcon from 'virtual:icons/mdi/application-edit-outline';
	import GeneratorsIcon from 'virtual:icons/mdi/creation';
	import FilterIcon from 'virtual:icons/mdi/filter';
	import DisplayIcon from 'virtual:icons/mdi/picture-in-picture-top-right';

	import ToolbarButton from '$lib/components/generic/ui/toolbar/ToolbarButton.svelte';
	import ToolbarGroupItem from '$lib/components/generic/ui/toolbar/ToolbarGroupItem.svelte';
	import type { ToolSpec } from '$lib/components/generic/ui/toolbar/types';
	import { VerdagraphFormType, activate_form } from '../forms/forms';

	let view_plants = true;
	let view_actions = true;
	let view_windows = true;

	export let content_pane_view_options: string[] | undefined;

	let tools: ToolSpec[] = [
		{ label: 'Add Plants', on_click: () => activate_form(VerdagraphFormType.Add), icon: AddIcon },
		{ label: 'Single Select', on_click: () => {}, icon: PointerSelectIcon },
		{ label: 'Group select', on_click: () => {}, icon: GroupSelectIcon },
		{
			label: 'Record Observation',
			on_click: () => activate_form(VerdagraphFormType.Observe),
			icon: RecordObservationIcon
		},
		{ label: 'Group Plants', on_click: () => {}, icon: GroupPlantsIcon },
		{ label: 'Ungroup Plants', on_click: () => {}, icon: UngroupPlantsIcon },
		{ label: 'Expire Plants', on_click: () => {}, icon: PullIcon },
		{ label: 'Delete Plants', on_click: () => {}, icon: DeleteIcon },
		{
			label: 'Patterns',
			on_click: () => activate_form(VerdagraphFormType.Patterns),
			icon: PatternsIcon
		},
		{ label: 'Plans', on_click: () => activate_form(VerdagraphFormType.Plans), icon: PlansIcon },
		{
			label: 'Generators',
			on_click: () => activate_form(VerdagraphFormType.Generators),
			icon: GeneratorsIcon
		}
	];

	let content_toggles: ToolSpec[] = [
		{ label: 'Toggle Calendar', on_click: () => {}, icon: CalendarToggleIcon },
		{ label: 'Toggle Layout', on_click: () => {}, icon: LayoutToggleIcon },
		{ label: 'Toggle List', on_click: () => {}, icon: ListToggleIcon }
	];

	let options: ToolSpec[] = [
		{ label: 'Filter', on_click: () => activate_form(VerdagraphFormType.Filter), icon: FilterIcon },
		{
			label: 'Display',
			on_click: () => activate_form(VerdagraphFormType.Display),
			icon: DisplayIcon
		}
	];
</script>

<Toolbar.Root class="flex items-center justify-center rounded-lg bg-neutral-3">
	<ul class="flex h-full items-center justify-center">
		<!-- Main toolbar -->
		{#each tools as tool}
			<li class="flex items-center">
				<ToolbarButton spec={tool} size="text-md" />
			</li>
		{/each}

		<!-- Settings toolbar -->
		{#each options as option}
			<li class="flex items-center">
				<ToolbarButton spec={option} />
			</li>
		{/each}

		<Separator.Root orientation={'vertical'} class="h-full w-[1px] self-stretch bg-neutral-7" />

		<!-- Content pane (calendar, layout, list) toggles -->
		<Toolbar.Group
			type="multiple"
			bind:value={content_pane_view_options}
			class="flex h-full items-center"
		>
			{#each content_toggles as content_toggle}
				<ToolbarGroupItem spec={content_toggle} size="text-md" />
			{/each}
		</Toolbar.Group>
	</ul>
</Toolbar.Root>
