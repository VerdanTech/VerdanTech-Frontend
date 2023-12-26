import { defineConfig } from 'orval';

export default defineConfig({
	vdt_frontend: {
		input: {
			target: './schema.yml'
			//validation: true
		},
		output: {
			mode: 'tags-split',
			client: 'svelte-query',
			target: 'src/lib/clientgen/',
			//useDates: true,
			mock: true,
			//override: {
				//mutator: {
					//path: './src/lib/api/customAxios.ts',
					//name: 'customInstance'
				//}
			}
		}
		//hooks: {
			//afterAllFilesWrite: 'npm run format'
		//}
});
