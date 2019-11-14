<template>
  <div id='MusicList'>
    <div class='single' v-for="(i,index) in music" :key="index">
      <span class="title"><i> {{    '0' +  ( index + 1  )  }} .</i>{{i.name}}</span>
      <div class="length">
        <span class="long">
          <i  :style="'width:'+(i.play/lt)*100 +'%;'"></i>
        </span>
        <i class="play">{{i.play}}</i>
      </div>
    </div>

  </div>
</template>
<script>
var mus = [
  { 'name': 'going home', 'play': 78 }
]
export default {
  name: 'DownloadList',
  data () {
    return {
      music: [],
      lt: null
    }
  },
  created () {
    this.music = mus
    this.lt = mus[0].play
  }
}
</script>
<style scoped>
#MusicList i{
  font-style: normal;
}
.single .title{
  text-align: left;
  line-height: 30px;
  height: 30px;
  clear: both;
  display: block;
}
#MusicList .single{
  margin: 0px  15px;
  display: block;
  text-align: left;
  height: 60px;
  border-bottom: 1px solid #e2e2e2;
}
.length{
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.title i{
  font-weight: 700;
  margin-right: 10px;
}
.play{
  display: block;
  float: right;
}
.long{
  background: rgb(180, 187, 197);
  width: calc(100% - 50px);
  height: 8px;
  border-radius: 8px;
  display: block;
  float: left;
  margin-top: 11px;
  position: relative;
}
.long i{
  height: 8px;
  display: block;
  float: left;
  position: absolute;
  left: 0px;
  background-color: rgba(88, 163, 247, 1);
  border-radius: 8px;
}
</style>
