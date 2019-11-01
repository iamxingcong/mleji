<template>
  <div id='AlbumDetail'>
     <div class="crs">
      <div class="brnaLogo"  :style='{ backgroundImage: `url(${ alblist.cover ? alblist.cover : img})` }'></div>
      <div class="logotitle">
        {{ alblist.name }}
      </div>
      <div class="logointro">
        {{ alblist.desc }}
      </div>
    </div>
    <div class="crs mt15">
      <el-row>
        <span class="tit left">音乐列表</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="dialogFormVisible = true">添加音乐</el-button>
        </span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tableDatab"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="album_id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="album_name"
            label="音乐名称"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐号"
          >
          </el-table-column>
          <el-table-column
            prop="lyricist"
            label="作者"
          >
          </el-table-column>
          <el-table-column
            prop="desc"
            label="音乐描述"
          >
          </el-table-column>
          <el-table-column
            prop="namee"
            label="操作"
          >
           <template slot-scope="scope">
                <el-button
                  type="text"
                 @click="checkMusic(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="editMusic(scope.row.uuid)">编辑</el-button>
                <el-button
                  type="text"
                  @click="deleteMusic(scope.row.uuid)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="paginations">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 100]"
          :page-size="100"
          layout="prev, pager, next, sizes"
          :total="400">
        </el-pagination>
      </div>
    </div>

    <div id='addlabel'>
      <el-dialog title='添加音乐'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisible'>
        <el-form :model='form'>
          <el-col :span="11">
            <el-form-item label='音乐名称：' :label-width='formLabelWidth'>
              <el-input v-model='form.name' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='音乐编号：' :label-width='formLabelWidth'>
              <el-input v-model='form.music_no' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='编曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.arranged_by' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.composer' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='词作者：' :label-width='formLabelWidth'>
              <el-input v-model='form.lyricist' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='上传音乐文件：' :label-width='formLabelWidth'>
              <el-input type='file' v-model='form.path' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-form-item label='音乐描述：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入音乐描述：'
              v-model='form.desc'>
            </el-input>
          </el-form-item>

        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisible = false'>取 消</el-button>
          <el-button type='primary' @click='addmusics'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'

export default {
  name: 'AlbumDetail',
  data () {
    return {
      img: require('../../../assets/icons/logo.png'),
      tableDatab: [],
      currentPage4: 1,
      alblist: '',
      form: {
        name: '',
        music_no: '',
        lyricist: '',
        composer: '',
        arranged_by: '',
        path: '',
        desc: '',
        album_id: this.$route.query.uuid
      },
      formLabelWidth: '150px',
      dialogFormVisible: false
    }
  },
  created () {
    this.albumlist(this.$route.query.uuid)
    this.musliclist(this.$route.query.uuid)
  },
  methods: {
    async albumlist (x) {
      try {
        let dt = await axi().get('/ops/album/' + x)
        if (dt.status === 200) {
          this.alblist = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async musliclist (x) {
      try {
        let dt = await axi().get('/ops/music/?album_id=' + x)
        if (dt.status === 200) {
          console.log(dt.data)
          this.tableDatab = dt.data.results
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async addmusics () {
      console.log(this.form)
      try {
        let ls = await axiosapi.addmusic(this.form)
        console.log(ls)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.musliclist(this.$route.query.uuid)
          this.form = {
            name: '',
            music_no: '',
            lyricist: '',
            composer: '',
            arranged_by: '',
            path: '',
            desc: '',
            album_id: this.$route.query.uuid
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    checkMusic (x) {
      this.$router.push(
        {
          path: 'MusicDetail',
          query: {'uuid': x}
        }
      )
    },
    editMusic (x) {

    },
    deleteMusic (x) {

    }
  }
}
</script>

<style scoped>
.brnaLogo{
    width: 120px;
    height: 120px;
    background-position: center center;
    background-size: 100% auto;
    border-radius: 4px;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #e2e2e2;
    float: left;
}
.crs{
  overflow: auto;
  background-color: #fff;
}
.logotitle, .logointro{
  width: calc(100% - 185px);
  display: block;
  float: right;
  text-align: left;
  color: #434344;
}
.logotitle{
  line-height: 110px;
  height: 70px;
  font-weight: 700;
  font-size: 18px;
}
.logointro{
  line-height: 30px;
  height: 50px;
}
#BrandDetail .el-table th{
  background-color: #fff !important;
}
.el-table__header-wrapper{
    border-bottom: 1px solid #EBEEF5 !important;
}

</style>
