import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ManagePanel from '@/components/page/ManagePanel'
import UserManage from '@/components/page/UserManage'
import home from '@/components/page/home'

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
      component: ManagePanel,
      name: '',
      children: [
        {
          path: '',
          component: home,
          meta: []
        },
        {
          path: '/UserManage',
          component: UserManage,
          meta: ['用户管理', '管理']

        }
      ]
    }

  ]
})
