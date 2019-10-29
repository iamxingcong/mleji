import axi from '@/config/axi'

export default {
  login (data) {
    return axi().post('/ops/user/login/', data)
  },
  loginout () {
    return axi().get('/ops/user/logout/')
  },
  datapanel () {
    return axi().get('/ops/data/panel/')
  },
  user () {
    return axi().get('/ops/user/')
  },
  telcode () {
    return axi().get('/ops/tel_code/')
  },
  userprofile () {
    return axi().get('/ops/user/profile/')
  },
  userlist () {
    return axi().get('/ops/user/')
  }

}
