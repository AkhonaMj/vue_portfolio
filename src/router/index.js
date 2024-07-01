import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Skills from '../components/SkillsComp.vue'
import Projects from '../components/ProjectCompp.vue'
import Resume from '../components/ResumeComp.vue'
import Testimonials from '../components/TestimonyComp.vue'
import Contact from '../components/ContactComp.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
