<template>
  <div id='DataManage'>

    <el-row>
      <span class="wd400">
        <el-input v-model="input" placeholder="请输入搜索关键词"></el-input>
      </span>
        <el-button type="primary">搜索音乐</el-button>
        <el-button type="primary">全部音乐</el-button>
        <el-button plain>刷新</el-button>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'DataManage',
  data () {
    return {
      input: ''
    }
  }
}
</script>
<style scoped>
  .el-row span, .el-row .el-button--primary{
    display: block;
    float: left;
  }
  .wd400{
    width: 400px;
    margin-right: 10px;
  }
</style>
