import {defineConfig, splitVendorChunkPlugin} from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    build: {
        outDir: 'docs/',
        manifest: true,
        minify: true,
        sourcemap: true,
        emptyOutDir: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    plugins: [
        splitVendorChunkPlugin(),
        legacy({
            targets: ['defaults'],
        }),
    ],
});
