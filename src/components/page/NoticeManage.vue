<template>
  <div id='NoticeManage'>
    <div class="white">
      <div class="bdbtm">
        <el-row>
          <span class="tit left">通知列表</span>
        </el-row>
      </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <div class="flex4">
          <div class="demo-input-suffix">
              查询内容：
            <el-input
              placeholder="用户ID/账号"
              v-model="input1">
            </el-input>
          </div>
          <div class="demo-input-suffix">
              消息状态：

            <el-select v-model="form.status" placeholder="请选择">
              <el-option label='等待发送' value="WAITING"></el-option>
              <el-option label="已发送" value="SENT"></el-option>
              <el-option label="撤回消息" value="REVERT"></el-option>
            </el-select>
          </div>
          <div class="demo-input-suffix">
              栏目：
            <el-select v-model="form.column_id" placeholder="请选择消息栏目">
              <el-option
                v-for="item in columnlst"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                <span style="float: left">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.id }}</span>
              </el-option>
            </el-select>
          </div>
          <div class="demo-input-suffix">
            <el-button size='mini' icon="el-icon-refresh-left">重置</el-button>
            <el-button size='mini' type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
      </el-row>
    </el-form>
    </div>

    <div class="white mt15">
      <el-row>
          <span class="tit left">数据列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini" @click="createNotice">新增消息</el-button>
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
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="250">
          </el-table-column>
          <el-table-column
            prop="updated_at"
            label="修改时间">
          </el-table-column>
          <el-table-column
            prop="user_name"
            label="发布人员">
          </el-table-column>
          <el-table-column
            prop="column_name"
            label="栏目">
          </el-table-column>
          <el-table-column
            prop="status"
            label="消息状态">
              <template slot-scope="scope">
                {{ scope.row.status | stfil(scope.row.status) }}
              </template>
          </el-table-column>
          <el-table-column
            width="250"
            prop="id"
            label="操作">
            <template slot-scope="scope">
               <el-button
                type="text"
                @click="checkNotice(scope.row)">查看</el-button>
              <el-button
                type="text"
                 v-if='scope.row.status === "WAITING"'
                @click="editNotice(scope.row)">编辑</el-button>
              <el-button
                type="text"
                v-if='scope.row.status !== "SENT"'
                @click="deleteNotice(scope.row)">删除</el-button>
              <el-button
                v-if='scope.row.status === "WAITING"'
                type="text"
                @click="sents(scope.row)"> 发布 </el-button>
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
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
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
            是否确定删除消息: {{ title }}
        </span>
        <span class='cross'>消息删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>
<script src='../../assets/js/noticemanage.js'></script>

<style scoped>
  .white{
    padding-bottom: 15px;
  }
  .flex4  .demo-input-suffix{
    flex: 4;
    text-align: left;
    margin-left: 20px;
  }
  .demo-input-suffix .el-input,
  .demo-input-suffix .el-select{
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
  i{
    font-style: normal;
  }
</style>
