<script lang="ts">
	import AuthPrimaryNav from '$lib/components/layout/primary_nav/AuthPrimaryNav.svelte';
	import { garden_context } from '$lib/stores/gardens';

	let active_garden_key: string | null;

	garden_context.subscribe(function (value) {
		active_garden_key = value.active_garden_key;
	});
</script>

<AuthPrimaryNav garden_key={active_garden_key} />

<div class="ml-20">
	<slot />
</div>
