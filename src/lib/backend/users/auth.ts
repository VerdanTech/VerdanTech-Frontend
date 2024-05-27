import type { AxiosRequestConfig } from 'axios';
import { useMutation, Query } from '@sveltestack/svelte-query';
import type { UserFullSchema, UserLoginInput, UserLoginResult } from '$lib/codegen';
import { userLogin } from '$lib/codegen/users/users';
import type { ErrorResponse, Result, Success } from '../common';
import { goto } from '$app/navigation';

/**
 *
 */
class UserAuthService {
	static login = function (onSuccess) {
		return useMutation<UserFullSchema, ErrorResponse, UserLoginInput>(
			function (login: UserLoginInput) {
				return userLogin(login)
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

export default UserAuthService;
export type { UserLoginInput };
