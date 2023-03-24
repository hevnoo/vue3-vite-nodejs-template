import { createApp } from 'vue'
import App from './App.vue'
//pinia
import { createPinia } from 'pinia'
//router
// import router from './router/index'
//路由守卫
// import '@/router/modules/permission'
//element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化element
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//注册element-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//styles
import '@/styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
// app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')