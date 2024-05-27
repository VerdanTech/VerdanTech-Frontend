<script lang="ts">
	import AuthPrimaryNav from '$lib/components/layout/primary_nav/AuthPrimaryNav.svelte';
</script>

<div class="flex h-screen w-screen flex-col overflow-clip lg:flex-row">
	<AuthPrimaryNav />
	<div class="order-last mb-16 ml-0 h-auto w-full grow lg:order-first lg:mb-0 lg:ml-16">
		<slot />
	</div>
</div>
