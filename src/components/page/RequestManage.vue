<template>
  <div id='RequestManage'>
    <div class="white">
      <div class="bdbtm">
        <el-row>
          <span class="tit left">申请列表</span>
        </el-row>
      </div>
      <div class="mg15">
        <el-table
          :data="tableDatab"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="image"
            label="音乐ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="namea"
            label="用户名称"
          >
          </el-table-column>
          <el-table-column
            prop="nameb"
            label="请求时间"
          >
          </el-table-column>
          <el-table-column
            prop="namec"
            label="公司名称"
          >
          </el-table-column>
          <el-table-column
            prop="named"
            label="手机号码"
          >
          </el-table-column>
          <el-table-column
            prop="namee"
            label="邮箱地址"
          >
          </el-table-column>
          <el-table-column
            prop="namef"
            label="操作"
            width="250"
          >
          <template slot-scope="scope">
               <el-button
                type="text"
                @click="RequestDetail(scope.row)">查看</el-button>
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
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
export default {
  name: 'RequestManage',
  data () {
    return {
      tableDatab: [{
        image: '哈哈发放',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sffdsf3'
      },
      {
        image: '哈哈发放',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sffdsf3'
      }],
      currentPage4: 1
    }
  },
  created () {
    this.applyforproject()
  },
  methods: {
    async applyforproject () {
      try {
        let dt = await axiosapi.applyforproject()
        if (dt.status === 200) {
          console.log(dt.status)
        }
      } catch (e) {
        console.log(e.config)
      }
    },
    RequestDetail (row) {
      console.log(row)
      this.$router.push('RequestDetail')
    },
    edit (row) {
      console.log(row)
      this.$router.push('UserEdit')
    },
    hddelete (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
.paginations{
  padding-bottom: 35px;
}
</style>
