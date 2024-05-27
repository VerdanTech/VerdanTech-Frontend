import { writable } from 'svelte/store';

export enum ToastType {
	Success,
	Error,
	Info
}

export interface ToastSettings {
	message: string;
	type: ToastType;
	autohide: boolean;
	timeout: number;
	dismissable: boolean;
}
