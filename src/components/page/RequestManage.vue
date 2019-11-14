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
            prop="uuid"
            label="音乐ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="user_name"
            label="用户名称"
          >
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="请求时间"
          >
          </el-table-column>
          <el-table-column
            prop="company_name"
            label="公司名称"
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号码"
          >
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱地址"
          >
          </el-table-column>
           <el-table-column
            prop="status"
            label="状态"
          >
            <template slot-scope="scope">
              {{ scope.row.status | optfil(scope.row.status) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作"
            width="250"
          >
          <template slot-scope="scope">
               <el-button
                type="text"
                @click="RequestDetail(scope.row)">查看</el-button>
               <el-button
                type="text"
                v-if='scope.row.status === "WAITING"'
                @click="agree(scope.row)">通过</el-button>
               <el-button
                type="text"
                 v-if='scope.row.status === "WAITING"'
                @click="refuse(scope.row)"
               >
                拒绝
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
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="count">
        </el-pagination>
      </div>
    </div>

  </div>
</template>
<script src='../../assets/js/requestmanage.js'>
</script>
<style scoped>
.paginations{
  padding-bottom: 35px;
}
</style>
