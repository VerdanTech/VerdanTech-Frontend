<script>
	import DropdownMenuIcon from 'virtual:icons/material-symbols-light/menu-rounded';
	import * as DropdownMenu from '$lib/components/generic/ui/dropdown-menu';
	import { Button } from '$lib/components/generic/ui/button';
	import Logo from '$lib/components/graphics/logo.svelte';
	import { externalLinks } from '$lib/external';

	let navLinks = [
		{ url: '/app/gardens', label: 'Gardens' },
		{ url: '/guides', label: 'Guides' },
		{ url: externalLinks.project, label: 'Project' }
	];
</script>

<!--
@component
Primary navigation between non-garden related app resources.

Shown to un-authenticated users everywhere in the app that
isn't within the context of a Garden.
-->
<header class="border-border sticky left-0 top-0 w-full rounded-none border-b-2 drop-shadow-md">
	<nav class="bg-background flex items-center justify-around py-4">
		<!-- 
            Logo and VerdanTech text.
            Logo displayed always. Text displayed on larger screens.
        -->
		<div class="py-1">
			<ul class="flex items-center gap-6 p-2 text-lg">
				<li>
					<a href="/">
						<Logo size="4rem"></Logo>
					</a>
				</li>
				<li>
					<a href="/" class="hidden lg:block">
						<span class="font-semibold">VerdanTech</span>
					</a>
				</li>
			</ul>
		</div>

		<!-- 
            Navigation links.
            Displayed within top horizontal menu on larger screens.
        -->
		<ul class="hidden gap-4 md:flex md:gap-8 lg:gap-12">
			{#each navLinks as link}
				<li class="">
					<Button
						href={link.url}
						class="text-md bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
						>{link.label}</Button
					>
				</li>
			{/each}
		</ul>

		<!-- 
            Navigation links.
            Displayed within dropdown menu on smaller screens.
        -->
		<div class="flex md:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<DropdownMenuIcon style="font-size:2em" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Navigation</DropdownMenu.Label>
						<DropdownMenu.Separator />
						{#each navLinks as link}
							<DropdownMenu.Item>
								<a href={link.url}>
									<span class="text-md p-2"> {link.label} </span>
								</a>
							</DropdownMenu.Item>
						{/each}
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<a href="/login">
								<span class="text-md p-2"> Login </span>
							</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a href="/register">
								<span class="text-md p-2"> Get Started </span>
							</a>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>

		<!-- 
        Login and registration links.
        Displayed with a top horizontal menu on larger screens.
    -->
		<ul class="hidden gap-8 text-lg md:flex">
			<li class="hidden lg:block">
				<Button
					href="login/"
					class="bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
					>Login</Button
				>
			</li>
			<li>
				<Button href="register/">Get Started</Button>
			</li>
		</ul>
	</nav>
</header>
