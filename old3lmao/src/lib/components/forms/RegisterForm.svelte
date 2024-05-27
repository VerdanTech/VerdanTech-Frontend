<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingSpinner from 'virtual:icons/svg-spinners/90-ring-with-bg';
	import type { ErrorResponse } from '$lib/backend';
	import type { UserCreateInput } from '$lib/backend/users/write';
	import UserWriteService from '$lib/backend/users/write';
	import {
		useForm,
		validators,
		Hint,
		HintGroup,
		email,
		required
	} from 'svelte-use-form';
	import FormError from './error.svelte';

	const form = useForm();
	let errors: ErrorResponse = {};
	const createMutation = UserWriteService.register(function () {
		goto('app');
	});

	async function handleSubmit() {
		const input: UserCreateInput = {
			username: ($form.values.username as string) ?? '',
			email_address: ($form.values.email as string) ?? '',
			password1: ($form.values.password1 as string) ?? '',
			password2: ($form.values.password2 as string) ?? ''
		};

		$createMutation.mutate(input);
	}
</script>

<form use:form on:submit|preventDefault={handleSubmit}>
	<ul>
		<!-- Username input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Email</span>
				</div>
				<input
					type="text"
					name="username"
					placeholder="Username"
					use:validators={[required]}
					class="input input-bordered w-full"
				/>
			</label>
			<HintGroup for="username">
				<Hint on="required"><FormError text={'Username is required'} /></Hint>
			</HintGroup>
			{#each errors.username ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Email input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Email</span>
				</div>
				<input
					type="email"
					name="email"
					placeholder="Email"
					use:validators={[required, email]}
					class="input input-bordered w-full"
				/>
			</label>
			<HintGroup for="email">
				<Hint on="required"><FormError text={'Email is required'} /></Hint>
				<Hint on="email"><FormError text={'Invalid email'} /></Hint>
			</HintGroup>
			{#each errors.email ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Password1 input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Password</span>
				</div>
				<input
					type="password"
					name="password"
					placeholder="Password"
					use:validators={[required]}
					class="input input-bordered w-full"
				/>
			</label>
			<HintGroup for="password">
				<Hint on="required"><FormError text={'Password is required'} /></Hint>
			</HintGroup>
			{#each errors.password1 ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Password2 input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Re-type Password</span>
				</div>
				<input
					type="password"
					name="password2"
					placeholder="Re-type Password"
					use:validators={[required]}
					class="input input-bordered w-full"
				/>
			</label>
			<HintGroup for="password2">
				<Hint on="required"><FormError text={'Password is required'} /></Hint>
			</HintGroup>
			{#each errors.password ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Multi field errors. -->
		<li class="pt-8">
			{#each errors.multi_field_errors ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Input button. -->
		<li class="py-4">
			<button disabled={!$form.valid} class="btn btn-primary w-full">Login</button>
		</li>

		<!-- Mutation status. -->
		<li>
			{#if $createMutation.isLoading}
				<div class="flex justify-center">
					<LoadingSpinner style="font-size: 2rem" />
				</div>
			{/if}
		</li>
	</ul>
</form>
