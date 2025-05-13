import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Entry point
      name: 'CoralReactComponents',
      formats: ['es', 'cjs'], // ES and CommonJS formats
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`, // Output file names
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@fluentui/react-components', '@fluentui/react-icons'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@fluentui/react-components': 'FluentUIReactComponents',
          '@fluentui/react-icons': 'FluentUIReactIcons',
        },
      },
    },
  },
});
