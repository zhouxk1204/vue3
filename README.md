#### Vue3 + vite 配置全局sass

1. 安装sass需要的安装包

```
yarn add  sass-loader node-sass sass
```

2. 配置`vite.config.js`

```javascript
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/index.scss";'
      }
    }
  }
})
```