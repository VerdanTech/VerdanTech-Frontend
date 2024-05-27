<script lang="ts">
	import GardenCreateForm from '$lib/components/forms/GardenCreateForm.svelte';
</script>

<svelte:head>
	<title>Register | VerdanTech</title>
</svelte:head>

<div
	class="bg-base-200 lg-p-12 mx-auto mt-16 w-4/5 rounded-2xl p-4 md:w-1/2 md:p-8 2xl:mt-24 2xl:w-1/4"
>
	<h1 class="p-2 text-2xl">Create a Garden</h1>
	<div class="divider"></div>

	<GardenCreateForm />
</div>
