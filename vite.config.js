import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
    // this config the proxy rules for the dev server
    proxy: {
      '/jpx': {
        target: 'http://localhost',
        changeOrigin: true,
      },
    },
  },
});