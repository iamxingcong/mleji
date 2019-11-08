<template>
  <div id='BrandLists'>

     <el-row>
      <span class='left mr15' :xl="6"  :sm="11" >
        <el-input v-model='input' placeholder='请输入搜索关键词'></el-input>
      </span>
      <span class='left mt5' :xl="5"  :sm="10" >
        <el-button type='primary'  size='mini' >搜索音乐</el-button>
        <el-button type='primary'  size='mini' >全部音乐</el-button>
      </span>
      <span class='right mt5' :xl="11"  :sm="22" >
        <el-button  size='mini'>刷新</el-button>
        <el-button  size='mini'>返回</el-button>
      </span>
    </el-row>

    <div id='musicBrand'>
       <el-row>
        <span class='tit left'>厂牌</span>
        <div  class='right mr15 mt13'>
          <el-button type='primary'  size='mini' icon='el-icon-plus'  @click='openadd'>添加</el-button>
        </div>
      </el-row>

      <div id='brandWrap'>
          <div class='sinbrand' v-for='(i,index) in ms' :key = 'index'>

            <span class='hti'>{{i.name}}</span>
            <div class='brandLogo' :style='{ backgroundImage: `url(${i.logo ? i.logo :  img})` }'></div>
            <span class='desc'>{{i.desc}}</span>
            <div class='crs flex3 c99'>
                <span>专辑</span>
                <span>音乐</span>
                <span>艺术家</span>
            </div>
            <div class='crs flex3 fw700'>
                <span>{{i.album_count}}</span>
                <span>{{i.music_count}}</span>
                <span>{{i.producer_count}}</span>
            </div>
            <div class='crs flex3'>
              <el-button type='text'  class='f12' v-on:click='brandDetail(i.uuid)'>厂牌详情</el-button>
              <el-button type='text'  class='f12' v-on:click='editlabel(i.uuid)'>编辑厂牌</el-button>
              <el-button type='text'  class='f12' v-on:click='deleteBrand(i.uuid)'>删除厂牌</el-button>
            </div>

          </div>
          <div class='paginations'>
            <el-pagination
              background
              @size-change='handleSizeChange'
              @current-change='handleCurrentChange'
              :current-page='currentPage4'
              :page-sizes='[10, 20]'
              :page-size='10'
              layout='prev, pager, next, sizes'
              :total='count'>
            </el-pagination>
          </div>
      </div>
    </div>

    <div id='dialogues'>
       <el-dialog
        title='确认提示'
        :visible.sync='dialogVisible'
        :close-on-click-modal='false'
        width='30%'>
        <span class='fw700 cross'>
          <i class='el-icon-warning'></i>
            是否确定删除厂牌: {{uuid}}
        </span>
        <span class='cross'>厂牌信息删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div id='addlabel'>
      <el-dialog title='添加厂牌：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-form-item label='厂牌名称：' :label-width='formLabelWidth'>
            <el-input v-model='form.name' placeholder="请输入厂牌名称" maxlength='12' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='厂牌介绍：' :label-width='formLabelWidth'>
            <el-input
            maxlength='50'
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入厂牌介绍'
              v-model='form.desc'>
            </el-input>
          </el-form-item>
           <el-form-item label='添加LOGO' :label-width='formLabelWidth'>

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
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogFormVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='addlabels'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='editlabel'>
      <el-dialog title='编辑厂牌：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisibleEdit'>
        <el-form :model='forme'>
          <el-form-item label='厂牌名称：' :label-width='formLabelWidth'>
            <el-input v-model='forme.name' maxlength='12' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='厂牌介绍：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              v-model='forme.desc'>
            </el-input>
          </el-form-item>
           <el-form-item label='添加LOGO' :label-width='formLabelWidth'>

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
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisibleEdit = false'>取 消</el-button>
          <el-button type='primary' @click='editlabelconfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../../assets/js/brandlist.js"></script>
<style scoped src='../../../assets/css/brandlists.css'></style>
