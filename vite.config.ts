import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json',
      include: ['src/index.ts', 'src/themeAugmentation.ts', 'src/lib'],
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MuiCreateMaterialYouTheme',
      fileName: (format) => `mui-create-material-you-theme.${format}.js`,
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
