
import Brands from '@/pages/brands/Brands.vue';
import CreateBrand from '@/pages/brands/CreateBrand.vue';
import Updatebrand from '@/pages/brands/Updatebrand.vue';
import Category from '@/pages/category/category.vue';
import CreateCategory from '@/pages/category/CreateCategory.vue';
import UpdateCategory from '@/pages/category/UpdateCategory.vue';
// import Colors from '@/pages/colors/Colors.vue';
// import CreateColor from '@/pages/colors/CreateColor.vue';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import CreateRole from '@/pages/roles/CreateRole.vue';
import Roles from '@/pages/roles/Roles.vue';
import UpdateRole from '@/pages/roles/UpdateRole.vue';
import Shop from '@/pages/Shop.vue';
import CreateStock from '@/pages/stocks/CreateStock.vue';
import Stocks from '@/pages/stocks/Stocks.vue';
import UpdateStock from '@/pages/stocks/UpdateStock.vue';
import Users from '@/pages/users/Users.vue';


import { createRouter, createWebHistory } from 'vue-router'



const routes = [

  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/shop', component: Shop },

  { path: '/roles', component: Roles },
  { path: '/createrole', component: CreateRole },
  { path: '/roles/edit/:id', component: UpdateRole },
  
  { path: '/users', component: Users },

  { path: '/brands', component: Brands },
  { path: '/createbrand', component: CreateBrand },
  { path: '/brands/edit/:id', component: Updatebrand },

  { path: '/stocks', component: Stocks},
  { path: '/createstock', component: CreateStock },
  { path: '/stocks/edit/:id', component: UpdateStock },
  
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;