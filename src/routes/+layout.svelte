<script>
	import '../app.pcss';
	import 'tailwindcss/tailwind.css';

	import { QueryClientProvider } from '@sveltestack/svelte-query';

	import { theme } from '$lib/stores/theme';
</script>

<QueryClientProvider>
	<div class={$theme.includes('dark') ? 'dark' : ''}>
		<slot />
	</div>
</QueryClientProvider>
