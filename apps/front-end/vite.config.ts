/// <reference types='vitest' />
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/front-end',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    svgr({
      include: '**/*.svg',
    }),
  ],
})
