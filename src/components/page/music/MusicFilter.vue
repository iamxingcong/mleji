<template>
  <div id='MusicFilter'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">筛选条件</span>
      </el-row>
      <div class="filterwrap">
        <el-row v-for="i in searchTotal"  :key="i.id" >
          <template v-if="i.type !== 'SPEED'">
            <span class="cktit left mr15"> {{ i.name }} </span>
<!--
              <el-button

                type="text"
                size="mini"
                :v-model="i.type"
                :true-label='i.type'
                @click="btnstyleall(i.type, clked)">
                  全选
              </el-button> -->
              <el-checkbox-group   v-model="filtervs"   @change="btnstyle">
                <el-checkbox-button
                  v-for="s in i.children"
                  :label="s"
                  :key="s.id"
                  :border="false"
                >
                  {{s.name}}
                </el-checkbox-button>
              </el-checkbox-group>

          </template>
          <template v-if="i.type === 'SPEED'">
              <span class="cktit left mr15"> {{ i.name }} </span>

              <el-radio-group v-model="speeds"   @change="btnstyleradio" class='left'>
                <el-radio-button
                  v-for="s in i.children"
                  :label="s"
                  :key="s.id"
                  :border="false"
                >
                  {{s.name}}
                </el-radio-button>
              </el-radio-group>
          </template>
        </el-row>

        <el-row v-if="clearAll" class="filteralreay">
          <span class="cktit left mr15">
            已选条件:
          </span>
          <el-tag
            v-for="tag in tags"
            :key="tag.id"
            @close="cltag(tag)"
            closable
            size="medium"
          >
            {{tag.name}}
          </el-tag>
          <el-button  type="text" size="mini" class="mgl15" @click="clicktagsall">清除全部</el-button>
        </el-row>

      </div>
    </div>

    <div class="whitewraps mt15">
      <el-row>
        <span class="tit left">筛选结果</span>
        <span class="right mt15 mr15">
          <el-button size="mini">导出</el-button>
          <el-button size="mini" @click="addmusicpop">添加音乐</el-button>
        </span>
      </el-row>
      <div class="pd15">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="composer"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="album_name"
            label="专辑名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="length"
            label="时长"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="desc"
            width="180">
          </el-table-column>
          <el-table-column
            prop="track_count"
            label="版本数">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作">
            <template slot-scope="scope">
                <el-button
                  type="text"
                @click="checkMusic(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="downloadMusic(scope.row.uuid)">下载</el-button>
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

    <div id='addlabel'>
      <el-dialog title='添加音乐'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-col :span="11">
            <el-form-item label='音乐名称：' :label-width='formLabelWidth'>
              <el-input v-model='form.name' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='音乐编号：' :label-width='formLabelWidth'>
              <el-input v-model='form.music_no' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='编曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.arranged_by' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.composer' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='词作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.lyricist' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='上传音乐文件：' :label-width='formLabelWidth'>

              <el-upload
                class="avatar-uploader"
                :action="urls"
                :data='updatas'
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <i v-if="imageUrl"  class="avatar">{{imageUrl}}</i>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>

            </el-form-item>
          </el-col>
          <el-col :span="22">
            <el-form-item label='音乐描述：' :label-width='formLabelWidth'>
              <el-input
                type='textarea'
                :autosize='{ minRows: 3, maxRows: 4}'
                placeholder='请输入音乐描述：'
                v-model='form.desc'>
              </el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisible = false'>取 消</el-button>
          <el-button type='primary' @click='addmusics'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../../assets/js/musicfilter.js"></script>
<style scoped>
.el-checkbox-button, .el-checkbox-button__inner,
.el-radio-button, .el-radio-button--mini{
    position: relative;
    display: block;
    float: left;
    margin-left: 15px;
    opacity: 0.9;
}
.filterwrap{
  margin-top: 15px;
}
.cktit{
    line-height: 25px;
    color: #443344;
    padding: 0px 25px;
    font-size: 16px;
    text-align: left;
}
.filterwrap .el-row{
  margin-bottom: 5px;
}
.whitewraps  .el-tag{
  margin-bottom: 3px;
  margin-left: 15px;
  float: left;
}
.whitewraps .el-row  .el-button--text{
  float: left;
}
.el-table::before {

    height: 0px !important;
}
.avatar{
  line-height: 20px;
  display: block;
  text-align: left;
  font-style: normal;
  font-size: 0.8em;
}
.mgl15{
  margin-left: 15px;
}
.filteralreay{
  margin-top: 30px;
}
</style>
