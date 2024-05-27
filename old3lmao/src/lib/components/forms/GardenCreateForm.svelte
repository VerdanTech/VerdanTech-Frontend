<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingSpinner from 'virtual:icons/svg-spinners/90-ring-with-bg';
	import InfoIcon from 'virtual:icons/mdi/information-outline';
	import type { ErrorResponse } from '$lib/backend';
	import type {
		GardenCreateInput,
		GardenCreateInputVisibility
	} from '$lib/backend/gardens/write';
	import GardenWriteService from '$lib/backend/gardens/write';
	import {
		useForm,
		validators,
		Hint,
		HintGroup,
		required,
		maxLength
	} from 'svelte-use-form';
	import FormError from './error.svelte';

	const form = useForm();
	let errors: ErrorResponse = {};
	const createMutation = GardenWriteService.create(function () {
		goto('app');
	});

	async function handleSubmit() {
		const input: GardenCreateInput = {
			name: ($form.values.name as string) ?? '',
			visibility: ($form.values.visibility as GardenCreateInputVisibility) ?? '',
			description: ($form.values.description as string) ?? ''
		};

		$createMutation.mutate(input);
	}
</script>

<form use:form on:submit|preventDefault={handleSubmit}>
	<ul>
		<!-- Name input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Name</span>
				</div>
				<input
					type="text"
					name="name"
					placeholder="Name"
					use:validators={[required]}
					class="input input-bordered w-full"
				/>
			</label>
			<HintGroup for="name">
				<Hint on="required"><FormError text={'Garden name is required'} /></Hint>
			</HintGroup>
			{#each errors.name ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Visibility input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Visibility</span>
					<div
						class="tooltip tooltip-left lg:tooltip-right"
						data-tip="Visibility controls who can view a garden. Private gardens can only be viewed by those with a membership and registered account. Unlisted gardens may be viewed by anyone but will not be accessible by any means other than possession of a link. Public gardens may be searchable."
					>
						<InfoIcon />
					</div>
				</div>
				<select
					name="visibility"
					placeholder="Visibility"
					use:validators={[required]}
					class="select select-bordered w-full"
				>
					<option selected>Private</option>
					<option>Unlisted</option>
					<option>Public</option>
				</select>
			</label>
			<HintGroup for="visibility">
				<Hint on="required"><FormError text={'Visibility is required'} /></Hint>
			</HintGroup>
			{#each errors.visibility ?? [] as error}
				<FormError text={error} />
			{/each}
		</li>

		<!-- Description input. -->
		<li class="py-4">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text-lg">Description</span>
					<span class="label-text-lg opacity-80">Optional</span>
				</div>
				<textarea
					name="description"
					placeholder="Description"
					use:validators={[maxLength(500)]}
					class="textarea input-bordered w-full"
				/>
			</label>
			<HintGroup for="description">
				<Hint on="maxLength"><FormError text={'Maximum of 500 characters'} /></Hint>
			</HintGroup>
			{#each errors.description ?? [] as error}
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
			<button disabled={!$form.valid} class="btn btn-primary w-full">Create</button>
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
