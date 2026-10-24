import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Salesforce endpoint has no CORS headers, so proxy it in dev (see vercel.json for prod)
      '/api/lead': {
        target: 'https://zuari.my.salesforce-sites.com',
        changeOrigin: true,
        rewrite: () => '/services/apexrest/WebsiteLead/',
      },
    },
  },
})
