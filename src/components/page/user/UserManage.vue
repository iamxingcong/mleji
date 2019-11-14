<template>
  <div id='UserManage'>

     <div class="white">
      <el-row>
        <span class="tit left">专辑名称</span>
      </el-row>
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
              用户类型：
             <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="demo-input-suffix">
              注册时间：
             <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
          </div>
          <div class="demo-input-suffix">
            <el-button size='mini'  icon="el-icon-refresh-left">重置</el-button>
            <el-button type="primary"  size='mini' icon="el-icon-search">查询</el-button>
          </div>
        </div>
      </el-row>
     </div>

     <div class="white mt15">
        <el-row>
          <span class="tit left">用户列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini" @click="addUser"  type="primary"  >新增用户</el-button>
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
            label="用户名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="is_vip"
            label="用户类型">
            <template slot-scope="scope">
              <span> {{ scope.row.vip_type == 'VIP' ?  '高级会员' :   '普通会员' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="download_origin_count"
            label="剩余下载量">
          </el-table-column>
          <el-table-column
            prop="cumulative_pay"
            label="总消费金额">
          </el-table-column>
          <el-table-column
            prop="last_login"
            label="上次登录时间">
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
            是否确定删除用户: {{ name }}
        </span>
        <span class='cross'>用户删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button size='mini' @click='dialogVisible = false'>取 消</el-button>
          <el-button size='mini' type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>
<script src='../../../assets/js/usermanage.js'>
</script>
<style scoped>
  .white{
    padding-bottom: 15px;
  }
  .flex4  .demo-input-suffix{
    flex: 4;
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
