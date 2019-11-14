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
              prop="cumulative_pay"
              label="消费金额"
            >
            </el-table-column>
            <el-table-column
              prop="download_origin_count"
              label="剩余下载次数"
            >
            </el-table-column>
            <el-table-column
              prop="last_login"
              label="上次登录"
            >
            </el-table-column>
            <el-table-column
              prop="login_count"
              label="登录次数"
            >
            </el-table-column>
            <el-table-column
              prop="order_count"
              label="订单数量"
            >
            </el-table-column>
            <el-table-column
              prop="download_count"
              label="累计下载"
            >
            </el-table-column>
            <el-table-column
              prop="play_count"
              label="累计播放"
            >
            </el-table-column>
            <el-table-column
              prop="project_count"
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
            <el-input v-model="udata.taxpayer_number" :disabled="true"></el-input>
            <el-input v-model="udata.invoice" :disabled="true"></el-input>
            <el-input v-model="udata.opening_bank" :disabled="true"></el-input>
        </el-row>
         <el-row>
            <span>银行账号</span>
            <span>电话号码</span>
            <span>单位地址</span>
        </el-row>
        <el-row>
            <el-input v-model="udata.account_no" :disabled="true"></el-input>
            <el-input v-model="udata.phone" :disabled="true"></el-input>
            <el-input v-model="udata.company_address" :disabled="true"></el-input>
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
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="4">
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
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="4">
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
          :page-sizes="[10, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="4">
        </el-pagination>
      </div>

    </div>
  </div>
</template>
<script src='../../../assets/js/userdetail.js'></script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
