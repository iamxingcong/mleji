import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
export default() => {
  return axios.create({
    // baseURL: 'http://dspeaklow.wangge0101.cn',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Api-Key': 'idToken',
      's-hd': 'youo want what, give you what, but, how to get,, params, is a problem, but i will try'
    }
  })
}