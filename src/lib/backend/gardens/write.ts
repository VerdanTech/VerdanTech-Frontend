import type { AxiosRequestConfig } from 'axios';
import { useMutation } from '@sveltestack/svelte-query';
import type {
	GardenFullSchema,
	GardenCreateInput,
	GardenCreateInputVisibility
} from '$lib/codegen';
import { gardenCreate } from '$lib/codegen/gardens/gardens';
import type { ErrorResponse } from '../common';
import { goto } from '$app/navigation';

/**
 *
 */
class GardenWriteService {
	static create = function (onSuccess: any) {
		return useMutation<GardenFullSchema, ErrorResponse, GardenCreateInput>(
			function (input: GardenCreateInput) {
				return gardenCreate(input)
					.then(function (response) {
						return response.data as GardenFullSchema;
					})
					.catch(function (error) {
						throw error.response.data as ErrorResponse;
					});
			},
			{
				onSuccess: onSuccess
			}
		);
	};
}

export default GardenWriteService;
export type { GardenCreateInput, GardenCreateInputVisibility };
