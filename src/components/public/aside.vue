<template>
  <div id='aside'>
      <div class='site_title'>
        <i class='site_logo' :style='{backgroundImage:`url(${img})`}'></i>
        <span class='stitle'>版权管理系统</span>
      </div>
      <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
      >
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      img: require('../../assets/icons/logo.png')
    }
  }
}
</script>
<style scoped>
  .site_title{
    height: 70px;
    line-height: 70px;
  }
  .site_logo{

    width: 40px;
    height: 40px;
    margin-left: 15px;
    margin-top: 14px;
    margin-right: 5px;
    background-size: contain;

  }
  .site_title i, .site_title span{
    display: block;
    float: left;
  }
  .stitle{
    font-size: 18px;
    font-weight: 700;
  }
</style>
