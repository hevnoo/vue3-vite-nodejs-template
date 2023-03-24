//* vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
  plugins: [vue()],
  // 配置根路径与@路径
  base: "./",
  resolve: {
    // ↓配置路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  //将constant.scss中的scss常量加载到全局
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/constant.scss";`
      }
    }
  },
  
})