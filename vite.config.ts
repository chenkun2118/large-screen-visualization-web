import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import possCssPxToRem from 'postcss-pxtorem';
import viteEslint from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 适配
  css: {
    postcss: {
      plugins: [
        possCssPxToRem({
          rootValue: 192,
          propList: ['*'],
        }),
      ],
    },
  },
  // 配置别名
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
