<template>
  <div id='BrandDetail'>
    <div class="crs">
      <div class="brnaLogo"  :style='{ backgroundImage: `url(${img})` }'></div>
      <div class="logotitle">
        厂牌名称
      </div>
      <div class="logointro">
        厂牌介绍，这里可以存放100个字，是不是太多了
      </div>
    </div>
    <div class="crs mt15">
      <el-row>
        <span class="tit left">专辑列表</span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tableDatab"
          border
          style="width: 100%"
        >
          <el-table-column label="专辑图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.image" width="100" :key="scope.row.image" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="namea"
            label="专辑ID"
          >
          </el-table-column>
          <el-table-column
            prop="nameb"
            label="专辑名称"
          >
          </el-table-column>
          <el-table-column
            prop="namec"
            label="专辑编号"
          >
          </el-table-column>
          <el-table-column
            prop="named"
            label="专辑描述"
          >
          </el-table-column>
          <el-table-column
            prop="namee"
            label="操作"
          >
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
export default {
  name: 'BrandDetail',
  data () {
    return {
      img: require('../../../assets/icons/logo.png'),
      tableDatab: [{
        image: 'https://www.baidu.com/img/bd_logo1.png',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松'
      }],
      currentPage4: 1
    }
  },
  methods: {
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
.brnaLogo{
    width: 120px;
    height: 120px;
    background-position: center center;
    background-size: 100% auto;
    border-radius: 4px;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #e2e2e2;
    float: left;
}
.crs{
  overflow: auto;
  background-color: #fff;
}
.logotitle, .logointro{
  width: calc(100% - 185px);
  display: block;
  float: right;
  text-align: left;
  color: #434344;
}
.logotitle{
  line-height: 110px;
  height: 70px;
  font-weight: 700;
  font-size: 18px;
}
.logointro{
  line-height: 30px;
  height: 50px;
}
#BrandDetail .el-table th{
  background-color: #fff !important;
}
.el-table__header-wrapper{
    border-bottom: 1px solid #EBEEF5 !important;
}
</style>
