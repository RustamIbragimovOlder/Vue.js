import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
// import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/project/:page',
    name: 'project',
    component: ProjectPage
  },
  // {
  //   path: '/project_details',
  //   name: 'project_details',
  //   component: ProjectDetailsPage
  // },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/blog_details',
    name: 'blog_details',
    component: BlogDetailsPage
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
];

export default routes;

