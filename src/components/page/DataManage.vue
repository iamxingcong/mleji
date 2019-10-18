<template>
  <div id='DataManage'>

    <el-row>
      <span class="wd400 left">
        <el-input v-model="input" placeholder="请输入搜索关键词"></el-input>
      </span>
      <span class="left">
        <el-button type="primary">搜索音乐</el-button>
        <el-button type="primary">全部音乐</el-button>
      </span>
      <span class="right mt5">
        <el-button size="mini">刷新</el-button>
      </span>
    </el-row>

    <div id="Statics">
        <div class="single" v-for="( i, index ) in statics" :key="index" :class="i.class">
          <span class="title"> {{ i.name }} </span>
          <span class="number"> {{ i.number }} </span>
        </div>
    </div>

    <div class="ranks left">
      <el-row>
        <span class="titles left">播放排行</span>

          <el-time-picker
          is-range
          size="mini"
          v-model="times"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="总计" name="first">
          <MusicList />
        </el-tab-pane>
        <el-tab-pane label="昨天" name="second">
          <MusicList />
        </el-tab-pane>
        <el-tab-pane label="今天" name="third">
          <MusicList />
        </el-tab-pane>

      </el-tabs>
      <div id="btm_btn" class="f10">
        <el-button size="small" round>下载全部播放数据</el-button>
      </div>
    </div>

    <div class="ranks right">
      <el-row>
        <span class="titles left">下载排行</span>

          <el-time-picker
          is-range
          size="mini"
          v-model="timesd"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-row>
      <el-tabs v-model="activeNames" @tab-click="handleClickd">
        <el-tab-pane label="总计" name="first">
          <DownloadList />
        </el-tab-pane>
        <el-tab-pane label="昨天" name="second">
          <DownloadList />
        </el-tab-pane>
        <el-tab-pane label="今天" name="third">
          <DownloadList />
        </el-tab-pane>

      </el-tabs>
      <div id="btm_btn" class="f10">
        <el-button size="small" round>下载全部下载数据</el-button>
      </div>
    </div>

    <div id="pieChart">
      <el-row>
        <span class="tit left">用户选择最多的5个标签</span>
        <div  class="f10 right rbtn">
          <el-button size="small" round>下载全部标签数据</el-button>
        </div>
      </el-row>
    </div>

    <div id="hotWords">
      <el-row>
        <span class="tit left">用户检索关键词热图</span>
        <div  class="f10 right rbtn">
          <el-button size="small" round>下载全部关键词数据</el-button>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import MusicList from './subcompo/MusicList.vue'
import DownloadList from './subcompo/DownloadList.vue'
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
      activeNames: 'first',
      times: '',
      timesd: ''
    }
  },
  components: {
    MusicList,
    DownloadList
  },
  created () {
    this.statics = stactic
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleClickd (tab, event) {
      console.log(tab, event)
    }
  }
}

</script>
<style scoped src='../../assets/css/datamanage.css'></style>
