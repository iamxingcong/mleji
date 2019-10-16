import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ManagePanel from '@/components/page/ManagePanel'
import UserManage from '@/components/page/UserManage'

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
      name: '',
      component: ManagePanel,
      children: [
        {
          path: '',
          component: UserManage,
          meta: ['用户管理', '管理']

        }
      ]
    }

  ]
})
