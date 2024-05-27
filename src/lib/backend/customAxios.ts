import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { get } from 'svelte/store';
import { csrftoken } from '$lib/stores';
import { toastStore, ToastType } from '$lib/stores/toasts';
import type { ToastSettings } from '$lib/stores/toasts';

//Static configuration in the AXIOS_INSTANCE
export const AXIOS_INSTANCE = axios.create({
	baseURL: '',
	withCredentials: true
});

//Dynamic configuration in request/response interceptors
AXIOS_INSTANCE.interceptors.request.use((config) => {
	config.headers['X-CSRFToken'] = get(csrftoken);
	return config;
});

AXIOS_INSTANCE.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status == 500) {
			//Server side error toast
			const toast: ToastSettings = {
				message: 'Error: Server failed (HTTP 500)',
				type: ToastType.Error,
				dismissable: true,
				autohide: true,
				timeout: 5000
			};
			toastStore.trigger(toast);
		}
		throw error;
	}
);

export const customAxiosInstance = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
	return AXIOS_INSTANCE({ ...config });
};

export default customAxiosInstance;
