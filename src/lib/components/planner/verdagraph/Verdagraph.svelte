<script lang="ts">
	import { onDestroy } from 'svelte';
	import * as Resizable from '$lib/components/generic/ui/resizable';
	import VerdagraphForm from './VerdagraphForm.svelte';
	import VerdagraphToolbar from './toolbar/VerdagraphToolbar.svelte';
	import VerdagraphCalendar from './VerdagraphCalendar.svelte';
	import VerdagraphLayout from './VerdagraphLayout.svelte';
	import Tree from './tree/Tree.svelte';
	import VerdagraphTimelineSelector from './timeline_selector/VerdagraphTimelineSelector.svelte';

	import { has_active_forms } from './forms/forms';

	let content_pane_view_options: string[] | undefined = [
		'Toggle Calendar',
		'Toggle Layout',
		'Toggle List'
	];

	let calendar_pane_order: number = 1;
	let layout_pane_order: number = 2;
	let list_pane_order: number = 3;

	/* Pane Orientations */
	let form_pane_direction: Resizable.Direction = 'horizontal';
	let content_pane_direction: Resizable.Direction = 'horizontal';

	let min_content_pane_size: number = 10;
</script>

<div class="flex h-full flex-col bg-neutral-1">
	<VerdagraphToolbar bind:content_pane_view_options />

	<div class="overflow-none grow">
		<Resizable.PaneGroup direction={form_pane_direction} autoSaveId={'form_pane'}>
			<Resizable.Pane defaultSize={80} order={1}>
				<Resizable.PaneGroup direction={content_pane_direction} autoSaveId={'content_pane'}>
					{#if content_pane_view_options?.includes('Toggle Calendar')}
						<Resizable.Pane
							defaultSize={40}
							minSize={min_content_pane_size}
							order={calendar_pane_order}
						>
							<VerdagraphCalendar />
						</Resizable.Pane>
						<Resizable.Handle class="w-[1px] bg-neutral-6" />
					{/if}
					{#if content_pane_view_options?.includes('Toggle Layout')}
						<Resizable.Pane
							defaultSize={40}
							minSize={min_content_pane_size}
							order={layout_pane_order}
						>
							<VerdagraphLayout />
						</Resizable.Pane>
						<Resizable.Handle class="w-[1px] bg-neutral-6" />
					{/if}
					{#if content_pane_view_options?.includes('Toggle List')}
						<Resizable.Pane
							defaultSize={20}
							minSize={min_content_pane_size}
							order={list_pane_order}
							class="@container/tree"
						>
							<Tree />
						</Resizable.Pane>
					{/if}
				</Resizable.PaneGroup>
			</Resizable.Pane>
			<Resizable.Handle />
			{#if $has_active_forms}
				<Resizable.Pane defaultSize={20} order={2}>
					<VerdagraphForm />
				</Resizable.Pane>
			{/if}
		</Resizable.PaneGroup>
	</div>

	<div class="w-full">
		<VerdagraphTimelineSelector />
	</div>
</div>
