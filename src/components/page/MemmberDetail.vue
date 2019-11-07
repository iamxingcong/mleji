<template>
  <div id='MemmberDetail'>
    <div class="white">
      <div class="brnaLogo"  :style='{ backgroundImage: `url(${img})` }'></div>
      <div class="logotitle">
        会员详情（普通会员）
      </div>
    </div>

    <div class="white mt15 pt15">
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
            label="项目名称"
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
                @click="RequestDetail(scope.row)">用户详情</el-button>
               <el-button
                type="text"
                @click="hddelete(scope.row)"
               >
                删除
               </el-button>
            </template>
          </el-table-column>
        </el-table>

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

        <div class="membernews">
          <span class="title">会员动态</span>
          <div class="single crs">
            <i class="logop"  :style='{ backgroundImage: `url(${img})` }'></i>
            <span class="tts">
              xxx同学，创建了ffff,
              <a href="#">点击查看项目详情</a>
            </span>
            <span class="time">
                2019-10-09 12:30:24
            </span>
          </div>

          <div class="single crs">
            <i class="logop"  :style='{ backgroundImage: `url(${img})` }'></i>
            <span class="tts">
              xxx同学，创建了ffff,
              <a href="#">点击查看项目详情</a>
            </span>
            <span class="time">
                2019-10-09 12:30:24
            </span>
          </div>
          <el-button size="small" round>查看更多</el-button>
        </div>
    </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'

export default {
  name: 'MemmberDetail',
  data () {
    return {
      img: require('../../assets/icons/logo.png'),
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
    this.uprofile()
  },
  methods: {
    async uprofile () {
      try {
        let dx = await axiosapi.userprofile()
        console.log(dx)
      } catch (e) {
        console.log(e)
      }
    },
    RequestDetail (row) {
      console.log(row)
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
.white{
  padding: 0px 15px;
  overflow: auto;
}
.brnaLogo{
    width: 86px;
    height: 86px;
    background-position: center center;
    background-size: 100% auto;
    border-radius: 86px;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #e2e2e2;
    float: left;
}
.logotitle{
    line-height: 110px;
    height: 70px;
    font-weight: 700;
    font-size: 18px;
    width: calc(100% - 135px);
    display: block;
    float: right;
    text-align: left;
}
.paginations{
  padding-top: 15px;
}
.membernews .title{
  font-weight: 700;
  clear: both;
  text-align: left;
  line-height: 2em;
  display: block;
}
.single  .logop{
  width: 40px;
  height: 40px;
  display: block;
  float: left;
  border-radius: 40px;
  background-position: center center;
}
.single{
  overflow: auto;
}
.membernews{
  padding-bottom: 45px;
}
.single .tts,
.single .time{
  width: calc(100% - 70px);
  text-align: left;
  display: block;
  float: right;
  line-height: 20px;
}
.single .time{
  color: #434343;
  opacity: 0.8;
}
a{
  text-decoration: none;
  color: #0079FE;
  cursor: pointer;
}
.single {
  margin-bottom: 10px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-top: 1px solid #e2e2e2;
}
</style>
