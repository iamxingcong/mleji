<template>
  <div id='aside'>
    <div class='site_title' v-on:click="defaultpg">
      <i class='site_logo' :style='{ backgroundImage: `url(${img})` }'></i>
      <span class='stitle'>版权管理系统</span>
    </div>
    <el-menu
      class='el-menu-vertical-demo'
      background-color='#324157'
      text-color='#bfcbd9'
      active-text-color='#20a0ff'
      :default-active='this.$router.path'
      router
      @select="select"

    >
      <el-menu-item index='DataManage'> 数据统计 </el-menu-item>

      <el-submenu index="2">
        <template slot="title">音乐</template>
        <el-menu-item index="MusicManage">音乐管理</el-menu-item>
        <el-menu-item index="MusicFilter">音乐筛选列表</el-menu-item>
        <el-menu-item index="MusicDetail">音乐详情</el-menu-item>
        <el-menu-item index="BrandDetail">厂牌详情</el-menu-item>
        <el-menu-item index="AlbumDetail">专辑详情</el-menu-item>
      </el-submenu>

      <el-menu-item index='UserManage'> 用户管理 </el-menu-item>
      <el-menu-item index='RequestManage'> 请求管理 </el-menu-item>

      <el-menu-item index='AuthorizeManage'> 授权管理 </el-menu-item>
      <el-menu-item index='ProfitManage'> 收益管理 </el-menu-item>
      <el-menu-item index='PermissionManage'> 权限管理 </el-menu-item>
      <el-menu-item index='NoticeManage'> 通知管理 </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      img: require('../../assets/icons/logo.png'),
      index: ''
    }
  },
  methods: {
    defaultpg: function () {
      this.$router.push('ManagePanel')
    },
    select: function (index) {
      console.log(index)
    }
  }
}
</script>
<style scoped>
.site_title {
  height: 70px;
  line-height: 70px;
}
.site_logo {
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-top: 14px;
  margin-right: 5px;
  background-size: contain;
}
.site_title i,
.site_title span {
  display: block;
  float: left;
}
.stitle {
  font-size: 18px;
  font-weight: 700;
}

</style>
