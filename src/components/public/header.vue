<template>
  <div class='header'>
    <el-row>
      <div class='search200'>
         <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" v-on:click="searching"></el-button>
        </el-input>
      </div>
      <div class='btngroup'>
        <span class='text'>{{user}}</span>
        <el-button type='text' v-on:click="loginout">退出</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
import Trans from '../../config/trans.js'
import axiosapi from '@/config/axiosapi'

function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === '') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export default {
  name: 'Header',
  components: {
    Trans
  },
  data () {
    return {
      user: '--',
      search: ''
    }
  },
  created () {
    this.user = getCookie('user')
    Trans.$on('logindata', this.lgdt)
  },
  methods: {
    async loginout () {
      try {
        await axiosapi.loginout()
      } catch (e) {
        console.log(e)
      }
      this.$router.push('/')
    },
    searching: function () {
      console.log('u r searching: ' + this.search)
    },
    lgdt (vl) {
      this.user = vl
    }
  }
}
</script>
<style scoped>
  .search200{
    max-width: 200px;
    margin-top: 12.5px;
    float: left;
    display: block;
    margin-right: 20px;
    position: relative;
  }
  .btngroup{
    display: block;
    margin-top: 10px;
    float: right;
  }
  .btngroup span, .btngroup button{
    color: #999;
  }
  .text{
    margin-right: 10px;
  }
  .el-button{
    padding: 13px 20px;
  }

</style>
