import { createApp } from 'vue'
import App from './App.vue'
// 引入css变量
import '@/assets/css/variables.css';
// 使用rem布局
import '@/utils/rem'

import routers from './router/index';

const app = createApp(App).use(routers);
app.mount('#app')
