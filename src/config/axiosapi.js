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
  },
  applyforproject () {
    return axi().get('/ops/apply_for_vip/')
  },
  addlabel (data) {
    return axi().post('/ops/label/', data)
  },
  getlabel () {
    return axi().get('/ops/label/?ordering=-created_at')
  },
  album () {
    return axi().get('/ops/album/')
  },
  addalbum (data) {
    return axi().post('/ops/album/', data)
  },
  labelsearch () {
    return axi().get('/ops/label_search/')
  },
  addmusic (data) {
    return axi().post('/ops/music/', data)
  },
  musiclistmusic () {
    return axi().get('/ops/music/')
  },
  musiccategory () {
    return axi().get('/ops/music_category/')
  },
  musicsearch () {
    return axi().get('/ops/music_search/')
  },
  avatarupload (data) {
    return axi().post('/ops/upload/', data)
  },
  playlist () {
    return axi().get('/ops/playlist/')
  },
  addplaylist (data) {
    return axi().post('/ops/playlist/', data)
  },
  vip () {
    return axi().get('/ops/vip/')
  },
  addvip (data) {
    return axi().post('/ops/vip/', data)
  },
  getcolumn () {
    return axi().get('/ops/column')
  },
  addcolumn (data) {
    return axi().post('/ops/column', data)
  },
  message () {
    return axi().get('/ops/message?ordering=-updated_at')
  },
  addmessage (data) {
    return axi().post('/ops/message', data)
  },
  columnsearch () {
    return axi().get('/ops/column_search')
  },
  panel () {
    return axi().get('/ops/data/panel')
  }

}
