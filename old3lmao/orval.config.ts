import { defineConfig } from 'orval';

export default defineConfig({
	vdt_frontend: {
		input: {
			// Path to the openapi specification.
			target: './schema.yml',
			// Whether to apply IBM OpenAPI linter.
			validation: false
		},
		output: {
			// Path to the generated client code.
			workspace: 'src/lib/codegen/',
			// Path relative to workspace to generated client code.
			target: './',
			// What type of client to generate.
			client: 'axios-functions',
			// Generates a folder for every unique openapi tag
			// and a seperate file for real and mocked client code.
			mode: 'tags-split',
			// Whether to generate Mock Service Worker mocked code.
			mock: true,
			// Generates comment headers on client code.
			headers: true,
			// Formats generated code.
			prettier: true,
			override: {
				mutator: {
					path: './src/lib/backend/customAxios.ts',
					name: 'customAxiosInstance'
				}
			}
		}
	}
});
