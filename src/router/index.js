import { createRouter, createWebHistory } from 'vue-router'

import Points from '../pages/Points.vue'
import Test from '../pages/Test.vue'

const routes = [
    {
        path: '/',
        name: 'Points',
        component: Points
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router