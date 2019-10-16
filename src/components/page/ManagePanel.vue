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
import Header from '../public/header.vue'
import Aside from '../public/aside.vue'
import Footer from '../public/footer.vue'
export default {
  name: 'ManagePanel',
  components: {
    Header,
    Aside,
    Footer
  },
  data () {
    return {
      msg: 'CMusic Copyright版权曲库管理系统'
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>
<style scoped>
  .el-header{
    border-bottom: 1px solid #e2e2e2;
  }
  #aside{
    min-height: 100%;
    background-color: rgba(51, 51, 51, 1);
    color: #CCCCCC;
  }
</style>
