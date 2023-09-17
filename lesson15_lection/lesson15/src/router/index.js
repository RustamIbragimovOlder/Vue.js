import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/DashBoard.vue'
import AboutContent from '@/pages/AboutContent.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard
        },
        {
            // path: '/aboutcontent',
            path: '/about*',
            name: 'aboutcontent',
            component: AboutContent
        },
        {
            path: '/404',
            name: 'notfound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        },
    ]
})