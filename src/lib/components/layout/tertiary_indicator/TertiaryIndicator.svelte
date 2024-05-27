<script lang="ts">
	import SecondaryNavBreadcrumbs from './TertiaryIndicatorUserContext.svelte';

	export let path: string;
</script>

<!--
@component
Secondary navigation between different sections of a single
feature domain.
-->

<div class="h-8 w-full bg-neutral-3 text-neutral-11">
	<ul class="flex h-full items-center justify-between">
		<!-- Left -->
		<li class="ml-4">
			<SecondaryNavBreadcrumbs {path} />
		</li>

		<!-- Right -->
		<li class="mr-4">context</li>
	</ul>
</div>
