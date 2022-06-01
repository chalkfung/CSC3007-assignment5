import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
Vue.use(Router)

export default new Router ({
    mode : 'history',
    base : process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name: 'home',
            components:
            {
                default: Home,
            } 
        },
        {
            path:'/about',
            name: 'about',
            components:
            {
                default: About,
            }
        }
    ]
})