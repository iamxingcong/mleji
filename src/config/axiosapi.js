import axios from '@/config/axios'

export default {
  login (data) {
    return axios().post('/ops/user/login/', data)
  },
  loginout () {
    return axios().get('/api/user/logout/')
  },
  datapanel () {
    return axios().get('/api/data/panel/')
  },
  indexfaceIndexData () {
    return axios().get('/indexface/indexData/')
  }
}
