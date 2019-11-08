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
      unique-opened
      @select="select"
    >
      <el-menu-item index='DataManage'>
        <i class="el-icon-pie-chart"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
           <i class="el-icon-headset"></i>
          <span>音乐</span>
        </template>
        <el-menu-item index="MusicFilter">音乐列表</el-menu-item>
        <el-menu-item index="BrandLists">厂牌列表</el-menu-item>
        <el-menu-item index="AlbumFilter">专辑列表</el-menu-item>
        <el-menu-item index='MusicLists'>曲单管理</el-menu-item>
      </el-submenu>

      <el-menu-item index='UserManage'>
        <i class="el-icon-user"></i>
        <span slot="title">用户管理 </span>
      </el-menu-item>

      <el-menu-item index='RequestManage'>
        <i class="el-icon-thumb"></i>
        <span slot="title">请求管理 </span>
      </el-menu-item>

      <el-menu-item index='AuthorizeManage'>
        <i class="el-icon-s-check"></i>
        <span slot="title">授权管理</span>
      </el-menu-item>
      <el-menu-item index='NoticeManage'>
        <i class="el-icon-s-comment"></i>
        <span slot="title">通知管理</span>
      </el-menu-item>
      <el-menu-item index='ColumnManage'>
          <i class="el-icon-s-unfold"></i>
          <span slot="title">栏目管理</span>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
           <i class="el-icon-coordinate"></i>
          <span>权限</span>
        </template>
        <el-menu-item index="PermissionManage">权限管理</el-menu-item>
        <el-menu-item index="MemmberDetail">会员详情</el-menu-item>
      </el-submenu>

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
  height: 60px;
  line-height: 60px;
}
.site_logo {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 5px;
  background-size: contain;
}
.site_title i,
.site_title span {
  display: block;
  float: left;
}
.stitle {
  font-size: 1.1em;
  font-weight: 700;
}

</style>
