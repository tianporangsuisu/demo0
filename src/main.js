import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue';
import axios from "./axios/axiosInstance";
import './mock'
import './css/default.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$axios=axios;