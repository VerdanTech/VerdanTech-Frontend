<script lang="ts">
	import { Tabs } from 'bits-ui';
	import { Button } from '$lib/components/generic/ui/button';
	import DeleteIcon from 'virtual:icons/mdi/close';

	import {
		active_form_ids,
		last_activated_id,
		getFormAttributesById,
		close_form
	} from './forms/forms';

	$: active_forms = $active_form_ids.map((id) => getFormAttributesById(id));

	let value = $last_activated_id;
</script>

<Tabs.Root bind:value class="h-full bg-neutral-2">
	<Tabs.List class="flex w-full flex-row justify-start overflow-auto">
		{#each active_forms as form}
			<Tabs.Trigger
				value={form.id}
				class="flex items-center justify-between py-1 text-neutral-11 {value === form.id
					? 'bg-neutral-3 hover:bg-neutral-4'
					: 'bg-neutral-2 hover:bg-neutral-3'}"
			>
				<span class="mx-4">
					{form.tab_label}
				</span>
				<Button
					class="mx-4 rounded-md {value === form.id ? 'hover:bg-neutral-3' : 'hover:bg-neutral-2'}"
					on:click={() => close_form(form.id)}
				>
					<DeleteIcon />
				</Button>
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each active_forms as form}
		<Tabs.Content value={form.id} class="">
			<svelte:component this={form.tab_content} />
		</Tabs.Content>
	{/each}
</Tabs.Root>
