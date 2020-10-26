import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/router'
import store from "./store/store"


const app = createApp(App)
app.use(router)
app.use(store)

router.isReady().then(() => {
    app.mount('#app')
    }
)
