<script>
	import Logo from '$lib/components/graphics/logo.svelte';
	import { externalLinks } from '$lib/external';

	let navLinks = [
		{ url: '/guides', label: 'Guides' },
		{ url: externalLinks.project, label: 'Project' },
		{ url: externalLinks.donation, label: 'Donate' }
	];
</script>

<!--
@component
Primary navigation between non-garden related app resources.

Shown to un-authenticated users everywhere in the app that
isn't within the context of a Garden.
-->

<div class="bg-primary">
	<div class="navbar-start">
		<!-- 
            Navigation links.
            Displayed within dropdown menu on smaller screens.
        -->
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
			>
				{#each navLinks as link}
					<li class="">
						<a href={link.url} class="flex h-full">
							<span class="text-md self-center p-4 lg:text-lg"> {link.label} </span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- 
            Logo and VerdanTech text.
            Logo displayed always. Text displayed on larger screens.
        -->
		<ul class="flex items-center p-2 text-lg font-semibold md:ml-4">
			<li class="mr-6">
				<a href="/" class="">
					<Logo size="4rem"></Logo>
				</a>
			</li>
			<li>
				<a href="/" class="hidden sm:block">
					<span>VerdanTech</span>
				</a>
			</li>
		</ul>
	</div>

	<div class="navbar-center hidden lg:flex">
		<!-- 
            Navigation links.
            Displayed within top horizontal menu on larger screens.
        -->
		<ul class="menu menu-horizontal text-lg">
			{#each navLinks as link}
				<li class="">
					<a href={link.url} role="button" class="">
						<span class=""> {link.label} </span>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<!-- 
        Login and registration links.
        Registration only displayed on larger screens.
    -->
	<div class="navbar-end mr-4">
		<ul class="flex">
			<a href="/login" role="button" class="btn btn-ghost">Log in</a>
			<a
				href="/register"
				role="button"
				class="btn btn-primary text-primary-content hidden sm:flex">Get started</a
			>
		</ul>
	</div>
</div>
