<template>
  <div id='big_wrap'>
    <div id="background"></div>
    <div id="contentwraps">
      <div class='login_div'>
        <div id='bg_icons' :style='{ backgroundImage: `url(${img})` }'></div>
        <span class='login_title'>{{ msg }}</span>
      </div>
      <div class='login_wrap'>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="手机登录" name="first">

          <el-form ref='form' :model='form'>
            <div class='login_form'>
              <el-form-item>
                <div class="w336 mgt40">
                  <el-input  placeholder='手机号'  v-model='form.phone' autocomplete='off'></el-input>
                </div>
              </el-form-item>
              <el-form-item>
                <div class="w336">
                  <el-input type="password" placeholder='密码'  v-model='form.password'></el-input>
                </div>
              </el-form-item>
              <el-row>
                <div class="flr w336">
                  <el-button type='text' @click="ResetPassword">忘记密码</el-button>
                </div>
              </el-row>
              <el-row>
                <div class="w336">
                  <el-button type='primary' size='medium' v-on:click='login'>登录</el-button>
                </div>
              </el-row>
            </div>
          </el-form>

        </el-tab-pane>
        <el-tab-pane label="邮箱登录" name="second">

          <el-form ref='form' :model='forma'>
            <div class='login_form'>
              <el-form-item>
                <div class="w336 mgt40">
                  <el-input  placeholder='邮箱'  v-model='forma.email' autocomplete='off'></el-input>
                </div>
              </el-form-item>
              <el-form-item>
                <div class="w336">
                  <el-input type="password" placeholder='密码'  v-model='forma.password'></el-input>
                </div>
              </el-form-item>
              <el-row>
                <div class="flr w336">
                  <el-button type='text' @click="ResetPassword">忘记密码</el-button>
                </div>
              </el-row>
              <el-row>
                <div class="w336">
                  <el-button type='primary' size='medium' v-on:click='logina'>登录</el-button>
                </div>
              </el-row>
            </div>
          </el-form>

        </el-tab-pane>
      </el-tabs>

      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../public/footer.vue'

import axiosapi from '@/config/axiosapi'

export default {
  name: 'Login',
  components: {
    Footer
  },
  data () {
    return {
      activeName: 'first',
      msg: 'CMusic Copyright版权曲库管理系统',
      user: '',
      pass: '',
      img: require('../../assets/icons/logo.png'),
      form: {
        phone: '',
        password: ''
      },
      forma: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    this.loginout()
    var that = this
    document.onkeydown = function (e) {
      var key = window.event.keyCode
      if (key === 13) {
        that.login()
      }
    }
  },
  methods: {
    async login () {
      try {
        let dt = await axiosapi.login(this.form)
        if (dt.status === 200) {
          this.$router.push({path: 'ManagePanel', query: {'name': dt.data.name}})
        }
      } catch (e) {
        if (e.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(e.response.data)
          console.log(e.response.status)
          console.log(e.response.headers)
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(e.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message)
        }
        console.log(e.config)
      }
    },
    async logina () {
      try {
        let dt = await axiosapi.login(this.forma)

        if (dt.status === 200) {
          this.$router.push({path: 'ManagePanel', query: {'name': dt.data.name}})
        }
      } catch (e) {
        if (e.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(e.response.data)
          console.log(e.response.status)
          console.log(e.response.headers)
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(e.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message)
        }
        console.log(e.config)
      }
    },
    async loginout () {
      try {
        // var hd = await axiosapi.loginout()
        // console.log(hd.headers)
      } catch (e) {
        console.log(e)
      }
      this.$router.push('/')
    },
    ResetPassword () {
      this.$router.push('ResetPassword')
    },
    handleClick (tab, event) {
      console.log(tab.name)
      if (tab.name === 'first') {
        this.form.phone = ''
      } else {
        this.forma.email = ''
      }
    }
  }
}
</script>
<style scoped src='../../assets/css/resetpassword.css'></style>
