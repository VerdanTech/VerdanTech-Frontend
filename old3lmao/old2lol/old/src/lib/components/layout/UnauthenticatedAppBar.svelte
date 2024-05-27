<script>
	import Logo from '$lib/components/graphics/logo.svelte';
	import { externalLinks } from '$lib/external';

	let navLinks = [
		{ url: '/guides', label: 'Guides' },
		{ url: externalLinks.project, label: 'Project' },
		{ url: externalLinks.donation, label: 'Donate' }
	];
</script>

<div class="navbar bg-base-300 p-0">
	<!-- 
        Logo and VerdanTech text.
        Displays logo always. Displays text on larger screens.
    -->
	<nav class="navbar-start font-semibold text-md lg:text-lg ml-4">
		<ul class="flex items-center">
			<li class="mr-6">
				<a href="/">
					<Logo size="4rem"></Logo>
				</a>
			</li>
			<li>
				<a href="/" class="hidden md:block">
					<span>VerdanTech</span>
				</a>
			</li>
		</ul>
	</nav>

	<!-- 
        Navigation links.
        Displayed in center on larger screens.
        Collapses to menu button on smaller screens.
    -->
	<nav class="navbar-center font-semibold text-md lg:text-lg hidden md:block">
		<ul class="menu menu-horizontal">
			{#each navLinks as link}
				<li class="">
					<a href={link.url} class="h-full flex">
						<span class="self-center p-4 text-md lg:text-lg"> {link.label} </span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- 
        Navigation links.
        Displayed in center on larger screens.
        Collapses to menu button on smaller screens.
    -->
	<nav class="navbar-end mr-4">
		<ul>
			<a href="/login" role="button" class="btn btn-ghost">Log in</a>
			<a href="/register" role="button" class="btn btn-primary">Get started</a>
		</ul>
	</nav>
</div>
