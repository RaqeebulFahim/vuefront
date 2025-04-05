
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import CreateRole from '@/pages/roles/CreateRole.vue';
import Roles from '@/pages/roles/Roles.vue';
import UpdateRole from '@/pages/roles/UpdateRole.vue';
import Shop from '@/pages/Shop.vue';


import { createRouter, createWebHistory } from 'vue-router'



const routes = [

  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/shop', component: Shop },
  { path: '/roles', component: Roles },
  { path: '/createrole', component: CreateRole },
  { path: '/roles/edit/:id', component: UpdateRole },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;