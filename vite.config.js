import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         //  'arcoblue-6': '#f85959',
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
});
