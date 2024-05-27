<script lang="ts">
	import LoginForm from '$lib/components/forms/LoginForm.svelte';
</script>

<svelte:head>
	<title>Login | VerdanTech</title>
</svelte:head>

<div
	class="bg-base-200 lg-p-12 mx-auto mt-16 w-4/5 rounded-2xl p-4 md:w-1/2 md:p-8 2xl:mt-24 2xl:w-1/4"
>
	<h1 class="p-2 text-2xl">
		Log in or <span
			><a href="./register" class="link-hover link link-accent">create an account</a
			></span
		>
	</h1>
	<div class="divider"></div>

	<LoginForm />
</div>
