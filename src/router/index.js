import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ManagePanel from '@/components/page/ManagePanel'

import UserManage from '@/components/page/user/UserManage'
import ProjectDetail from '@/components/page/user/ProjectDetail'
import SubmitSuccess from '@/components/page/user/SubmitSuccess'
import UserDetial from '@/components/page/user/UserDetial'
import UserEdit from '@/components/page/user/UserEdit'
import AddUser from '@/components/page/user/AddUser'
import LoginLog from '@/components/page/user/LoginLog'

import home from '@/components/page/home'
import RequestManage from '@/components/page/RequestManage'

import MusicManage from '@/components/page/music/MusicManage'
import MusicFilter from '@/components/page/music/MusicFilter'
import MusicDetail from '@/components/page/music/MusicDetail'
import BrandDetail from '@/components/page/music/BrandDetail'
import AlbumDetail from '@/components/page/music/AlbumDetail'

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
          component: UserManage
        },
        {
          path: '/ProjectDetail',
          component: ProjectDetail
        },
        {
          path: '/SubmitSuccess',
          component: SubmitSuccess
        },
        {
          path: '/UserDetial',
          component: UserDetial
        },
        {
          path: '/UserEdit',
          component: UserEdit
        },
        {
          path: '/AddUser',
          component: AddUser
        },
        {
          path: '/LoginLog',
          component: LoginLog
        },
        {
          path: '/RequestManage',
          component: RequestManage
        },
        {
          path: '/MusicManage',
          component: MusicManage
        },
        {
          path: '/MusicFilter',
          component: MusicFilter
        },
        {
          path: '/MusicDetail',
          component: MusicDetail
        },
        {
          path: '/BrandDetail',
          component: BrandDetail
        },
        {
          path: '/AlbumDetail',
          component: AlbumDetail
        },
        {
          path: '/AuthorizeManage',
          component: AuthorizeManage
        },
        {
          path: '/ProfitManage',
          component: ProfitManage
        },
        {
          path: '/DataManage',
          component: DataManage
        },
        {
          path: '/PermissionManage',
          component: PermissionManage
        },
        {
          path: '/NoticeManage',
          component: NoticeManage
        }
      ]
    }
  ]
})
