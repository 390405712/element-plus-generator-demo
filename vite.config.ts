
import type { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import html from '@rollup/plugin-html';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Visualizer from 'rollup-plugin-visualizer'
import vueJsx from '@vitejs/plugin-vue-jsx';
// import vueJsx from "@vue/babel-plugin-jsx"
// import styleImport from 'vite-plugin-style-import'
// import viteCompression from 'vite-plugin-compression'
// import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

export default (): UserConfig => {
  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        // 'element-plus-generator':'node_modules/element-plus-generator/lib/index'
      },
    },
    plugins: [
      vue({ script: { refSugar: true } }),
      VueSetupExtend(),
      // vueJsx({}),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        //  dts:'types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        // dirs:['src/components'],
        // directoryAsNamespace:true,
        // dts:'types/components.d.ts',
      }),
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'element-plus',
      //       esModule: true,
      //       resolveStyle: name => {
      //         return `element-plus/lib/theme-chalk/${name}.css` // 按需引入样式
      //       },
      //     },
      //   ],
      // }),
      // viteCompression({
      //   verbose: true,
      //   disable: false,
      //   threshold: 10240,
      //   algorithm: 'gzip',
      //   ext: '.gz',
      // }),
      // importToCDN({
      //   modules: [
      //     autoComplete('vue'),
      //     {
      //       name: 'element-plus',
      //       var: 'ElementPlus',
      //       path: 'https://unpkg.com/element-plus/lib/index.full.js',
      //       css: 'https://unpkg.com/element-plus/lib/theme-chalk/index.css',
      //     },
      //     // {
      //     //   name: 'vant',
      //     //   var: 'vant',
      //     //   path: 'https://cdn.jsdelivr.net/npm/vant@next/lib/vant.min.js',
      //     //   css: 'https://cdn.jsdelivr.net/npm/vant@next/lib/index.css',
      //     // },
      //   ],
      // }),
      Visualizer(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/styles/variable.scss";
            @import "./src/styles/mixin.scss";
          `
        }
      }
    },
    build: {
      rollupOptions: {
        // emptyOutDir:true,
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      },
      terserOptions: {
        //打包后移除console和注释
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    esbuild: {
      jsxInject: `import React from 'react'`
    },
    server: {
      open: true,
      proxy: {
        '^/period': 'http://32.1.2.7:9204',
        '^/file': 'http://32.1.2.7:9300',
        '^/point': 'http://32.1.2.7:9204',
        '^/listTask': 'http://32.1.2.7:9204',
        '^/task': 'http://32.1.2.7:9204',
        '^/expert': 'http://32.1.2.7:9204',
        '^/review': 'http://32.1.2.7:9204',
        '^/domain': 'http://32.1.2.7:9201',
        '^/user/userListByUserId': 'http://32.1.2.7:9201',
        '^/user/list': 'http://32.1.2.7:9204',
      }
    },
  }
}