<template>
  <div id='DataManage'>

    <el-row>
      <span class="wd400">
        <el-input v-model="input" placeholder="请输入搜索关键词"></el-input>
      </span>
        <el-button type="primary">搜索音乐</el-button>
        <el-button type="primary">全部音乐</el-button>
        <el-button  type="text">刷新</el-button>
    </el-row>

    <div id="Statics">
        <div class="single" v-for="( i, index ) in statics" :key="index" :class="i.class">
          <span class="title"> {{ i.name }} </span>
          <span class="number"> {{ i.number }} </span>
        </div>
    </div>

    <div class="ranks">
      <el-row>
        <span class="titles">播放排行</span>

          <el-date-picker
            v-model="times"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions">
          </el-date-picker>

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="总计" name="first">
            <h1>发发发发的撒啊发</h1>
          </el-tab-pane>
          <el-tab-pane label="昨天" name="second">昨天fsf</el-tab-pane>
          <el-tab-pane label="今天" name="third">今天sff</el-tab-pane>

        </el-tabs>

      </el-row>
    </div>

    <div class="ranks">

    </div>
  </div>
</template>
<script>
var stactic = [
  {'name': '用户数量', 'number': 200, 'class': 'ca'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cb'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cc'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cd'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'ce'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cf'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cg'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'ch'}
]
export default {
  name: 'DataManage',
  data () {
    return {
      input: '',
      statics: [],
      activeName: 'first',
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      times: ''
    }
  },
  created () {
    this.statics = stactic
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>

  .el-row span, .el-row .el-button--primary{
    display: block;
    float: left;
  }
  .wd400{
    width: 400px;
    margin-right: 10px;
  }
  .el-row .el-button--text{
    float: right;
    margin-right: 20px;
    color: #999;
    height: 30px;
    line-height: 30px;
    padding: 0px 20px;
    border: 1px solid   rgba(228, 228, 228, 1);
    margin-top: 4.8px;
  }
   .el-row .el-button--text:hover{
    background-color: rgba(242, 242, 242, 1);
  }
  #DataManage .el-row{
    margin-bottom: 10px;
  }
  #Statics .single{
    width: calc(25% - 15px);
    display: block;
    float: left;
    height: 60px;
    padding: 20px 0px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .single .title, .single .number{
    display: block;
    clear: both;
    color: #fff;
  }
  .single .number{
    font-size: 2em;
    line-height: 40px;
  }
  .ca{
    background-color: rgba(88, 163, 247, 1);
  }
  .cb{
    background-color: rgba(254, 192, 61, 1);
  }
  .cc{
    background-color: rgba(82, 193, 245, 1);
  }
  .cd{
    background-color: rgba(251, 98, 96, 1);
  }
  .ce{
    background-color: rgba(204, 153, 0, 1);
  }
  .cf{
    background-color: rgba(204, 153, 255, 1);
  }
  .cg{
    background-color: rgba(102, 204, 51, 1);
  }
  .ch{
    background-color: rgba(255, 153, 102, 1);
  }
  .ranks{
    width: calc(50% - 17px);
    float: left;
    min-height: 400px;
    margin-right: 15px;
    border: 1px solid #e2e2e2;
    background: #fff;
    border-radius: 2px;
    position: relative;
  }
  .titles{
    height: 70px;
    line-height: 70px;
    color: #666;
    font-weight: 700;
    padding: 0px 15px;
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
  }

  .ranks:after{
    content: "";
    position: absolute;
    left: 0;
    top: 70px;
    width: 100%;
    height: 1px;
    background-color: #E4E7ED;
    z-index: 1;
  }

</style>
