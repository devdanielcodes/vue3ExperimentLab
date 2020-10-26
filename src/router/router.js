import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'



const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ],
    history: createWebHistory()
})

export default router