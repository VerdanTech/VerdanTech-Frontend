<script>
	import ErrorCircleRoundedOutline from 'virtual:icons/material-symbols/error-circle-rounded-outline';
	export let text = '';
</script>

<div class="bg-error flex items-center rounded-2xl">
	<span class="p-1">
		<ErrorCircleRoundedOutline style="font-size: 2em" />
	</span>
	<span class="text-error-content ml-2">
		{text}
	</span>
</div>
