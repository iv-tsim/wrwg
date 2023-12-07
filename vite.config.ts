import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		server: {
			port: 8000,
		},
		plugins: [react()],
		define: {
			APP_ENV: env.APP_ENV,
		},
		base: env.VITE_BASE,
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
          @use "./src/assets/styles/snippets" as *;
          `,
				},
			},
		},
	}
})

