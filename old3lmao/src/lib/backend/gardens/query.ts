import type { AxiosRequestConfig } from 'axios';
import { useQuery } from '@sveltestack/svelte-query';
import type { GardenFullSchema } from '$lib/codegen';
import { userProfiles } from '$lib/codegen/users/users';
import type { ErrorResponse } from '../common';

class GardenQueryService {
	static get_by_key = function (garden_keys: string[]) {
		return useQuery<GardenFullSchema[], ErrorResponse>(
			['get_by_key', { ...garden_keys }],
			function () {}
		);
	};

	static get_all_gardens = function () {
		return useQuery<GardenPublicSchema[], ErrorResponse>('all_gardens');
	};
}

export default GardenQueryService;
