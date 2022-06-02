import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "arcoblue-6": "#155bd4",
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
});
