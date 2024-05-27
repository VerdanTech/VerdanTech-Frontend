<script lang="ts">
	import { page } from '$app/stores';
	import TertiaryIndicator from '$lib/components/layout/tertiary_indicator/TertiaryIndicator.svelte';
</script>

<div class="flex h-full flex-col">
	<div class="grow">
		<slot />
	</div>
	<TertiaryIndicator path={$page.url.pathname} />
</div>
