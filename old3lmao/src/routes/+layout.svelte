<script>
	import 'tailwindcss/tailwind.css';

	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import Toasts from '$lib/components/layout/Toasts.svelte';
</script>

<QueryClientProvider>
	<slot />

	<!--
	<Toasts />
-->
</QueryClientProvider>
