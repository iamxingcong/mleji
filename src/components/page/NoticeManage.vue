<template>
  <div id='NoticeManage'>
    <div class="white">
      <div class="bdbtm">
        <el-row>
          <span class="tit left">数据筛选</span>
        </el-row>
      </div>

      <el-row>
        <div class="flex4">
          <div class="demo-input-suffix">
              查询内容：
            <el-input
              placeholder="用户ID/账号"
              v-model="input1">
            </el-input>
          </div>
          <div class="demo-input-suffix">
              消息状态：
             <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="demo-input-suffix">
              消息分类：
             <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
          </div>
          <div class="demo-input-suffix">
            <el-button icon="el-icon-refresh-left">重置</el-button>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
      </el-row>
    </div>

    <div class="white mt15">
      <el-row>
          <span class="tit left">数据列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini" @click="createNotice">新增消息</el-button>
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
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="标题"
            width="250">
          </el-table-column>
          <el-table-column
            prop="address"
            label="修改时间">
          </el-table-column>
          <el-table-column
            prop="addressa"
            label="发布人员">
          </el-table-column>
          <el-table-column
            prop="addressb"
            label="消息分类">
          </el-table-column>
          <el-table-column
            prop="addressc"
            label="消息状态">
          </el-table-column>
          <el-table-column
            width="250"
            prop="addressf"
            label="操作">
            <template slot-scope="scope">
               <el-button
                type="text"
                @click="checkNotice(scope.row)">查看</el-button>
                 <el-button
                type="text"
                @click="editNotice(scope.row)">编辑</el-button>
               <el-button
                type="text"
                @click="deleteNotice(scope.row)">删除</el-button>

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
  name: 'NoticeManage',
  data () {
    return {
      input1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      optionsa: [{
        value: '选项1',
        label: '黄金糕fs'
      }, {
        value: '选项2',
        label: '双皮fds奶'
      }, {
        value: '选项3',
        label: '蚵f仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      valuea: '',
      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄',
        addressd: '马大哈',
        addresse: false,
        addressf: 'affa'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄',
        addressd: '马大哈',
        addresse: true,
        addressf: 'affa'
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
    },
    checkNotice (x) {
      console.log(x)
      console.log('通知详情')
      this.$router.push('NoticeDetail')
    },
    editNotice (x) {
      console.log('编辑通知')
    },
    deleteNotice (f) {
      console.log(f)
      console.log('删除通知')
    },
    createNotice () {
      console.log('新增信息')
      this.$router.push('NoticeCreate')
    }
  }
}
</script>

<style scoped>
  .white{
    padding-bottom: 15px;
  }
  .flex4  .demo-input-suffix{
    flex: 4;
    text-align: left;
    margin-left: 20px;
  }
  .demo-input-suffix .el-input,
  .demo-input-suffix .el-select{
    width: 200px;
  }
  .white .el-row{
    margin-bottom: 15px;
  }
  .demo-input-suffix button{
    float: right;
    margin-right: 15px;
  }
  .cell{
    display: flex;
  }
  .cell button{
    flex: 3;
  }
  i{
    font-style: normal;
  }
</style>
