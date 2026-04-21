import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // импорт вашего исправленного файла

const app = createApp(App)

app.use(router) // ЭТОТ ШАГ ОБЯЗАТЕЛЕН
app.mount('#app')