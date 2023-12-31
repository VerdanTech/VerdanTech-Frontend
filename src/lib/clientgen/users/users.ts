/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * VerdanTech-Backend
 * OpenAPI spec version: 0.1.0
 */
import {
  createMutation
} from '@tanstack/svelte-query'
import type {
  CreateMutationOptions,
  MutationFunction
} from '@tanstack/svelte-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  UserCreateInput,
  UserCreateUserResponseBody,
  UserPasswordResetConfirmInput,
  UserPasswordResetRequestInput,
  UserVerifyEmailConfirmInput,
  UserVerifyEmailRequestInput,
  VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm400,
  VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest400,
  VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm400,
  VdtapiUsersVerificationPasswordRequestUserPasswordResetRequest400,
  VdtapiUsersWriteCreateUserCreate400
} from '../verdanTechBackend.schemas'



/**
 * Close email confirmation and verify email.
 * @summary Email confirmation confirm.
 */
export const vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm = (
    userVerifyEmailConfirmInput: UserVerifyEmailConfirmInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.post(
      `/vdtapi/users/verification/email/verification_confirm`,
      userVerifyEmailConfirmInput,options
    );
  }



export const getVdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirmMutationOptions = <TError = AxiosError<VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm>>, TError,{data: UserVerifyEmailConfirmInput}, TContext>, axios?: AxiosRequestConfig}
): CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm>>, TError,{data: UserVerifyEmailConfirmInput}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm>>, {data: UserVerifyEmailConfirmInput}> = (props) => {
          const {data} = props ?? {};

          return  vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirmMutationResult = NonNullable<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm>>>
    export type VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirmMutationBody = UserVerifyEmailConfirmInput
    export type VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirmMutationError = AxiosError<VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm400>

    /**
 * @summary Email confirmation confirm.
 */
export const createVdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm = <TError = AxiosError<VdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirm>>, TError,{data: UserVerifyEmailConfirmInput}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getVdtapiUsersVerificationEmailVerificationConfirmUserEmailConfirmationConfirmMutationOptions(options);

      return createMutation(mutationOptions);
    }
    /**
 * Create a new email confirmation and send confirmation email.
 * @summary Email confirmation request
 */
export const vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest = (
    userVerifyEmailRequestInput: UserVerifyEmailRequestInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.post(
      `/vdtapi/users/verification/email/verification_request`,
      userVerifyEmailRequestInput,options
    );
  }



export const getVdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequestMutationOptions = <TError = AxiosError<VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest>>, TError,{data: UserVerifyEmailRequestInput}, TContext>, axios?: AxiosRequestConfig}
): CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest>>, TError,{data: UserVerifyEmailRequestInput}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest>>, {data: UserVerifyEmailRequestInput}> = (props) => {
          const {data} = props ?? {};

          return  vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequestMutationResult = NonNullable<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest>>>
    export type VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequestMutationBody = UserVerifyEmailRequestInput
    export type VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequestMutationError = AxiosError<VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest400>

    /**
 * @summary Email confirmation request
 */
export const createVdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest = <TError = AxiosError<VdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequest>>, TError,{data: UserVerifyEmailRequestInput}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getVdtapiUsersVerificationEmailVerificationRequestUserEmailConfirmationRequestMutationOptions(options);

      return createMutation(mutationOptions);
    }
    /**
 * Close a password reset request and change password
 * @summary Password reset confirm
 */
export const vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm = (
    userPasswordResetConfirmInput: UserPasswordResetConfirmInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.post(
      `/vdtapi/users/verification/password/confirm`,
      userPasswordResetConfirmInput,options
    );
  }



export const getVdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirmMutationOptions = <TError = AxiosError<VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm>>, TError,{data: UserPasswordResetConfirmInput}, TContext>, axios?: AxiosRequestConfig}
): CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm>>, TError,{data: UserPasswordResetConfirmInput}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm>>, {data: UserPasswordResetConfirmInput}> = (props) => {
          const {data} = props ?? {};

          return  vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirmMutationResult = NonNullable<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm>>>
    export type VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirmMutationBody = UserPasswordResetConfirmInput
    export type VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirmMutationError = AxiosError<VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm400>

    /**
 * @summary Password reset confirm
 */
export const createVdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm = <TError = AxiosError<VdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirm>>, TError,{data: UserPasswordResetConfirmInput}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getVdtapiUsersVerificationPasswordConfirmUserPasswordResetConfirmMutationOptions(options);

      return createMutation(mutationOptions);
    }
    /**
 * Open a new password reset request and send confirmation email
 * @summary Password reset request
 */
export const vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest = (
    userPasswordResetRequestInput: UserPasswordResetRequestInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.post(
      `/vdtapi/users/verification/password/request`,
      userPasswordResetRequestInput,options
    );
  }



export const getVdtapiUsersVerificationPasswordRequestUserPasswordResetRequestMutationOptions = <TError = AxiosError<VdtapiUsersVerificationPasswordRequestUserPasswordResetRequest400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest>>, TError,{data: UserPasswordResetRequestInput}, TContext>, axios?: AxiosRequestConfig}
): CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest>>, TError,{data: UserPasswordResetRequestInput}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest>>, {data: UserPasswordResetRequestInput}> = (props) => {
          const {data} = props ?? {};

          return  vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type VdtapiUsersVerificationPasswordRequestUserPasswordResetRequestMutationResult = NonNullable<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest>>>
    export type VdtapiUsersVerificationPasswordRequestUserPasswordResetRequestMutationBody = UserPasswordResetRequestInput
    export type VdtapiUsersVerificationPasswordRequestUserPasswordResetRequestMutationError = AxiosError<VdtapiUsersVerificationPasswordRequestUserPasswordResetRequest400>

    /**
 * @summary Password reset request
 */
export const createVdtapiUsersVerificationPasswordRequestUserPasswordResetRequest = <TError = AxiosError<VdtapiUsersVerificationPasswordRequestUserPasswordResetRequest400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersVerificationPasswordRequestUserPasswordResetRequest>>, TError,{data: UserPasswordResetRequestInput}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getVdtapiUsersVerificationPasswordRequestUserPasswordResetRequestMutationOptions(options);

      return createMutation(mutationOptions);
    }
    /**
 * Register a new user and send an email verification if configured.
 * @summary User registration
 */
export const vdtapiUsersWriteCreateUserCreate = (
    userCreateInput: UserCreateInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserCreateUserResponseBody>> => {
    
    return axios.post(
      `/vdtapi/users/write/create`,
      userCreateInput,options
    );
  }



export const getVdtapiUsersWriteCreateUserCreateMutationOptions = <TError = AxiosError<VdtapiUsersWriteCreateUserCreate400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersWriteCreateUserCreate>>, TError,{data: UserCreateInput}, TContext>, axios?: AxiosRequestConfig}
): CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersWriteCreateUserCreate>>, TError,{data: UserCreateInput}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof vdtapiUsersWriteCreateUserCreate>>, {data: UserCreateInput}> = (props) => {
          const {data} = props ?? {};

          return  vdtapiUsersWriteCreateUserCreate(data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type VdtapiUsersWriteCreateUserCreateMutationResult = NonNullable<Awaited<ReturnType<typeof vdtapiUsersWriteCreateUserCreate>>>
    export type VdtapiUsersWriteCreateUserCreateMutationBody = UserCreateInput
    export type VdtapiUsersWriteCreateUserCreateMutationError = AxiosError<VdtapiUsersWriteCreateUserCreate400>

    /**
 * @summary User registration
 */
export const createVdtapiUsersWriteCreateUserCreate = <TError = AxiosError<VdtapiUsersWriteCreateUserCreate400>,
    TContext = unknown>(options?: { mutation?:CreateMutationOptions<Awaited<ReturnType<typeof vdtapiUsersWriteCreateUserCreate>>, TError,{data: UserCreateInput}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getVdtapiUsersWriteCreateUserCreateMutationOptions(options);

      return createMutation(mutationOptions);
    }
    