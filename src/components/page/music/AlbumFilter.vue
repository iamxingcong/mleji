<template>
  <div id='AlbumFilter'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">筛选条件</span>
      </el-row>
      <div class="filterwrap">
        <el-row>
            <span class="cktit left">厂牌：</span>
            <div class="tagsright">

              <el-radio-group v-model="checkedCities" @change="handleCheckedLabelsChange">

                <el-radio-button v-for="i in labeluids" :label="i" :key="i.uuid" >{{i.name.substr(0,6)}}</el-radio-button>
              </el-radio-group>
            </div>

        </el-row>
        <el-row>
          <div class="inline">
            <span class="cktit left">关键词：</span>
          </div>
          <div class="inline">
            <el-input v-model="form.name" placeholder="请输入内容" size="mini"></el-input>
          </div>
          <div class="inline">
            <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          </div>
          <span class="right mt15 mr15">
            <el-button type="primary" size="mini" @click='openaddalbum'>添加专辑</el-button>
          </span>
        </el-row>
      </div>
    </div>

    <div class="whitewraps mt15">
      <el-row>
        <span class="tit left">专辑列表</span>
      </el-row>
      <div class="pd15">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column label="专辑图片" width="120">
            <template slot-scope="scope">
              <img :src="scope.row.cover ? scope.row.cover : img " width="100" :key="scope.row.image" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="label_id"
            label="ID"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="专辑名称"
           >
          </el-table-column>
          <el-table-column
            prop="album_no"
            label="专辑编号">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="专辑描述">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作"
            width="145">
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
          :current-page="currentPage1"
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
      </div>
    </div>

    <div id='openaddalbum'>
      <el-dialog title='添加专辑：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisiblea'>
        <el-form :model='formb'>
          <el-form-item label='专辑名：' :label-width='formLabelWidth'>
            <el-input v-model='formb.name' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='专辑号：' :label-width='formLabelWidth'>
            <el-input v-model='formb.album_no' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='请填写专辑描述：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入专辑描述'
              v-model='formb.desc'>
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
          <el-form-item label='厂牌ID：' autocomplete='on' :label-width='formLabelWidth'>
            <el-select v-model="formb.label_id" placeholder="请选择">
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
          <el-button size='mini' @click='dialogFormVisiblea = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='addalbums'>确 定</el-button>
        </div>
      </el-dialog>
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
          <el-form-item label='厂牌ID：' autocomplete='on' :label-width='formLabelWidth'>
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
          <el-button size='mini' @click='dialogFormVisibleedit = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='editalbumConfirm'>确 定</el-button>
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
            是否确定删除专辑: {{uuid}}
        </span>
        <span>专辑删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../../assets/js/albumfilter.js"></script>
<style scoped>
.el-checkbox-button, .el-checkbox-button__inner{
    position: relative;
    display: block;
    float: left;
    margin-left: 15px;
    opacity: 0.9;
    margin-bottom: 5px;
}
.filterwrap{
  margin-top: 15px;
}
.cktit{
  line-height: 25px;
  color: #443344;
  padding-left: 15px;
  font-size: 16px;
  width: 80px;
  text-align: right;
}
.filterwrap .el-row{
  margin-bottom: 5px;
}
.whitewraps  .el-tag{
  margin-bottom: 3px;
  margin-left: 15px;
  float: left;
}
.whitewraps  .el-row .el-button--text{
  display: block;
  float: left;
  color: #e2e2e2;
  margin-left: 15px;
  margin-top: -3.5px;
}
.el-table::before {

    height: 0px !important;
}
.el-row .el-form{
  width: 300px;
}
.el-row .inline{
  display: block;
  float: left;
  margin: 10px auto;
}
.el-row .inline:nth-child(2),
.el-row .inline:nth-child(3) {
  margin-left: 15px;

}
.el-tag{
  height: 25px;
  line-height: 25px;
}
.el-dialog__body span{
  display: block;
  clear: both;
  line-height: 2em;
}
.tagsright{
  display: block;
  float: right;
  width: calc(100% - 100px);
  text-align: left;
}
.el-radio-button{
  float: left;
  margin-bottom: 15px;
}
</style>
