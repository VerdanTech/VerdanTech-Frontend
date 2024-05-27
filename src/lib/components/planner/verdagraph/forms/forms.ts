import { writable, derived } from 'svelte/store';

import AddPlantsForm from './AddPlantsForm.svelte';
import ObserveForm from './ObserveForm.svelte';
import PatternsForm from './PatternsForm.svelte';
import PlansForm from './PlansForm.svelte';
import GeneratorsForm from './GeneratorsForm.svelte';
import FilterForm from './FilterForm.svelte';
import DisplayForm from './DisplayForm.svelte';

export enum VerdagraphFormType {
	Add = 'add',
	Observe = 'observe',
	Patterns = 'patterns',
	Plans = 'plans',
	Generators = 'generators',
	Filter = 'filter',
	Display = 'display'
}

type FormAttributeType = {
	id: VerdagraphFormType;
	tab_label: string;
	tab_content;
};

const form_attributes: FormAttributeType[] = [
	{ id: VerdagraphFormType.Add, tab_label: 'Add', tab_content: AddPlantsForm },
	{ id: VerdagraphFormType.Observe, tab_label: 'Observe', tab_content: ObserveForm },
	{ id: VerdagraphFormType.Patterns, tab_label: 'Patterns', tab_content: PatternsForm },
	{ id: VerdagraphFormType.Plans, tab_label: 'Plans', tab_content: PlansForm },
	{ id: VerdagraphFormType.Generators, tab_label: 'Generators', tab_content: GeneratorsForm },
	{ id: VerdagraphFormType.Filter, tab_label: 'Filter', tab_content: FilterForm },
	{ id: VerdagraphFormType.Display, tab_label: 'Display', tab_content: DisplayForm }
];

export const active_form_ids = writable<VerdagraphFormType[]>([]);
export const last_activated_id = writable<VerdagraphFormType | ''>('');
export const has_active_forms = derived(
	active_form_ids,
	($active_form_ids) => $active_form_ids.length > 0
);

export function activate_form(id: VerdagraphFormType) {
	active_form_ids.update((ids) => {
		if (!ids.includes(id)) {
			ids.push(id);
		}
		return ids;
	});
	last_activated_id.update(() => id);
}

export function close_form(id: VerdagraphFormType) {
	active_form_ids.update((ids) => {
		ids = ids.filter((i) => i !== id);
		if (ids.length > 0) {
			last_activated_id.set(ids[ids.length - 1]);
		} else {
			last_activated_id.set('');
		}
		return ids;
	});
}

export function getFormAttributesById(id: VerdagraphFormType): FormAttributeType {
	let attributes = form_attributes.find((attr) => attr.id === id);
	if (attributes === undefined) {
		throw Error('Unmapped value of VerdagraphFormType: ' + id);
	}
	return attributes;
}
