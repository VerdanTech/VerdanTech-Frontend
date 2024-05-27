import type { AxiosRequestConfig } from 'axios';
import { useMutation } from '@sveltestack/svelte-query';
import type { UserFullSchema, UserCreateInput } from '$lib/codegen';
import { userCreate } from '$lib/codegen/users/users';
import type { ErrorResponse } from '../common';
import { goto } from '$app/navigation';

/**
 *
 */
class UserWriteService {
	static register = function (onSuccess) {
		return useMutation<UserFullSchema, ErrorResponse, UserCreateInput>(
			function (registration: UserCreateInput) {
				return userCreate(registration)
					.then(function (response) {
						return response.data as UserFullSchema;
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

export default UserWriteService;
export type { UserCreateInput };
