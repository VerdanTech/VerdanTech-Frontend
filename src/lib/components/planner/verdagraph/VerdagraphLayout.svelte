<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Stage, Layer, Rect } from 'svelte-konva';
	import ResponsiveCanvasWrapper from './ResponsiveCanvasWrapper.svelte';

	let stage_width: number = 0;
	let stage_height: number = 0;
	let colors;

	function handleResize(event) {
		stage_width = event.detail.width;
		stage_height = event.detail.height;
	}
</script>

<ResponsiveCanvasWrapper class="h-full" on:resize={handleResize} bind:colors>
	{#if stage_width && stage_height}
		<Stage config={{ width: stage_width, height: stage_height }}>
			<Layer>
				<Rect
					config={{
						x: 0,
						y: 0,
						width: stage_width,
						height: stage_height,
						fill: colors.neutral['olive1']
					}}
				/>
			</Layer>
		</Stage>
	{/if}
</ResponsiveCanvasWrapper>
