<script lang="ts">
	import { page } from '$app/stores';
	import SecondaryNav from '$lib/components/layout/secondary_nav/SecondaryNav.svelte';

	const tabs = [
		{ title: 'Verdagraph', route: $page.url.pathname + '/verdagraph' },
		{ title: 'Workbook', route: $page.url.pathname + '/workbook' }
	];
</script>

<SecondaryNav title="Planner" {tabs} />

<slot />
