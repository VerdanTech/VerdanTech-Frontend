<script lang="ts">
	import { onDestroy, createEventDispatcher } from 'svelte';
	import { light, dark } from '$lib/colors';
	import { theme } from '$lib/stores/theme';

	export let colors;

	let container_div: HTMLDivElement;
	let width: number = 0;
	let height: number = 0;
	const dispatch = createEventDispatcher();

	$: if (container_div) {
		const update_dimensions = function () {
			width = container_div.clientWidth;
			height = container_div.clientHeight;
			dispatch('resize', { width: width, height: height });
		};

		update_dimensions();

		const resize_observer = new ResizeObserver(function () {
			update_dimensions();
		});
		resize_observer.observe(container_div);

		onDestroy(function () {
			resize_observer.disconnect();
		});
	}

	$: {
		if ($theme === 'light') {
			colors = light;
		} else {
			colors = dark;
		}
		console.log(colors);
	}
</script>

<div class={$$props.class} bind:this={container_div}>
	<slot />
</div>
