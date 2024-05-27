<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingSpinner from 'virtual:icons/svg-spinners/90-ring-with-bg';
	import type { ErrorResponse } from '$lib/backend';
	import type { UserLoginInput } from '$lib/backend/users/auth';
	import UserAuthService from '$lib/backend/users/auth';
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
	const loginMutation = UserAuthService.login(function () {
		goto('app');
	});

	async function handleSubmit() {
		const input: UserLoginInput = {
			email_address: ($form.values.email as string) ?? '',
			password: ($form.values.password as string) ?? ''
		};

		$loginMutation.mutate(input);
	}
</script>

<form use:form on:submit|preventDefault={handleSubmit}>
	<ul>
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

		<!-- Password input. -->
		<li class="py-4 pb-8">
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
			{#each errors.password ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Multi field errors. -->
		<li class="pt-4">
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
			{#if $loginMutation.isLoading}
				<div class="flex justify-center">
					<LoadingSpinner style="font-size: 2rem" />
				</div>
			{/if}
		</li>
	</ul>
</form>
