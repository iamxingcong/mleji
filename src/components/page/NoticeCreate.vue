<template>
  <div id='NoticeCreate'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">新建消息</span>
        <span class="tips">为必填项</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="backTo">返回</el-button>
        </span>
      </el-row>

      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="消息栏目：">
          <i class="wrn">*</i>
          <el-select v-model="form.region" placeholder="请选择消息栏目">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="消息标题：">
          <i class="wrn">*</i>
          <el-input v-model="form.name" placeholder='请填写消息标题'></el-input>
        </el-form-item>
        <el-form-item label="消息栏目：">
          <i class="wrn">*</i>
          <el-select v-model="form.career" placeholder="请选择接收对象">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="消息内容：">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="消息内容"
            v-model="form.desc">
          </el-input>
        </el-form-item>
        <el-form-item label="提醒：">
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="backTo">返回</el-button>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button>预览</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>
<script>
var cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'NoticeCreate',
  data () {
    return {
      form: {
        name: '',
        region: '',
        city: '',
        career: '',
        delivery: false,
        type: [],
        company: '',
        desc: '',
        status: true
      },
      checkedCities: ['上海', '北京'],
      cities: cityOptions
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    backTo () {
      this.$router.go(-1)
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      console.log(checkedCount)
    }
  }
}
</script>
<style scoped>
.tips{
  margin-top: 20px;
  float: left;
  padding-left: 20px;
  font-size: 0.8em;
  line-height: 20px;
  height: 20px;
  color: #434343;
  opacity: 0.9;
  position: relative;
}
.tips:before{
  content: '*';
  color: red;
  line-height: 20px;
  height: 20px;
  font-size: 25px;
  display: block;
  position: absolute;
  left: 10px;
  top: 5px;
}
.el-form-item{
  position: relative;
}
.el-form-item .wrn{
  position: absolute;
  left: -95px;
  top: 2px;
  color: red;
}
#NoticeCreate .el-form{
  width: calc(100% - 120px);
  margin: 0px auto;
  margin-top: 30px;
}
#NoticeCreate .el-input,
#NoticeCreate .el-select{
  width: 370px;
  float: left;
}
.el-checkbox-group{
  float: left;
}
.el-form-item{
  text-align: left;
}
</style>
