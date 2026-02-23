import { defineConfig } from 'rolldown';

const libName = 'fnUtils';

export default defineConfig(() => {
	return [
		// ['esm', 'js']
		['commonjs', 'js']
	].map(([format, fileExt]) => ({
		input: 'src/index.ts',

		output: {
			file: `dist/${libName}.${fileExt}`,
			format,
			name: libName
		}
	}));
});
