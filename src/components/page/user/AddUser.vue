
<template>
  <div id='UserEdit'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">新增用户</span>
        <span class="tips">为必填项</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="backTo">返回</el-button>
        </span>
      </el-row>

      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="手机号码：">
          <i class="wrn">*</i>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户类型：">
          <i class="wrn">*</i>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传头像：">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="所在城市：">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="职业：">
          <el-input v-model="form.career"></el-input>
        </el-form-item>
        <el-form-item label="公司名称：">
          <el-input v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="公司描述：">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="用户密码：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发票抬头：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="银行账号：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司电话：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="开户银行：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司地址：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="账号状态：">

          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'

export default {
  name: 'AddUser',
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
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  created () {
    this.Telcode()
  },
  methods: {
    async Telcode () {
      try {
        let dt = await axiosapi.opsTel_code()
        console.log(dt)
      } catch (e) {
        console.log(e)
      }
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    onSubmit () {
      console.log('submit!')
    },
    backTo () {
      this.$router.go(-1)
    }
  }
}
</script>
<style  scoped>
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
#UserEdit .el-form{
  width: 500px;
  margin: 0px auto;
  margin-top: 30px;
}
#UserEdit .el-input,
#UserEdit .el-select{
  width: 370px;
}
</style>
