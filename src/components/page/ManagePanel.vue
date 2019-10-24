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
import Trans from '@/config/trans.js'

export default {
  name: 'ManagePanel',
  components: {
    Header,
    Aside,
    Footer,
    Trans
  },
  data () {
    return {
      msg: 'CMusic Copyright版权曲库管理系统',
      name: ''
    }
  },
  created () {
    this.name = this.$route.query.name
    Trans.$emit('logindata', this.name)
  },
  methods: {

  }

}
</script>
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
