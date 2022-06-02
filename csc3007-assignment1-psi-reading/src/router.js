import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView.vue'
import A1 from '@/views/A1View.vue'
import PageNotFound from '@/views/PageNotFound.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            components:
            {
                default: Home,
            }
        },
        {
            path: '/a1',
            name: 'a1',
            components:
            {
                default: A1,
            }
        },
        {
            path: '*',
            components:
            {
                default: PageNotFound
            }
        }
    ]
})