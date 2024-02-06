// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css' //主题
import Layout from './Layout.vue' //动态效果


export default{
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('MyGlobalComponent' /* ... */)
      },
} 