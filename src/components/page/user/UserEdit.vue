<template>
  <div id='UserEdit'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">编辑资料</span>
        <span class="tips">为必填项</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="gotouserdetail">用户详情</el-button>
          <el-button size="mini" @click="gotologinlog">登录日志</el-button>
        </span>
      </el-row>

      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="手机号码：">
          <i class="wrn">*</i>
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户类型：">
          <i class="wrn">*</i>
          <el-select v-model="form.vip_type" placeholder="请选择会员等级">
            <el-option label="普通" value="NORMAL"></el-option>
            <el-option label="高级" value="VIP"></el-option>
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
          <el-input v-model="form.city_name"></el-input>
        </el-form-item>
        <el-form-item label="职业：">
          <el-input v-model="form.career"></el-input>
        </el-form-item>
        <el-form-item label="公司名称：">
          <el-input v-model="form.company_name"></el-input>
        </el-form-item>
        <el-form-item label="公司描述：">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="用户密码：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="发票抬头：">
          <el-input v-model="form.invoice"></el-input>
        </el-form-item>
        <el-form-item label="银行账号：">
          <el-input v-model="form.account_no"></el-input>
        </el-form-item>
        <el-form-item label="公司电话：">
          <el-input v-model="form.company_phone"></el-input>
        </el-form-item>
        <el-form-item label="开户银行：">
          <el-input v-model="form.opening_bank"></el-input>
        </el-form-item>
        <el-form-item label="公司地址：">
          <el-input v-model="form.company_address"></el-input>
        </el-form-item>
        <el-form-item label="账号状态：">

          <el-switch
            v-model="form.is_active"
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
import axi from '@/config/axi'
export default {
  name: 'UserEdit',
  data () {
    return {
      form: {
        phone: '',
        email: '',
        vip_type: '',
        avatar: '',
        city_name: '',
        career: '',
        company_name: '',
        desc: '',
        password: '',
        is_active: true,
        invoice: '',
        taxpayer_number: '',
        company_address: '',
        company_phone: '',
        opening_bank: '',
        account_no: ''
      },
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      uuid: this.$route.query.uuid
    }
  },
  created () {
    this.userdetail()
  },
  methods: {
    async userdetail () {
      try {
        let dt = await axi().get('/ops/user/' + this.uuid)
        console.log(dt.data)
        if (dt.status === 200) {
          this.form = dt.data
        } else {
          console.log('错误')
        }
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
    async onSubmit () {
      console.log('submit!')
      try {
        let dt = await axi().put('/ops/user/' + this.uuid, this.form)

        if (dt.status === 200) {
          this.$router.push({
            path: 'UserDetail',
            query: {'uuid': this.uuid}
          })
        } else {
          console.log('错误')
        }
      } catch (e) {
        if (e.response) {
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          console.log(e.request)
        } else {
          console.log('Error', e.message)
        }
        console.log(e)
      }
    },
    gotouserdetail () {
      this.$router.push({
        path: 'UserDetail',
        query: {'uuid': this.uuid}
      })
    },
    gotologinlog () {
      this.$router.push('LoginLog')
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
