<template>
  <div id='BrandDetail'>
    <div class="crs">
      <div class="brnaLogo"  :style='{ backgroundImage: `url(${ label.logo ? label.logo : img})` }'></div>
      <div class="logotitle">
        {{label.name}}
      </div>
      <div class="logointro">
        {{label.desc}}
      </div>
    </div>
    <div class="crs mt15">
      <el-row>
        <span class="tit left">专辑列表</span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tb"
          border
          style="width: 100%"
        >
          <el-table-column label="专辑图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.cover ? scope.row.cover : img" width="100" :key="scope.row.cover ? scope.row.cover : img" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="专辑ID"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="专辑名称"
          >
          </el-table-column>
          <el-table-column
            prop="album_no"
            label="专辑编号"
          >
          </el-table-column>
          <el-table-column
            prop="desc"
            label="专辑描述"
          >
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作"
          >
            <template slot-scope="scope">
                <el-button
                  type="text"
                 @click="checkAlbum(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="editAlbum(scope.row.uuid)">编辑</el-button>
                <el-button
                  type="text"
                  @click="deleteAlbum(scope.row.uuid)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="paginations">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
      </div>

    </div>

    <div id='editalbum'>
      <el-dialog title='编辑专辑：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisibleedit'>
        <el-form :model='formedit'>
          <el-form-item label='专辑名：' :label-width='formLabelWidth'>
            <el-input v-model='formedit.name' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='专辑号：' :label-width='formLabelWidth'>
            <el-input v-model='formedit.album_no' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='请填写专辑描述：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入专辑描述'
              v-model='formedit.desc'>
            </el-input>
          </el-form-item>

          <el-form-item label='专辑封面：' :label-width='formLabelWidth'>

            <el-upload
              class="avatar-uploader"
              :action="urls"
              :data='updatas'
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

          </el-form-item>
          <el-form-item label='formedit' autocomplete='on' :label-width='formLabelWidth'>
            <el-select v-model="formedit.label_id" placeholder="请选择">
              <el-option
                v-for="item in labeluids"
                :key="item.name"
                :label="item.name"
                :value="item.uuid">
                <span style="float: left">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.uuid }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisibleedit = false'>取 消</el-button>
          <el-button type='primary' @click='editalbumConfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='dialogues'>
       <el-dialog
        title='确认提示'
        :visible.sync='dialogVisible'
        :close-on-click-modal='false'
        width='30%'>
        <span class='fw700'>
          <i class='el-icon-warning'></i>
            是否确定删除厂牌: {{uuid}}
        </span>
        <span>厂牌信息删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button @click='dialogVisible = false'>取 消</el-button>
          <el-button type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../../assets/js/branddetail.js"></script>
<style scoped>
.brnaLogo{
    width: 120px;
    height: 120px;
    background-position: center center;
    background-size: 100% auto;
    border-radius: 4px;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #e2e2e2;
    float: left;
}
.crs{
  overflow: auto;
  background-color: #fff;
}
.logotitle, .logointro{
  width: calc(100% - 185px);
  display: block;
  float: right;
  text-align: left;
  color: #434344;
}
.logotitle{
  line-height: 110px;
  height: 70px;
  font-weight: 700;
  font-size: 18px;
}
.logointro{
  line-height: 30px;
  height: 50px;
}
#BrandDetail .el-table th{
  background-color: #fff !important;
}
.el-table__header-wrapper{
    border-bottom: 1px solid #EBEEF5 !important;
}

</style>
