/// <reference types='vitest' />
/// <reference types="vite-plugin-svgr/client" />

import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  cacheDir: '../../../../node_modules/.vite/client-pages-main',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({ entryRoot: 'src', tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'), skipDiagnostics: true }),
    svgr({
      include: '**/*.svg',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'client-pages-main',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
