<template>
  <div id='MusicLists'>

     <div class="white">
      <el-row>
        <span class="tit left">曲单搜索</span>
      </el-row>
      <el-row>
        <div class="flex3">
          <div class="demo-input-suffix">
            查询内容：
            <el-input
              placeholder="曲单名称"
              v-model="input1">
            </el-input>
          </div>
          <div class="demo-input-suffix">
              创建时间：
             <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
          </div>
          <div class="demo-input-suffix">
            <el-button size='mini' icon="el-icon-refresh-left">重置</el-button>
            <el-button size='mini' type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
      </el-row>
     </div>

     <div class="white mt15">
        <el-row>
          <span class="tit left">曲单列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini" type='primary' @click="addplaylists">新建曲单</el-button>
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
            label="单曲名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="单曲描述">
          </el-table-column>
          <el-table-column
            prop="music_count"
            label="作品数">
          </el-table-column>
          <el-table-column
            prop="categories"
            label="标签">
          </el-table-column>
           <el-table-column
            prop="is_recommend"
            label="显示位置">
            <template slot-scope="scope">
              <span> {{ scope.row.is_recommend ?  '推荐页' :   '' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="is_active"
            label="状态">
            <template slot-scope="scope">
              <el-switch
                  active-color="#5B7BFA"
                  inactive-color="#dadde5"
                  v-model="scope.row.is_active"
                  @change="schange(scope.row)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            width="250"
            prop="addresse"
            label="操作">
            <template slot-scope="scope">
               <el-button
                type="text"
                @click="detailedUser(scope.row.uuid)">查看</el-button>
               <el-button
                type="text"
                @click="hddelete(scope.row)"
               >
                删除
               </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="paginations">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage3"
          :page-sizes="[10, 20]"
          :page-size="100"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
      </div>

     </div>

    <div id='addplaylist'>
      <el-dialog title='添加歌单：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-form-item label='歌单名称：' :label-width='formLabelWidth'>
            <el-input v-model='form.name' placeholder="请输入歌单名称：" maxlength='12' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='歌单描述：' :label-width='formLabelWidth'>
            <el-input
            maxlength='50'
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入厂牌介绍'
              v-model='form.desc'>
            </el-input>
          </el-form-item>
           <el-form-item label='封面：' :label-width='formLabelWidth'>

            <el-upload
              class="avatar-uploader"
              :action="urls"
              :data='updata'
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

          </el-form-item>
          <el-form-item label='作品数：' :label-width='formLabelWidth'>
            <el-input v-model='form.music_count' placeholder="请输入作品数" type='number' maxlength='12' autocomplete='off'></el-input>
          </el-form-item>

          <el-form-item label='是否曲单推荐页显示:'  :label-width='formLabelWidth'>
            <el-switch
              v-model='form.is_recommend'
              active-color='#13ce66'
              inactive-color='#e2e2e2'>
            </el-switch>
          </el-form-item>

          <el-form-item label='账号状态：' :label-width='formLabelWidth'>
            <el-switch
              v-model='form.is_active'
              active-color='#13ce66'
              inactive-color='#e2e2e2'>
            </el-switch>
          </el-form-item>
        </el-form>

        <div slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogFormVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='addplay'>确 定</el-button>
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
            是否确定删除曲单: {{ uuid }}
        </span>
        <span class='cross'>曲单删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>
<script src="../../assets/js/musiclist.js"></script>
<style scoped>
  .white{
    padding-bottom: 15px;
  }
  .flex3  .demo-input-suffix{
    flex: 3;
    text-align: left;
    margin-left: 20px;
  }
  .demo-input-suffix .el-input{
    width: 200px;
  }
  .white .el-row{
    margin-bottom: 15px;
  }
  .demo-input-suffix button{
    float: right;
    margin-right: 15px;
  }
  .cell{
    display: flex;
  }
  .cell button{
    flex: 3;
  }
</style>
