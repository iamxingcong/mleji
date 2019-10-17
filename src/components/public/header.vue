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
        <el-button type='text'>消息</el-button>
        <el-button type='text'>账户设置</el-button>
        <el-button type='text' v-on:click="loginout">退出</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      user: 'admin',
      search: ''
    }
  },
  methods: {
    loginout: function () {
      this.$router.push('/')
    },
    searching: function () {
      console.log('u r searching: ' + this.search)
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
