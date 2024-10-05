import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        svgr({
            svgrOptions: {
                exportType: 'default',
                ref: true,
                svgo: false,
                titleProp: true
            },
            include: '**/*.svg'
        })
    ],
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend')
    }
});
