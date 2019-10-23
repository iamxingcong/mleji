<template>
  <div id='NoticeDetail'>
    <div class="detail">
      <el-row>
        <span class="tit left">通知详情</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="backTo">返回</el-button>
        </span>
      </el-row>
    </div>
    <div class="detail minh400">
      <div class="title">
        放假标题
      </div>
      <div class="subtitle">
          2029-09-09 23:33:32
      </div>
      <div class="content">
          dfsf爱的方式付大付付付付付付付付付付付付付付付阿斯蒂芬
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'NoticeDetail',
  methods: {
    backTo () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .title{
    font-weight: 700;
    text-align: center;
    line-height: 3em;
    padding-top: 15px;
  }
  .subtitle{
    color: #434343;
    font-size: 0.8em;
    opacity: 0.9;
    line-height: 2em;
  }
  .content{
    line-height: 2em;
    text-align: left;
    padding: 15px;
  }
  .detail{
    background-color: #fff;
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
</style>
