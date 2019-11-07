<template>
  <el-container>
    <el-aside width='200px'>
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>

</script>
<script src="./../../assets/js/managepanel.js"></script>
<style scoped>
  .el-header{
    box-shadow: 0px 2px 2px #e2e2e2;
  }
  #aside{
    min-height: 100%;
    background-color: rgba(51, 51, 51, 1);
    color: #CCCCCC;
  }
</style>
