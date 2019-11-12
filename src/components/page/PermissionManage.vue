<template>
  <div id='PermissionManage'>
    <div class="whitewraps">
      <div class="pb15">
        <el-row>
          <span class="tit left">会员权限管理</span>
          <span class="right mt15 mr15">
            <el-button size="mini" type="primary" @click="addMember">添加</el-button>
          </span>
        </el-row>
      </div>

      <div class="mg15"  :gutter='15'>

        <el-col :xs="11" :sm="11" :md="5" :lg="5" :xl="6" v-for='i in detail'  :key='i.id'>
          <span class="titlea"> {{ i.name }}</span>
          <table>
              <tr>
                <td>权限</td>
                <td>是否允许</td>
                <td>次数限制</td>
              </tr>
              <tr>
                <td>在线试听</td>
                <td> {{ i.is_preview ? '是' : '否'}} </td>
                <td> {{ i.preview_count }} </td>
              </tr>
              <tr>
                <td>下载水印文件</td>
                <td> {{ i.is_download_preview  ? '是' : '否'}} </td>
                <td> {{ i.download_preview_count }}</td>
              </tr>
              <tr>
                <td>下载原始文件</td>
                <td> {{ i.is_download_origin ? '是' : '否' }} </td>
                <td> {{ i.download_origin_count }}</td>
              </tr>
              <tr>
                <td>下单</td>
                <td colspan='2'>{{ i.is_order ? '是' : '否' }} </td>

              </tr>
          </table>
          <el-button type="text" @click="edit(i.id)">权限编辑</el-button>
          <el-button type="text" @click="checkMemberUser(i.id)">查看详情</el-button>

        </el-col>
      </div>

      </div>

    <addMemberUser :show.sync = "show"> </addMemberUser>
    <checkMemberUser :cshow.sync = "cshow"></checkMemberUser>
    <editMemberUser :dshow.sync = "dshow"  :editid="editi"></editMemberUser>
    <priceSetting :eshow.sync = "eshow"></priceSetting>
    <DeleteDialogue :delshow.sync = 'delshow'  :delid="deli"></DeleteDialogue>
</div>
</template>
<script src='../../assets/js/permissionmanage.js'></script>
<style scoped src='../../assets/css/permissionmanage.css'></style>
