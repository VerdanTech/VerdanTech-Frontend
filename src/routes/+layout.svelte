<script>
	import '../app.pcss';
	import 'tailwindcss/tailwind.css';

	import { QueryClientProvider } from '@sveltestack/svelte-query';
</script>

<QueryClientProvider>
	<slot />

	<!--
	<Toasts />
-->
</QueryClientProvider>
