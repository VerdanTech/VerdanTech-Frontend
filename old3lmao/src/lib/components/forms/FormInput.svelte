<script>
	import type { Validator } from 'svelte-use-form';

	export let name: string;
	export let errors: string[];
	export let validators: { [validator: Validator]: string };
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text-lg">{$name}</span>
	</div>
	<input
		type="text"
		name={$name}
		placeholder={$name}
		use:validators={[required]}
		class="input input-bordered w-full"
	/>
</label>
<HintGroup for={$name}>
	{#each validators as validator}
		<Hint on="required"><FormError text={validators} /></Hint>
	{/each}
</HintGroup>
{#each errors.username ?? [] as error}
	<FormError text={error} />
{/each}
