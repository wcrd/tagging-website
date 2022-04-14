import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index.js'
import './assets/main.css'

createApp(App)
    .use(Router)
    .mount('#app')

