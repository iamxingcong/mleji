<template>
  <div id='UserManage'>

     <div class="white">
      <el-row>
        <span class="tit left">专辑名称</span>
        <span class="right mt15 mr15">
          <el-button size="mini">高级搜索</el-button>
        </span>
      </el-row>
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
              用户类型：
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
              注册时间：
             <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
          </div>
          <div class="demo-input-suffix">
            <el-button type="primary" icon="el-icon-search">查询</el-button>
            <el-button type="primary" icon="el-icon-refresh-left">重置</el-button>
          </div>
        </div>
      </el-row>
     </div>

     <div class="white mt15">
        <el-row>
          <span class="tit left">用户列表</span>
          <span class="right mt15 mr15">
            <el-button size="mini">新增用户</el-button>
            <el-button size="mini" icon="el-icon-receiving">导出</el-button>
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
            label="用户名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="用户类型">
          </el-table-column>
          <el-table-column
            prop="addressa"
            label="用户类型">
          </el-table-column>
          <el-table-column
            prop="addressb"
            label="用户类型">
          </el-table-column>
          <el-table-column
            prop="addressc"
            label="用户类型">
          </el-table-column>
          <el-table-column
            prop="addressd"
            label="用户类型">
            <template slot-scope="scope">
              <el-switch
                  active-color="#5B7BFA"
                  inactive-color="#dadde5"
                  v-model="scope.row.addressd"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="addressd"
            label="用户类型">
          </el-table-column>
        </el-table>
      </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'UserManage',
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
      value: '',
      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄',
        addressd: false,
        addresse: '上海市普陀区金沙江路 1518 弄'
      }]
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
  .demo-input-suffix .el-input{
    width: 200px;
  }
  .white .el-row{
    margin-bottom: 15px;
  }
  .demo-input-suffix button{
    float: right;
    margin-right: 15px;
  }
</style>
