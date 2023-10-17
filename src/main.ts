//vue3的模板
import { createApp } from 'vue'
import App from './App.vue'
//router
import router from './router/index'
//elementui的
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//elment-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Pinia构造函数
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia()
app.use(router).use(ElementPlus).use(pinia).mount("#app")
//注册elment-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}