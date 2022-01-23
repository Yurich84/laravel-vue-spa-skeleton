import { createRouter, createWebHistory } from 'vue-router'
import {routes} from '@/core/routes'

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (to.hash) {
                resolve({ selector: to.hash })
            } else if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({x: 0, y: 0})
            }
        })
    }
})
