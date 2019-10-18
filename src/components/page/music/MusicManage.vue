<template>
  <div id='MusicManage'>
     <el-row>
      <span class="wd400 left">
        <el-input v-model="input" placeholder="请输入搜索关键词"></el-input>
      </span>
      <span class="left">
        <el-button type="primary">搜索音乐</el-button>
        <el-button type="primary">全部音乐</el-button>
      </span>
      <span class="right mt5">
        <el-button  size="mini">刷新</el-button>
        <el-button  size="mini">返回</el-button>
      </span>
    </el-row>

    <div id="musicBrand">
       <el-row>
        <span class="tit left">厂牌</span>
        <div  class="right mr15 mt13">
          <el-button type="primary"  size="small" icon="el-icon-plus">添加</el-button>
        </div>
      </el-row>

      <div id="brandWrap">
          <div class="sinbrand" v-for="(i,index) in ms" :key = "index">

            <span class="hti">{{i.name}}</span>
            <div class="brandLogo" :style='{ backgroundImage: `url(${i.img})` }'></div>
            <span class="desc">{{i.desc}}</span>
            <div class="crs flex3 c99">
                <span>专辑</span>
                <span>音乐</span>
                <span>艺术家</span>
            </div>
            <div class="crs flex3 fw700">
                <span>{{i.brandsm}}</span>
                <span>{{i.musum}}</span>
                <span>{{i.artist}}</span>
            </div>
            <div class="crs flex3">
              <el-button type="text"  class="f12" v-on:click="brandDetail(i.id)">厂牌详情</el-button>
              <el-button type="text"  class="f12">编辑厂牌</el-button>
              <el-button type="text"  class="f12">删除厂牌</el-button>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>
<script>
var brands = [
  {
    name: 'gone with wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 232
  },
  {
    name: 'gone with windfsfs',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 1323,
    id: 231
  },
  {
    name: 'gone withfdsf wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 233
  },
  {
    name: 'gone witdfsh wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 234
  },
  {
    name: 'gone witsfh wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 235
  },
  {
    name: 'gone with fssfffswind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 23
  },
  {
    name: 'gone witfsfh wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 23
  },
  {
    name: 'gone with wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 23
  },
  {
    name: 'gone with wind',
    img: 'https://cn.vuejs.org/images/logo.png',
    desc: 'best music i ve ever heard',
    brandsm: 52,
    musum: 233,
    artist: 323,
    id: 23
  }
]

export default {
  name: 'MusicManage',
  data () {
    return {
      input: '',
      ms: []
    }
  },
  created () {
    this.ms = brands
  },
  methods: {
    brandDetail: function (x) {
      this.$router.push('BrandDetail')
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicmanage.css'></style>
