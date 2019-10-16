<template>
  <el-container>
    <el-aside width='200px'>Aside</el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '/publicCom/header.vue'
export default {
  name: 'ManagePanel',
  data() {
    return {
      msg: 'CMusic Copyright版权曲库管理系统'
    };
  }
};
</script>
