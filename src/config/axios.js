import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
export default() => {
  return axios.create({
<<<<<<< HEAD
    baseURL: 'http://dspeaklow.wangge0101.cn',
=======
    // baseURL: 'https://front.miido.com.cn/shop/rest/',
    withCredentials: true,
>>>>>>> b9edeb672c3a7534dfa71c684ecb5693fcdaccdb
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
