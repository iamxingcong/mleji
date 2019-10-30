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
  useradd (data) {
    return axi().post('/ops/user/add/', data)
  },
  musiclist () {
    return axi().get('/ops/project')
  },
  verifycode (data) {
    return axi().post('/ops/verify_code/', data)
  },
  resetpassword (data) {
    return axi().post('/ops/user/reset_password/', data)
  }

}
