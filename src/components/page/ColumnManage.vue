<template>
  <div id='ColumnManage'>
     <div class="white">
      <div class="bdbtm">
        <el-row>
          <span class="tit left">数据列表</span>
          <span class="right mt15 mr15">
            <el-button type="primary" size="mini"  @click='addclm'>添加栏目</el-button>
            <el-button size="mini" @click='backTo'>返回</el-button>
          </span>
        </el-row>
      </div>

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
            prop="name"
            label="栏目名称">
          </el-table-column>
          <el-table-column
            prop="update_at"
            label="修改时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="num"
             width="100"
            label="公告数量（条）">

          </el-table-column>
          <el-table-column
            prop="is_show"
             width="150"
            label="是否显示">
            <template slot-scope="scope">
              <el-switch
                  active-color="#5B7BFA"
                  inactive-color="#dadde5"
                  v-model="scope.row.addressd"
                  @change="schange(scope.row)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            width="190"
            prop="id"
            label="操作">
            <template slot-scope="scope">
               <el-button
                type="text"
                @click="edit(scope.row)">编辑</el-button>
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
          @size-change="handleSizeChangeg"
          @current-change="handleCurrentChangeg"
          :current-page="currentPage3"
          :page-sizes="[10, 20, 30, 100]"
          :page-size="100"
          layout="prev, pager, next, sizes"
          :total="400">
        </el-pagination>
      </div>
    </div>

    <div id='addcolumn'>
      <el-dialog title='添加栏目'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-col :span="22" >
            <el-form-item label='栏目名称：' :label-width='formLabelWidth'>
              <el-input v-model='form.name'  maxlength='12' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="22">
            <el-form-item label='栏目描述：' :label-width='formLabelWidth'>
              <el-input
                type='textarea'
                :autosize='{ minRows: 3, maxRows: 4}'
                placeholder='请输入栏目描述：'
                maxlength='50'
                v-model='form.desc'>
              </el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogFormVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='addcolumncfm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script src='../../assets/js/columnmanage.js'></script>
