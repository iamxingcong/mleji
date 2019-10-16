import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ManagePanel from '@/components/page/ManagePanel'
import UserManage from '@/components/page/UserManage'
import home from '@/components/page/home'
import RequestManage from '@/components/page/RequestManage'
import MusicManage from '@/components/page/MusicManage'
import AuthorizeManage from '@/components/page/AuthorizeManage'
import ProfitManage from '@/components/page/ProfitManage'
import DataManage from '@/components/page/DataManage'
import PermissionManage from '@/components/page/PermissionManage'
import NoticeManage from '@/components/page/NoticeManage'

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
        },
        {
          path: '/RequestManage',
          component: RequestManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/MusicManage',
          component: MusicManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/AuthorizeManage',
          component: AuthorizeManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/ProfitManage',
          component: ProfitManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/DataManage',
          component: DataManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/PermissionManage',
          component: PermissionManage,
          meta: ['hh', 'sdffs']
        },
        {
          path: '/NoticeManage',
          component: NoticeManage,
          meta: ['hh', 'sdffs']
        }
      ]
    }
  ]
})
