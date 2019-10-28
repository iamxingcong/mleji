<template>
  <div id='big_wrap'>
    <div class='login_wrap'>
      <div id='bg_icons' :style='{ backgroundImage: `url(${img})` }'></div>
      <span class='login_title'>{{ msg }}</span>
      <el-form ref='form' :model='form'>
        <div class='login_form'>

          <el-form-item>
            <el-input  placeholder='请输入用户名称'  v-model='user'></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder='请输入登录密码'  v-model='form.password'></el-input>
          </el-form-item>
          <el-row>
            <el-button type='primary' size='medium' v-on:click='login'>登录</el-button>
          </el-row>
          <el-row>
            <el-button type='text'>忘记密码</el-button>
          </el-row>
        </div>
      </el-form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../public/footer.vue'

import axiosapi from '@/config/axiosapi'

// import axios from 'axios'

export default {
  name: 'Login',
  components: {
    Footer
  },
  data () {
    return {
      msg: 'CMusic Copyright版权曲库管理系统',
      user: '+8618710031682',
      pass: '',
      img: require('../../assets/icons/logo.png'),
      form: {
        phone: '',
        password: 'Aa123456'
      },
      forma: {
        email: '',
        password: 'Aa123456'
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
      // try {

      //   axios.post('http://dspeaklow.api.wangge0101.cn/bbb/user/login/', {
      //     phone: '+8618710031682',
      //     password: 'Aa123456'
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // } catch (e) {
      //   console.log(e)
      // }

      try {
<<<<<<< HEAD
        let dt
        if (this.user && (this.user).indexOf('@') !== -1) {
          this.forma.email = this.user
          dt = await axiosapi.login(this.forma)
        } else if (this.user) {
          this.form.phone = this.user
          dt = await axiosapi.login(this.form)
        } else {
          return
        }

=======
        let dt = await axiosapi.indexfaceIndexData()
        console.log(dt)
>>>>>>> b9edeb672c3a7534dfa71c684ecb5693fcdaccdb
        if (dt.status === 200) {
          this.$router.push({path: 'ManagePanel', query: {'name': dt.data.name}})
        }
      } catch (e) {
        console.log(e)
      }
    },
    async loginout () {
      try {
        await axiosapi.indexfaceIndexData()
      } catch (e) {
        console.log(e)
      }
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
#bg_icons {
  width: 115px;
  height: 115px;
  margin: 15px auto;
  display: block;
  background-size: 100% auto;
  border: 1px solid #e2e2e2;
}
.login_title {
  color: #0079fe;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  display: block;
  font-weight: 700;
}
.login_wrap {
  padding: 15px;
  margin: 30px auto;
  background-color: #fff;
  width: 390px;
  height: 500px;
  box-shadow: rgba(153, 153, 153, 0.35) 0px 0px 10px;
  color: rgb(153, 153, 153);
  text-align: left;
  line-height: 20px;
}
.login_form {
  width: 300px;
  display: block;
  margin: 0px auto;
}
.login_form .el-input {
  margin-bottom: 15px;
  height: 50px;
  line-height: 50px;
}
.el-input__inner {
  height: 50px !important;
  line-height: 50px !important;
}
.el-button--medium {
  width: 300px;
}
.el-button--text {
  width: 300px;
  text-align: center;
  margin-top: 40px;
}
</style>
