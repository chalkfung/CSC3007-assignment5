import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView.vue'
import A1 from '@/views/A1View.vue'
import A2 from '@/views/A2View.vue'
import A3 from '@/views/A3View.vue'
import A4 from '@/views/A4View.vue'
import PageNotFound from '@/views/PageNotFound.vue'
Vue.use(Router)

export default new Router({
    mode: 'hash',
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
            path: '/a2',
            name: 'a2',
            components:
            {
                default: A2
            }
        },
        {
            path: '/a3',
            name: 'a3',
            components:
            {
                default: A3
            }
        },
        {
            path: '/a4',
            name: 'a4',
            components:
            {
                default: A4
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