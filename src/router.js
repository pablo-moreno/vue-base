import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
      children: [
        {
          path: '/pets',
          name: 'pets',
          component: () => ('./views/Pets')
        },
        {
          path: '/pets/:id',
          name: 'petDetail',
          component: () => import('./views/PetDetail')
        },
        {
          path: '/organizations',
          name: 'organizations',
          component: () => ('./views/Organizations')
        },
        {
          path: '/organizations/:id',
          name: 'organizationDetail',
          component: () => import('./views/OrganizationDetail')
        },
      ]
    },
  ]
})
