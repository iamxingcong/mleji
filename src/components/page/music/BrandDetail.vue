<template>
  <div id='BrandDetail'>
    <div class="crs">
      <div class="brnaLogo"  :style='{ backgroundImage: `url(${ label.water_url ? label.water_url : img})` }'></div>
      <div class="logotitle">
        {{label.name}}
      </div>
      <div class="logointro">
        {{label.desc}}
      </div>
    </div>
    <div class="crs mt15">
      <el-row>
        <span class="tit left">专辑列表</span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tb"
          border
          style="width: 100%"
        >
          <el-table-column label="专辑图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.cover ? scope.row.cover : img" width="100" :key="scope.row.cover ? scope.row.cover : img" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="专辑ID"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="专辑名称"
          >
          </el-table-column>
          <el-table-column
            prop="album_no"
            label="专辑编号"
          >
          </el-table-column>
          <el-table-column
            prop="desc"
            label="专辑描述"
          >
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作"
          >
            <template slot-scope="scope">
                <el-button
                  type="text"
                 @click="checkAlbum(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="editAlbum(scope.row.uuid)">编辑</el-button>
                <el-button
                  type="text"
                  @click="deleteAlbum(scope.row.uuid)">删除</el-button>
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
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'BrandDetail',
  data () {
    return {
      label: {},
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
      currentPage4: 1,
      tb: []
    }
  },
  created () {
    console.log(this.$route.query.uuid)
    this.labeldetail(this.$route.query.uuid)
    this.albumlist()
  },
  methods: {
    async  albumlist () {
      try {
        let ls = await axiosapi.album()
        this.tb = ls.data.results
        console.log(ls)
      } catch (e) {
        console.log(e)
      }
    },
    async labeldetail (x) {
      try {
        let dt = await axi().get('/ops/label/' + x)
        console.log(dt.data)
        if (dt.status === 200) {
          this.label = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    checkAlbum (uuid) {
      console.log(uuid)
      this.$router.push(
        {
          path: 'AlbumDetail',
          query: {'uuid': uuid}
        }
      )
    },
    editAlbum (uuid) {

    },
    deleteAlbum (uuid) {

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
