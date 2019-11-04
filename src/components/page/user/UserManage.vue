<template>
  <div id='UserManage'>

     <div class="white">
      <el-row>
        <span class="tit left">专辑名称</span>
        <span class="right mt15 mr15">
          <el-button size="mini">高级搜索</el-button>
        </span>
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
            <el-button type="primary" icon="el-icon-refresh-left">重置</el-button>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
      </el-row>
     </div>

     <div class="white mt15">
        <el-row>
          <span class="tit left">用户列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini" @click="addUser">新增用户</el-button>
            <el-button size="mini" icon="el-icon-receiving">导出</el-button>
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
              <span> {{ scope.row.is_vip == true ?  '高级会员' :   '普通会员' }}</span>
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
          :page-sizes="[10, 20, 30, 100]"
          :page-size="100"
          layout="prev, pager, next, sizes"
          :total="400">
        </el-pagination>
      </div>

     </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'
import axi from '@/config/axi'
export default {
  name: 'UserManage',
  data () {
    return {
      input1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: '',
      tableData: [{
        avatar: '',
        cumulative_pay: 0,
        download_origin_count: 0,
        is_active: true,
        is_vip: false,
        last_login: '2019-10-25T15:06:56.831853',
        name: 'admin',
        uuid: 'd42ec625-43e4-4a0d-af5b-d307f66a2e9f'
      }],
      currentPage3: 2
    }
  },
  created () {
    this.user()
  },
  methods: {
    async user () {
      const dt = await axiosapi.user()
      console.log(dt)
      this.tableData = dt.data.results
    },
    detailedUser (row) {
      console.log(row)
      this.$router.push({
        path: 'UserDetail',
        query: {'uuid': row}
      })
    },
    edit (row) {
      console.log(row)
      this.$router.push({
        path: 'UserEdit',
        query: {'uuid': row.uuid}
      })
    },
    addUser () {
      this.$router.push('AddUser')
    },
    async hddelete (row) {
      console.log(row)
      try {
        let dp = await axi().delete('/ops/user/' + row.uuid)
        if (dp.status === 200) {
          this.user()
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    schange (r) {
      console.log(r.addressd)
    },
    handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
    }
  }
}
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
