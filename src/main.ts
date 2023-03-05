/*
 * @Descripttion: liuze
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-02-14 15:15:06
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-05 10:17:44
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/common.scss' // common css
import '@/styles/index.scss' // global css

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
