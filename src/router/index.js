import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ManagePanel from '@/components/page/ManagePanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ManagePanel',
      name: 'ManagePanel',
      component: ManagePanel
    }
  ]
})
