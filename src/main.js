import { createApp }       from 'vue'
import { createPinia }     from 'pinia'
import App                 from './App.vue'
import router              from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Облачная тема
import './assets/cloud.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
