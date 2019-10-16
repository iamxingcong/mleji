<template>
  <div id='footer'>
    <span>Copyright © www.cmusiccopyright.com, All Rights Reserved.</span>
    <span>音乐版权管理平台</span>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  #footer{
    position: absolute;
    bottom: 10px;
    text-align: center;
    display: block;
    width: 400px;
    left: 50%;
    margin-left: -200px;
  }
  #footer span{
    display: block;
    clear: both;
    font-size: 12px;
    color: #cccccc;
    font-weight: 400;
    line-height: 2em;

  }
</style>
