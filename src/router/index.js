import { createRouter, createWebHistory } from 'vue-router'

import index from '../pages/indexPage.vue'
import sample from '../pages/samplePage.vue'
import mentor from '../pages/mentorPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },{
    path: '/sample',
    name: 'sample',
    component: sample
  },{
    path: '/mentor',
    name: 'mentor',
    component: mentor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
