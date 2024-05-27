<script lang="ts">
	import PlansMenuForm from '$lib/components/menus/planner/PlansMenuForm.svelte';
	import DropIcon from 'virtual:icons/material-symbols/arrow-drop-down';

	export let title: string;
</script>

<div class="dropdown">
	<div tabindex="0" role="button" class="btn m-1">
		<span>{title}</span>
		<DropIcon />
	</div>
	<div
		tabindex="0"
		class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
	>
		<slot />
	</div>
</div>
