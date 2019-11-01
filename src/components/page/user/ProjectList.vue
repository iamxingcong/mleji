<template>
  <div id='ProjectList'>
     <div class="white">
      <el-row>
        <span class="tit left">项目名称</span>
      </el-row>
      <el-row>
        <span class="desc">对方是否放松放松放松法第三方第三方第三方大杀四方</span>
      </el-row>
    </div>

    <div class="white mt15">
      <el-row>
        <span class="tit left">音乐列表</span>
        <span class="right mt15 mr15">
          <el-button size="mini" icon="el-icon-receiving">导出项目</el-button>
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
            prop="date"
            label="音乐ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="专辑">
          </el-table-column>
          <el-table-column
            prop="addressa"
            label="厂牌名称">
          </el-table-column>
          <el-table-column
            prop="addressb"
            label="总消费金额">
          </el-table-column>
          <el-table-column
            prop="addressc"
            width="250"
            label="描述">
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
  name: 'ProjectList',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄'
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
</style>
