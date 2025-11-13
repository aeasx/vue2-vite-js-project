import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // 设置路径别名
    },
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']  // 省略导入后缀[7](@ref)
  },
  server: {
    open: true,  // 自动打开浏览器
    port: 3000    // 设置开发服务器端口
  }
})