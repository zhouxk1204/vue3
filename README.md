#### 1. Vue3 + vite 配置全局sass

1. 安装sass需要的安装包 `yarn add  sass-loader node-sass sass`

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

#### 2. 按需引入Element-plus

安装插件：`yarn add vite-plugin-style-import vite-plugin-components`

配置`vite.config.js`

```javascript
export default defineConfig({
  plugins: [
    vue(),
    //按需导入element-plus组件
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    //按需导入element-plus的css样式
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
        },
      ],
    }),
  ]
})
```

#### 3. 配置路径别名

配置`vite.config.js`

```javascript
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
```
