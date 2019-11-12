<template>
  <div id='MusicListMusicDetail'>
     <div class="white">
      <el-row>
        <span class="tit left"> {{ mldetail.name }}</span>
        <span class="right mt15 mr15">
          <el-button size="mini" type='primary' @click='editmus'>曲单编辑</el-button>
        </span>
      </el-row>
      <el-row>
        <span class="desc"> {{ mldetail.desc }} </span>
      </el-row>
    </div>

    <div class="white mt15">
      <el-row>
        <span class="tit left">音乐列表</span>
        <span class="right mt15 mr15">
          <el-button size="mini" type='primary' @click='addmus'>添加音乐</el-button>
        </span>
      </el-row>
      <div class="pd15">
        <el-table
          border
          :data="playmlist"
          style="width: 100%">
          <el-table-column
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="音乐ID">
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐名称">
          </el-table-column>
          <el-table-column
            prop="album_name"
            label="专辑名称">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="uuid"
            width="90"
            label="操作">
            <template slot-scope="scope">
                <el-button
                  type="text"
                  @click="deleteMusic(scope.row)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="paginations">
        <el-pagination
          background
          @size-change="handleSizeChangeg"
          @current-change="handleCurrentChangeg"
          :current-page="currentPage3"
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
      </div>

    </div>

    <div id='addRelateVersion'>
      <el-dialog title='添加音乐'
      :close-on-click-modal='false'
      :visible.sync='daddRelateVersionPop'>
        <el-form :model='formaddrelate'>
            <el-col :span="24">
              <el-input v-model="addrelatesearch" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="10" class='left'>
              <el-form-item label="选择音乐">
                <el-checkbox-group v-model="musiclistscheckeds" @change="handlemusiclistss">
                  <el-checkbox v-for="i in musiclists" :label="i" :key="i.uuid">{{i.name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            <el-col :span="10" class='right'>
            <el-form-item label="已选">
              <el-tag
                v-for="tag in tagss"
                :key="tag.uuid"
                closable
                @close="handleCloses(tag)"
              >
                {{tag.name}}
              </el-tag>
            </el-form-item>
            </el-col>
        </el-form>

        <div slot='footer' class='dialog-footer'>
            <el-button size='mini' @click='daddRelateVersionPop = false'>取 消</el-button>
            <el-button size='mini' type='primary' @click='daddRelateVersionPopcfm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='dialogues'>
       <el-dialog
        title='确认提示'
        :visible.sync='dialogVisible'
        :close-on-click-modal='false'
        width='30%'>
        <span class='fw700 cross'>
          <i class='el-icon-warning'></i>
            是否确定删除音乐: {{ mname }}
        </span>
        <span class='cross'>音乐删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div id='editmusicl'>
      <el-dialog title='编辑曲单'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisibleedit'>
        <el-form :model='formedit'>
          <el-col :sm="22" :md="22" :lg="11" :xl="11">
            <el-form-item label='曲单名称：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.name' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="22" :md="22" :lg="11" :xl="11">
            <el-form-item label='展示位置：' :label-width='formLabelWidth'>
              <el-radio v-model="formedit.is_recommend"  :label="true">推荐页</el-radio>
              <el-radio v-model="formedit.is_recommend"  :label="false">其他</el-radio>
            </el-form-item>
          </el-col>
          <el-col :sm="22" :md="22" :lg="11" :xl="11">
            <el-form-item label='曲单状态：' :label-width='formLabelWidth'>
              <el-radio v-model="formedit.is_active"  :label="true">激活</el-radio>
              <el-radio v-model="formedit.is_active"  :label="false">否</el-radio>
            </el-form-item>
          </el-col>
          <el-col :sm="22" :md="22" :lg="11" :xl="11">
            <el-form-item label='曲单封面：' :label-width='formLabelWidth'>
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
          </el-col>
          <el-col :sm="22" :md="22" :lg="22" :xl="22">
            <el-form-item label='标签：' :label-width='formLabelWidth'>

              <el-checkbox-group
                v-model="checkedcatories"
                @change='cgcategory'>
                <el-checkbox v-for="cx in catetorieslist" :label="cx.id" :key="cx.id">{{ cx.name }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :sm="22" :md="22" :lg="22" :xl="22">
            <el-form-item label='曲单描述：' :label-width='formLabelWidth'>

              <el-input
                type='textarea'
                :autosize='{ minRows: 3, maxRows: 4}'
                placeholder='请输入曲单描述：'
                v-model='formedit.desc'></el-input>
            </el-form-item>
          </el-col>

        </el-form>

        <div slot='footer' class='dialog-footer'>
            <el-button size='mini' @click='dialogFormVisibleedit = false'>取 消</el-button>
            <el-button size='mini' type='primary' @click='editmusicconfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../../assets/js/musiclistmusicdetail">

</script>
<style  scoped>
  .desc{
    padding: 5px 15px;
    display: block;
    float: left;
    text-align: left;
    color: #434343;
  }
  .white .el-row{
    margin-bottom: 15px;
  }
  .white{
    padding-bottom: 15px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100% !important;
}

#addRelateVersion .el-checkbox{
  display: block;
  line-height: 45px;
}
#addRelateVersion .el-checkbox-group{
  display: block;
  clear: both;
}
#editmusicl .el-tag,
#editmusicl .el-checkbox-group,
#editmusicl .el-checkbox{
  display: block;
  float: left;
}
#addRelateVersion .el-tag{
  display: block;
  float: left;
  clear: both;
  margin: 6px 5px;
}

</style>
