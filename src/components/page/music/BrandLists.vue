<template>
  <div id='BrandLists'>

     <el-row>
      <span class='wd400 left'>
        <el-input v-model='input' placeholder='请输入搜索关键词'></el-input>
      </span>
      <span class='left'>
        <el-button type='primary'>搜索音乐</el-button>
        <el-button type='primary'>全部音乐</el-button>
      </span>
      <span class='right mt5'>
        <el-button  size='mini'>刷新</el-button>
        <el-button  size='mini'>返回</el-button>
      </span>
    </el-row>

    <div id='musicBrand'>
       <el-row>
        <span class='tit left'>厂牌</span>
        <div  class='right mr15 mt13'>
          <el-button type='primary'  size='small' icon='el-icon-plus'  @click='openadd'>添加</el-button>
        </div>
      </el-row>

      <div id='brandWrap'>
          <div class='sinbrand' v-for='(i,index) in ms' :key = 'index'>

            <span class='hti'>{{i.name}}</span>
            <div class='brandLogo' :style='{ backgroundImage: `url(${i.logo ? i.logo :  img})` }'></div>
            <span class='desc'>{{i.desc}}</span>
            <div class='crs flex3 c99'>
                <span>专辑</span>
                <span>音乐</span>
                <span>艺术家</span>
            </div>
            <div class='crs flex3 fw700'>
                <span>{{i.album_count}}</span>
                <span>{{i.music_count}}</span>
                <span>{{i.producer_count}}</span>
            </div>
            <div class='crs flex3'>
              <el-button type='text'  class='f12' v-on:click='brandDetail(i.uuid)'>厂牌详情</el-button>
              <el-button type='text'  class='f12'>编辑厂牌</el-button>
              <el-button type='text'  class='f12' v-on:click='deleteBrand(i.uuid)'>删除厂牌</el-button>
            </div>

          </div>
          <div class='paginations'>
            <el-pagination
              background
              @size-change='handleSizeChange'
              @current-change='handleCurrentChange'
              :current-page='currentPage4'
              :page-sizes='[10, 20, 30, 100]'
              :page-size='100'
              layout='prev, pager, next, sizes'
              :total='400'>
            </el-pagination>
          </div>
      </div>
    </div>

    <div id='dialogues'>
       <el-dialog
        title='确认提示'
        :visible.sync='dialogVisible'
        :close-on-click-modal='false'
        width='30%'>
        <span class='fw700'>
          <i class='el-icon-warning'></i>
            是否确定删除厂牌: {{uuid}}
        </span>
        <span>厂牌信息删除后不可恢复</span>
        <span slot='footer' class='dialog-footer'>
          <el-button @click='dialogVisible = false'>取 消</el-button>
          <el-button type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div id='addlabel'>
      <el-dialog title='添加厂牌：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-form-item label='厂牌名称：' :label-width='formLabelWidth'>
            <el-input v-model='form.name' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='请填写厂牌名称：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入厂牌介绍'
              v-model='form.desc'>
            </el-input>
          </el-form-item>
           <el-form-item label='添加LOGO' :label-width='formLabelWidth'>
            <el-input type='file' v-model='form.logo' autocomplete='off'></el-input>
          </el-form-item>
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisible = false'>取 消</el-button>
          <el-button type='primary' @click='addlabels'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'
import axi from '@/config/axi'
export default {
  name: 'BrandLists',
  data () {
    return {
      img: require('../../../assets/icons/logo.png'),
      input: '',
      ms: [],
      dialogVisible: false,
      dialogFormVisible: false,
      currentPage4: 1,
      currentPage3: 2,
      form: {
        name: '',
        desc: '',
        logo: ''
      },
      formLabelWidth: '150px',
      uuid: '',
      alb: []
    }
  },
  created () {
    this.mlist()
  },
  methods: {
    async mlist () {
      try {
        let ls = await axiosapi.getlabel()
        this.ms = ls.data.results
      } catch (e) {
        console.log(e)
      }
    },
    brandDetail: function (x) {
      this.$router.push(
        {
          path: 'BrandDetail',
          query: {'uuid': x}
        }
      )
    },
    openadd () {
      this.dialogFormVisible = true
      this.form = {
        name: '',
        desc: '',
        logo: ''
      }
    },
    async deleteconfirm () {
      try {
        let dp = await axi().delete('/ops/label/' + this.uuid)
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.mlist()
        } else {
          console.log('错误')
        }
      } catch (e) {
        // console.log(e)
        if (e.response) {
          this.dialogVisible = false
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          console.log(e.request)
        } else {
          console.log('Error', e.message)
        }
      }
    },
    deleteBrand (x) {
      this.uuid = x
      this.dialogVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
    },
    checkDetail: function (x) {
      this.$router.push('AlbumDetail')
      console.log(x)
    },
    async addlabels () {
      console.log(this.form)
      try {
        let ls = await axiosapi.addlabel(this.form)
        console.log(ls)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.mlist()
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped src='../../../assets/css/brandlists.css'></style>
