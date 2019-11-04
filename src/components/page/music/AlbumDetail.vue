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
          <el-button size="mini" @click="addmusicspop">添加音乐</el-button>
        </span>
      </el-row>
      <div class="mg15">
        <el-table
          :data="tableDatab"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="uuid"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
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
          <el-select v-model="addmusicuuid" placeholder="请选择">
              <el-option
                v-for="item in cities"
                :key="item.uuid"
                :label="item.name"
                :value="item.uuid">
                <span style="float: left">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.uuid }}</span>
              </el-option>
            </el-select>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisible = false'>取 消</el-button>
          <el-button type='primary' @click='addmusics'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='editmusic'>
      <el-dialog title='编辑音乐'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisibleedit'>
        <el-form :model='formedit'>
          <el-col :span="11">
            <el-form-item label='音乐名称：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.name' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='音乐编号：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.music_no' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='编曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.arranged_by' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.composer' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='词作者：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.lyricist' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='上传音乐文件：' :label-width='formLabelWidth'>
              <el-input type='file' v-model='formedit.path' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-form-item label='音乐描述：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入音乐描述：'
              v-model='formedit.desc'>
            </el-input>
          </el-form-item>

        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisibleedit = false'>取 消</el-button>
          <el-button type='primary' @click='editmusicconfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='dialogues'>
       <el-dialog
        title='确认提示'
        :visible.sync='dialogVisible'
        :close-on-click-modal='false'
        width='30%'>
        <span class='fw700'>
          <i class='el-icon-warning'></i>
            是否删除音乐: {{uuid}}
        </span>
        <span>与该专辑的关联？</span>
        <span slot='footer' class='dialog-footer'>
          <el-button @click='dialogVisible = false'>取 消</el-button>
          <el-button type='primary' @click='deleteconfirm'>确 定</el-button>
        </span>
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
      formedit: {
        name: '',
        music_no: '',
        lyricist: '',
        composer: '',
        arranged_by: '',
        path: '',
        desc: ''
      },
      formLabelWidth: '150px',
      dialogFormVisible: false,
      dialogFormVisibleedit: false,
      dialogVisible: false,
      uuid: '',
      uuids: [],
      musicuuid: '',
      cities: [],
      addmusicuuid: '',
      addmarr: []
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
    addmusicspop () {
      this.dialogFormVisible = true
      this.musicsearchlist()
    },
    async musicsearchlist () {
      console.log(this.form)
      try {
        let ls = await axiosapi.musicsearch()
        console.log(ls)
        if (ls.status === 200) {
          console.log(ls)
          this.cities = ls.data.results
        }
      } catch (e) {
        console.log(e)
      }
    },
    async addmusics () {
      this.addmarr = []
      this.addmarr.push(this.addmusicuuid)
      try {
        // /ops/album/<uuid>/musics_add/
        let ls = await axi().post('/ops/album/' + this.$route.query.uuid + '/musics_add/', {'uuids': this.addmarr})
        console.log(ls)
        if (ls.status === 201 || ls.status === 200) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.addmarr = []
          this.dialogFormVisible = false
          this.musliclist(this.$route.query.uuid)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async editmusicconfirm () {
      console.log(this.formedit)
      try {
        let dt = await axi().patch('/ops/music/' + this.musicuuid, this.formedit)
        if (dt.status === 200) {
          this.musliclist(this.$route.query.uuid)
          this.dialogFormVisibleedit = false
        } else {
          console.log('错误')
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
      this.musicuuid = x
      this.dialogFormVisibleedit = true
      this.musicdetail()
    },
    async musicdetail () {
      try {
        let dt = await axi().get('/ops/music/' + this.musicuuid)
        if (dt.status === 200) {
          this.formedit.name = dt.data.name
          this.formedit.music_no = dt.data.music_no
          this.formedit.lyricist = dt.data.lyricist
          this.formedit.composer = dt.data.composer
          this.formedit.arranged_by = dt.data.arranged_by
          this.formedit.path = dt.data.path
          this.formedit.desc = dt.data.desc
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    deleteMusic (x) {
      this.uuid = x
      this.dialogVisible = true
    },
    async deleteconfirm () {
      let dts = {
        'uuids': this.uuids
      }
      this.uuids.push(this.uuid)
      try {
        let dp = await axi().post('/ops/album/' + this.$route.query.uuid + '/musics_remove/', dts)
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.uuids = []
          this.musliclist(this.$route.query.uuid)
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
