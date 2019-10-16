<template>
  <div class="header">
    <el-row>
      <div class="search200">
        <el-input
          placeholder="请输入搜索内容"
          suffix-icon="el-icon-search"
          v-model="search">
        </el-input>
      </div>
      <div class="btngroup">
        <span class="text">{{user}}</span>

        <el-button type="text">消息</el-button>
        <el-button type="text">账户设置</el-button>
        <el-button type="text">退出</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: 'admin',
      search: ""
    };
  }
};
</script>
<style scoped>
  .search200{
    max-width: 200px;
    margin-top: 10px;
    float: left;
    display: block;
    margin-right: 20px;
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
</style>
