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
<script src='../../../assets/js/musiclistdetail.js'></script>
<style scoped src='../../../assets/css/musiclist.css'></style>
