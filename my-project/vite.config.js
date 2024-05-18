import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // Ensures the host header is updated to the target URL
        secure: false,      // If you're using HTTP, not HTTPS
      },
    },
  },
  plugins: [react()],
});
