import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Accueil from '@/components/Accueil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/french/',
      name: 'Accueil',
      component: Accueil
    }
  ]
})
