/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * VerdanTech-API
 * API of the VerdanTech Project Web Application
 * OpenAPI spec version: 0.1.0
 */
import { createMutation } from '@tanstack/svelte-query';
import type { CreateMutationOptions, MutationFunction } from '@tanstack/svelte-query';
import type {
	RestAuthDetail,
	PasswordChangeRequest,
	PasswordReset,
	PasswordResetRequest,
	PasswordResetConfirm,
	PasswordResetConfirmRequest,
	Register,
	RegisterRequest,
	ResendEmailVerification,
	ResendEmailVerificationRequest,
	VerifyEmailRequest
} from '../verdanTechAPI.schemas';
import { customInstance } from '../../customAxios';

/**
 * Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2
Returns the success/fail message.
 */
export const accountsPasswordChangeCreate = (passwordChangeRequest: PasswordChangeRequest) => {
	return customInstance<RestAuthDetail>({
		url: `/accounts/password/change`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: passwordChangeRequest
	});
};

export type AccountsPasswordChangeCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordChangeCreate>>
>;
export type AccountsPasswordChangeCreateMutationBody = PasswordChangeRequest;
export type AccountsPasswordChangeCreateMutationError = unknown;

export const createAccountsPasswordChangeCreate = <TError = unknown, TContext = unknown>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		TError,
		{ data: PasswordChangeRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		{ data: PasswordChangeRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordChangeCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		TError,
		{ data: PasswordChangeRequest },
		TContext
	>(mutationFn, mutationOptions);
};
/**
 * Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email
Returns the success/fail message.
 */
export const accountsPasswordResetCreate = (passwordResetRequest: PasswordResetRequest) => {
	return customInstance<PasswordReset>({
		url: `/accounts/password/reset`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: passwordResetRequest
	});
};

export type AccountsPasswordResetCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordResetCreate>>
>;
export type AccountsPasswordResetCreateMutationBody = PasswordResetRequest;
export type AccountsPasswordResetCreateMutationError = unknown;

export const createAccountsPasswordResetCreate = <TError = unknown, TContext = unknown>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		TError,
		{ data: PasswordResetRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		{ data: PasswordResetRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordResetCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		TError,
		{ data: PasswordResetRequest },
		TContext
	>(mutationFn, mutationOptions);
};
/**
 * Password reset e-mail link is confirmed, therefore
this resets the user's password.

Accepts the following POST parameters: token, uid,
    new_password1, new_password2
Returns the success/fail message.
 */
export const accountsPasswordResetConfirmCreate = (
	passwordResetConfirmRequest: PasswordResetConfirmRequest
) => {
	return customInstance<PasswordResetConfirm>({
		url: `/accounts/password/reset/confirm`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: passwordResetConfirmRequest
	});
};

export type AccountsPasswordResetConfirmCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>
>;
export type AccountsPasswordResetConfirmCreateMutationBody = PasswordResetConfirmRequest;
export type AccountsPasswordResetConfirmCreateMutationError = unknown;

export const createAccountsPasswordResetConfirmCreate = <
	TError = unknown,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		TError,
		{ data: PasswordResetConfirmRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		{ data: PasswordResetConfirmRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordResetConfirmCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		TError,
		{ data: PasswordResetConfirmRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationCreate = (registerRequest: RegisterRequest) => {
	return customInstance<Register>({
		url: `/accounts/registration`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: registerRequest
	});
};

export type AccountsRegistrationCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationCreate>>
>;
export type AccountsRegistrationCreateMutationBody = RegisterRequest;
export type AccountsRegistrationCreateMutationError = unknown;

export const createAccountsRegistrationCreate = <TError = unknown, TContext = unknown>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		TError,
		{ data: RegisterRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		{ data: RegisterRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		TError,
		{ data: RegisterRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationResendEmailCreate = (
	resendEmailVerificationRequest: ResendEmailVerificationRequest
) => {
	return customInstance<ResendEmailVerification>({
		url: `/accounts/registration/resend_email`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: resendEmailVerificationRequest
	});
};

export type AccountsRegistrationResendEmailCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>
>;
export type AccountsRegistrationResendEmailCreateMutationBody = ResendEmailVerificationRequest;
export type AccountsRegistrationResendEmailCreateMutationError = unknown;

export const createAccountsRegistrationResendEmailCreate = <
	TError = unknown,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		TError,
		{ data: ResendEmailVerificationRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		{ data: ResendEmailVerificationRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationResendEmailCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		TError,
		{ data: ResendEmailVerificationRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationVerifyEmailCreate = (verifyEmailRequest: VerifyEmailRequest) => {
	return customInstance<void>({
		url: `/accounts/registration/verify_email`,
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: verifyEmailRequest
	});
};

export type AccountsRegistrationVerifyEmailCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>
>;
export type AccountsRegistrationVerifyEmailCreateMutationBody = VerifyEmailRequest;
export type AccountsRegistrationVerifyEmailCreateMutationError = unknown;

export const createAccountsRegistrationVerifyEmailCreate = <
	TError = unknown,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		TError,
		{ data: VerifyEmailRequest },
		TContext
	>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		{ data: VerifyEmailRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationVerifyEmailCreate(data);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		TError,
		{ data: VerifyEmailRequest },
		TContext
	>(mutationFn, mutationOptions);
};
