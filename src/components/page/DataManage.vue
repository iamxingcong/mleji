<template>
  <div id='DataManage'>

    <el-row>
      <span class="wd400 left">
        <el-input v-model="input" placeholder="请输入搜索关键词"></el-input>
      </span>
      <span class="left mt5">
        <el-button size='mini' type="primary">搜索音乐</el-button>
        <el-button size='mini' type="primary">全部音乐</el-button>
      </span>
      <span class="right mt5">
        <el-button size="mini">刷新</el-button>
      </span>
    </el-row>

    <div id="Statics">
      <div class="single ca">
        <span class="title"> 用户数量  </span>
        <span class="number"> {{ tt.vip_user_count }} </span>
      </div>
      <div class="single cb">
        <span class="title"> vip用户数量  </span>
        <span class="number"> {{ tt.vip_user_count }} </span>
      </div>
      <div class="single cc">
        <span class="title"> 音乐数量  </span>
        <span class="number"> {{ tt.music_count }} </span>
      </div>
      <div class="single ce">
        <span class="title"> 昨日访问人数  </span>
        <span class="number"> {{ tt.yesterday_visit_count }} </span>
      </div>
      <div class="single ce">
        <span class="title"> 总收益  </span>
        <span class="number"> {{ tt.total_income }} </span>
      </div>

      <div class="single cf">
        <span class="title"> 总订单数量  </span>
        <span class="number"> {{ tt.order_count }} </span>
      </div><div class="single ca">
        <span class="title"> 昨日收益  </span>
        <span class="number"> {{ tt.yesterday_income }} </span>
      </div>
      <div class="single cg">
        <span class="title"> 昨日订单数量  </span>
        <span class="number"> {{ tt.yesterday_order_count }} </span>
      </div>

    </div>

    <div class="ranks left mr13">
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
          <MusicListDetail />
        </el-tab-pane>
        <el-tab-pane label="昨天" name="second">
          <MusicListDetail />
        </el-tab-pane>
        <el-tab-pane label="今天" name="third">
          <MusicListDetail />
        </el-tab-pane>

      </el-tabs>
      <div id="btm_btn" class="f10">
        <el-button size="small" round>下载全部播放数据</el-button>
      </div>
    </div>

    <div class="ranks left">
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

    <!-- <div id="pieChart">
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
    </div> -->
  </div>
</template>
<script src='../../assets/js/datamanage.js'></script>
<style scoped src='../../assets/css/datamanage.css'></style>
