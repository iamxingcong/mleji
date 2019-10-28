import axios from '@/config/axios'

// const ur = 'http://dspeaklow.api.wangge0101.cn'
const ur = ''
export default {
  login (data) {
    return axios().post(ur + '/ops/user/login/', data)
  },
  loginout () {
    return axios().get(ur + '/ops/user/logout/')
  },
  datapanel () {
    return axios().get(ur + '/ops/data/panel/')
  },
  user () {
    return axios().get(ur + '/ops/user/')
  }
}
