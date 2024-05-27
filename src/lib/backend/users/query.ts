import type { AxiosRequestConfig } from 'axios';
import { useQuery } from '@sveltestack/svelte-query';
import type { UserPublicSchema, UserFullSchema } from '$lib/codegen';
import { userProfiles } from '$lib/codegen/users/users';
import type { ErrorResponse } from '../common';

class UserQueryService {
	static otherProfiles = function (user_ids: string[]) {
		return useQuery<UserPublicSchema[], ErrorResponse>(
			['otherProfile', { ...user_ids }],
			function () {
				return userProfiles(user_ids)
					.then(function (response) {
						return response.data as UserPublicSchema[];
					})
					.catch(function (error) {
						throw error.response.data as ErrorResponse;
					});
			}
		);
	};

	static selfProfile = function () {
		return useQuery<UserFullSchema, ErrorResponse>('selfProfile', function () {
			return userProfiles()
				.then(function (response) {
					return response.data as UserFullSchema;
				})
				.catch(function (error) {
					throw error.response.data as ErrorResponse;
				});
		});
	};
}

export default UserQueryService;
