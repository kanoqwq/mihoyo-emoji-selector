import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  server: {
    proxy: {
      '/MiHoYoEmo/getEmo': {
        target: 'https://bbs-api.mihoyo.com/misc/api/emoticon_set',
        changeOrigin: true,
        // ssl:true,
        rewrite: (path) => {
          return path.replace(/^\/MiHoYoEmo\/getEmo/, '')
        }
      }
    }
  }
})
