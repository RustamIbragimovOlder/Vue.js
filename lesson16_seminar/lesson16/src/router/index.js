import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Info from '@/pages/Info.vue'
import Contacts from '@/pages/Contacts.vue'
import Catalog from '@/pages/Catalog.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/catalog/:page',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
];

export default routes;
