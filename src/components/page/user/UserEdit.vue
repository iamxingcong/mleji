<template>
  <div id='UserEdit'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">编辑资料</span>
        <span class="tips">为必填项</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="gotouserdetail">用户详情</el-button>
          <el-button size="mini" @click="backTo">返回</el-button>
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
            class="avatar-uploader"
            :action="urls"
            :data='updatas'
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
        <el-form-item label="税号：">
          <el-input v-model="form.taxpayer_number"></el-input>
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
          <el-button size='mini' type="primary" @click="onSubmit">提交</el-button>
          <el-button size='mini'>重置</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'

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
      uuid: this.$route.query.uuid,
      imageUrl: '',
      isMultiple: true,
      updata: {
        'upload_dir': 'user_avatar',
        'extension': ''
      },
      updatas: {},
      updatt: {
        'upload_dir': 'user_avatar',
        'extension': 'jpeg'
      },
      imgs: '',
      urls: ''
    }
  },
  created () {
    this.userdetail()
    this.imgupurl()
  },
  methods: {
    async imgupurl () {
      try {
        let dt = await axiosapi.avatarupload(this.updatt)
        if (dt.status === 200 || dt.status === 201) {
          this.urls = dt.data.host
        }
      } catch (e) {
        console.log(e)
      }
    },
    async userdetail () {
      try {
        let dt = await axi().get('/ops/user/' + this.uuid)
        if (dt.status === 200) {
          this.form = dt.data
          this.imageUrl = dt.data.avatar
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    backTo () {
      this.$router.go(-1)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isGIF = file.type === 'image/gif'
      if (isJPG || isPNG || isGIF) {
        console.log('符合')
      } else {
        this.$message.error('图片格式不符合')
        return
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      try {
        this.updata.extension = file.type.replace('image/', '')
        let dt = await axiosapi.avatarupload(this.updata)
        if (dt.status === 200 || dt.status === 201) {
          this.updatas.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updatas.policy = dt.data.policy
          this.updatas.Signature = dt.data.Signature
          this.updatas.key = dt.data.key
          this.form.avatar = this.urls + '/' + dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return isJPG && isLt2M && isPNG && isGIF
    },
    async onSubmit () {
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
