import { createRouter, createWebHistory } from 'vue-router'

import Points from '../pages/Points.vue'
import Equipment from '../pages/Equipment.vue'
import Guides from '../pages/Guides.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/points'
    },
    {
        path: '/points',
        name: 'Points',
        component: Points
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: Equipment
    },
    {   
        path: '/guides',
        name: 'Guides',
        component: Guides
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router