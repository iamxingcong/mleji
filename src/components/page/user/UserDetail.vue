<template>
  <div id='UserDetail'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">音乐信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">用户详情</el-button>
          <el-button size="mini">编辑资料</el-button>
          <el-button size="mini"  @click="LoginLog">登录日志</el-button>
        </span>
      </el-row>

      <div class="musicinfo mg15">
        <div class="left sq250">
            left
        </div>
        <div class="right wdp252">
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs l50">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
        </div>
      </div>

      <el-row>
        <span class="tit left">统计信息</span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="消费金额"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="剩余下载次数"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="上次登录"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="登录次数"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="订单数量"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="累计下载"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="累计播放"
            >
            </el-table-column>
            <el-table-column
              prop="nameg"
              label="累计创建项目"
            >
            </el-table-column>

          </el-table>
      </div>

      <el-row>
        <span class="tit left">开票信息</span>
      </el-row>
      <div class="musicdistributor">
        <el-row>
            <span>税号</span>
            <span>发票抬头</span>
            <span>开户银行</span>
        </el-row>
        <el-row>
            <el-input v-model="inputa" ></el-input>
            <el-input v-model="inputb" ></el-input>
            <el-input v-model="inputc" ></el-input>
        </el-row>
         <el-row>
            <span>银行账号</span>
            <span>电话号码</span>
            <span>单位地址</span>
        </el-row>
        <el-row>
            <el-input v-model="inputd" ></el-input>
            <el-input v-model="inpute" ></el-input>
            <el-input v-model="inputf" ></el-input>
        </el-row>
      </div>

      <el-row>
        <span class="tit left">项目列表</span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDatab"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="创建时间"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="项目名称"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="项目描述"
              width="400"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="操作"
            >
            </el-table-column>
          </el-table>
      </div>

      <el-row>
        <span class="tit left">订单记录</span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDatae"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="订单编号"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="提交时间"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="订单类型"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="订单金额"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="支付方式"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="描述"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="订单状态"
            >
            </el-table-column>
            <el-table-column
              prop="nameg"
              label="操作"
            >
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

      <el-row>
        <span class="tit left">下载记录</span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDataf"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="下载时间"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="文件格式"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="音乐名称"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="专辑名称"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="厂牌名称"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="对应项目"
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
  name: 'UserDetail',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松',
        nameg: 'sfd搜搜放松放松'
      }],
      tableDatab: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄'
      }],
      tableDatae: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松',
        nameg: 'operates'
      }],
      tableDataf: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff'
      }],
      inputa: '',
      inputb: '',
      inputc: '',
      inputd: '',
      inpute: '',
      inputf: '',
      currentPage3: 2,
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
    },
    handleSizeChange (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页a: ${val}`)
    },
    LoginLog () {
      this.$router.push('LoginLog')
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
