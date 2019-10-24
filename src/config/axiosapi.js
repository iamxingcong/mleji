import axios from '@/config/axios'

export default {
  login (data) {
    return axios().post('/api/user/login/', data)
  },
  loginout () {
    return axios().get('/api/user/logout/')
  },
  datapanel () {
    return axios().get('/api/data/panel/')
  }
}
