import { writable } from 'svelte/store';

export const theme = writable('light');

// Function to toggle theme
export const toggle_theme = () => {
	theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
};
