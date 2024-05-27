import { writable } from 'svelte/store';

/**
 * @brief	Used to store context about the current active garden.
 */
export type GardenContext = {
	active_garden_key: string | null;
};

export const garden_context = writable<GardenContext>({ active_garden_key: null });
