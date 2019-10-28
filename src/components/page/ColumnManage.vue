<template>
  <div id='ColumnManage'>
     <div class="white">
      <div class="bdbtm">
        <el-row>
          <span class="tit left">数据列表</span>
          <span class="right mt15 mr15">
            <el-button type="primary" size="mini">添加栏目</el-button>
            <el-button size="mini">返回</el-button>
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
            prop="avatar"
            label="栏目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="修改时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="is_vip"
            label="公告数量（条）">
            <template slot-scope="scope">
              <span> {{ scope.row.is_vip == true ?  '高级会员' :   '普通会员' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="ia"
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
            width="250"
            prop="addresse"
            label="操作">
            <template slot-scope="scope">
               <el-button
                type="text"
                @click="detailedUser(scope.row)">查看</el-button>
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
export default {
  name: 'ColumnManage',
  data () {
    return {
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
  methods: {
    handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
    }
  }
}
</script>
