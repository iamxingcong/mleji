<template>
  <div id='UserDetail'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">基本信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="edituser">编辑资料</el-button>
          <el-button size="mini" @click="backTo">返回</el-button>
        </span>
      </el-row>

      <div class="musicinfo mg15">
        <div class="left sq250">
             <div id='avantar' :style='{ backgroundImage: `url(${ udata.avatar  ?  udata.avatar : img })` }'></div>
             <span class="iconname"> {{udata.career ? udata.career : ' 缺省 '}} </span>
             <span class="iconname">
              <el-button type="warning" round>
                {{udata.vip_type == 'NORMAL' ? '普通会员' : udata.vip_type}}
              </el-button>
             </span>
        </div>
        <div class="right wdp252">
            <div class="crs">
              <span> ID </span>
              <span> {{udata.account_no}} </span>
              <span> 职业 </span>
              <span> {{udata.career}} </span>
            </div>
            <div class="crs">
              <span> 手机号码 </span>
              <span> {{udata.phone}} </span>
              <span> 描述备注 </span>
              <span> {{udata.desc}} </span>
            </div>
            <div class="crs">
              <span> 姓名 </span>
              <span> {{udata.name}} </span>
              <span> 常用的标签 </span>
              <span> {{udata.use_categories}} </span>
            </div>
            <div class="crs">
              <span> 公司 </span>
              <span> {{udata.company_name}} </span>
              <span> 注册时间 </span>
              <span> {{udata.created_at}} </span>
            </div>
            <div class="crs l50">
              <span> 城市 </span>
              <span> {{udata.city_name}} </span>
              <span> 用户来源 </span>
              <span> {{udata.add_type}} </span>
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
            <el-input v-model="udata.taxpayer_number" ></el-input>
            <el-input v-model="udata.invoice" ></el-input>
            <el-input v-model="udata.opening_bank" ></el-input>
        </el-row>
         <el-row>
            <span>银行账号</span>
            <span>电话号码</span>
            <span>单位地址</span>
        </el-row>
        <el-row>
            <el-input v-model="udata.account_no" ></el-input>
            <el-input v-model="udata.phone" ></el-input>
            <el-input v-model="udata.company_address" ></el-input>
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

      <el-row>
        <span class="tit left">登录日志</span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tableDatag"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="image"
            label="登录时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="namea"
            label="IP地址"
          >
          </el-table-column>
          <el-table-column
            prop="nameb"
            label="地区"
          >
          </el-table-column>
          <el-table-column
            prop="namec"
            label="作者"
          >
          </el-table-column>
          <el-table-column
            prop="named"
            label="在线时长"
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
import axi from '@/config/axi'
export default {
  name: 'UserDetail',
  data () {
    return {
      img: require('../../../assets/icons/logo.png'),
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
      tableDatag: [{
        image: '哈哈发放',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff'
      },
      {
        image: '哈哈发放',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff'
      },
      {
        image: '哈哈发放',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff'
      }],
      currentPage5: 1,
      inputa: '',
      inputb: '',
      inputc: '',
      inputd: '',
      inpute: '',
      inputf: '',
      currentPage3: 2,
      currentPage4: 1,
      uuid: '',
      udata: {}
    }
  },
  created () {
    this.uuid = this.$route.query.uuid
    this.detail()
    this.userproject()
    this.userorder()
  },
  methods: {
    async detail () {
      try {
        let dt = await axi().get('/ops/user/' + this.uuid)
        console.log(dt.data)
        if (dt.status === 200) {
          this.udata = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async userproject () {
      try {
        let dp = await axi().get('/ops/user/' + this.uuid + '/project/')
        console.log(dp.data)
        if (dp.status === 200) {
          // console.log(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async userorder () {
      try {
        let dr = await axi().get('/ops/user/' + this.uuid + '/order/')
        console.log(dr.data)
        if (dr.status === 200) {
          // console.log(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
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
    backTo () {
      this.$router.go(-1)
    },
    edituser () {
      this.$router.push({
        path: 'UserEdit',
        query: {'uuid': this.uuid}
      })
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
