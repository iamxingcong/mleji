import axios from '@/config/axios'

// const ur = 'http://dspeaklow.api.wangge0101.cn'
const ur = ''
export default {
  login (data) {
<<<<<<< HEAD
    return axios().post(ur + '/ops/user/login/', data)
=======
    return axios().post('/ops/user/login/', data)
>>>>>>> b9edeb672c3a7534dfa71c684ecb5693fcdaccdb
  },
  loginout () {
    return axios().get(ur + '/ops/user/logout/')
  },
  datapanel () {
<<<<<<< HEAD
    return axios().get(ur + '/ops/data/panel/')
  },
  user () {
    return axios().get(ur + '/ops/user/')
=======
    return axios().get('/api/data/panel/')
  },
  indexfaceIndexData () {
    return axios().get('/indexface/indexData/')
>>>>>>> b9edeb672c3a7534dfa71c684ecb5693fcdaccdb
  }
}
