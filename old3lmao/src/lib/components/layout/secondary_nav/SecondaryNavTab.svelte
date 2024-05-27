<script lang="ts">
	import { goto } from '$app/navigation';
	import { activeTab } from '$lib/stores/tabs';
	export let title: string;
	export let route: string;

	function handleClick() {
		activeTab.set(route);
		goto(route);
	}
</script>

<a
	href="verdagraph"
	role="tab"
	class="tab text-xl {$activeTab === route ? 'tab-active' : ''}"
	on:click|preventDefault={handleClick}>{title}</a
>
