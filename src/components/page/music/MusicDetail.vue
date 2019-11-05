<template>
  <div id='MusicDetail'>
    <div class="whitewraps">

      <el-row>
        <span class="tit left">音乐信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">上传歌词</el-button>
          <el-button size="mini" @click="dialogFormVisibleedit = true">编辑音乐信息</el-button>
        </span>
      </el-row>

      <div class="musicinfo mg15">
        <div class="left sq250">
            <span> {{ detail.album_name }}</span>
        </div>
        <div class="right wdp252">
            <div class="crs">
              <span> 专辑ID </span>
              <span> {{ detail.album_id }}</span>
              <span> Open Key </span>
              <span> {{ detail.opening_key }}</span>
            </div>
            <div class="crs">
              <span> 音乐编号 </span>
              <span> {{ detail.uuid }}</span>
              <span> End Key </span>
              <span> {{ detail.closing_key }}</span>
            </div>
            <div class="crs">
              <span> 文件格式 </span>
              <span> {{ detail.format }}</span>
              <span> Tempo Open </span>
              <span> {{ detail.tempo_open_id }} </span>
            </div>
            <div class="crs">
              <span> 节拍 </span>
              <span> {{ detail.metre }}</span>
              <span> Tempo End </span>
              <span> {{ detail.tempo_end_id }} </span>
            </div>
            <div class="crs l50">
              <span> 时长 </span>
              <span> {{ detail.length + "'" }}</span>
              <span> 速度 </span>
              <span> {{detail.tempo_notes_id }} </span>
            </div>
        </div>
      </div>

      <el-row>
        <span class="tit left">创作人信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini" @click="dialogFormVisiblecomposer = true">编辑创作人信息</el-button>
        </span>
      </el-row>
      <div class="mg15">
        <div class="cross headers flex8">
          <span> 原出版商 </span>
          <span> 代理出版商 </span>
          <span> 发行时间 </span>
          <span> 原曲作者 </span>

          <span> 编曲作者 </span>
          <span> 原词作者 </span>
          <span> 主要表演者 </span>
          <span> 录制地点</span>
        </div>
        <div class="cross contents flex8">
          <span> {{ detail.publisher }} </span>
          <span> {{ detail.agent_publisher }}</span>
          <span> {{ detail.release_year}} </span>
          <span> {{ detail.composer }} </span>

          <span> {{ detail.arranged_by }} </span>
          <span>  {{ detail.lyricist }} </span>
          <span> {{ detail.arranged_by }} </span>
          <span>  {{ detail.place_of_recording }}</span>
        </div>
      </div>

      <el-row>
        <span class="tit left">描述</span>
        <span class="right mt15 mr15">
          <el-button size="mini">编辑描述</el-button>
        </span>
      </el-row>
      <div class="mg15">
        <div class="cross headers flex8">
          <span> 风格 </span>
          <span> 情绪 </span>
          <span> 主奏乐器 </span>
          <span> 伴奏乐器 </span>

          <span> 关键词 </span>
          <span> 描述 </span>

        </div>
        <div class="cross contents flex8">
          <span> {{ detail.styles }} </span>
          <span> {{ detail.moods }}</span>
          <span> {{ detail.main_instruments}} </span>
          <span> {{ detail.accompanied_instruments }} </span>

          <span> {{ detail.keyword }} </span>
          <span>  {{ detail.desc }} </span>

        </div>
      </div>

      <el-row>
        <span class="tit left">授权信息</span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tablett"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="factoid"
              label="授权编号"
            >
            </el-table-column>
            <el-table-column
              prop="release_year"
              label="发行时间"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="授权地域"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="授权时长"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="使用方式"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="被授权方"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="操作"
            >
            </el-table-column>
          </el-table>
      </div>

      <el-row>
        <span class="tit left">多版本作品信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">添加多版本</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDatad"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="作品名称"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="创建时间"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="作品ID"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="作品号"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="时长"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="描述"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="操作"
            >
            </el-table-column>
          </el-table>
      </div>

      <el-row>
        <span class="tit left">相似作品信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">添加相似作品</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDatae"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="作品名称"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="作者名称"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="作品ID"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="作品号"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="时长"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="描述"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="操作"
            >
            </el-table-column>
          </el-table>
      </div>

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
            <el-form-item label='上传音乐文件：' :label-width='formLabelWidth'>
              <el-input type='file' v-model='formedit.path' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='文件格式：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.format' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='歌词：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.arranged_by' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='速度：' :label-width='formLabelWidth'>
              <el-input v-model='formedit.tempo_notes_id' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='Open Key:' :label-width='formLabelWidth'>
              <el-input v-model='formedit.opening_key' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='End Key:' :label-width='formLabelWidth'>
              <el-input v-model='formedit.closing_key' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='Tempo Open:' :label-width='formLabelWidth'>
              <el-input v-model='formedit.tempo_open_id' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='Tempo End:' :label-width='formLabelWidth'>
              <el-input v-model='formedit.tempo_end_id' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>

        </el-form>

        <div slot='footer' class='dialog-footer'>
            <el-button @click='dialogFormVisibleedit = false'>取 消</el-button>
            <el-button type='primary' @click='editmusicconfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div id='composeredit'>
      <el-dialog title='编辑创作人信息'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisiblecomposer'>
        <el-form :model='formcomposer'>
          <el-col :span="11">
            <el-form-item label='原出版商：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.publisher' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='代理出版商：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.agent_publisher' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='发行时间：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.release_year' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='原曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.composer' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='原词作者：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.lyricist' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='编曲作者：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.arranged_by' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='主要表演者：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.main_instruments' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label='录制地点：' :label-width='formLabelWidth'>
              <el-input v-model='formcomposer.place_of_recording' autocomplete='off'></el-input>
            </el-form-item>
          </el-col>

        </el-form>

        <div slot='footer' class='dialog-footer'>
            <el-button @click='dialogFormVisiblecomposer = false'>取 消</el-button>
            <el-button type='primary' @click='composermusicconfirm'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'MusicDetail',
  data () {
    return {
      dialogFormVisibleedit: false,
      dialogFormVisiblecomposer: false,
      formLabelWidth: '150px',
      formedit: {
        name: '',
        music_no: '',
        lyricist: '',
        composer: '',
        arranged_by: '',
        path: '',
        desc: ''
      },
      formcomposer: {

      },
      tableData: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松',
        nameg: 'sfd搜搜放松放松'
      }],
      tableDatab: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff'
      }],
      tableDatac: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松'
      }],
      tableDatad: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松'
      }],
      tableDatae: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松'
      }],
      inputa: '',
      inputb: '',
      inputc: '',
      inputd: '',
      inpute: '',
      inputf: '',
      detail: {},
      tablett: []
    }
  },
  created () {
    this.musicdetail()
    this.catetory()
    this.certificates()
    this.tracks()
    this.relates()
  },
  methods: {
    async musicdetail () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid)
        if (dp.status === 200) {
          // console.log(dp)
          this.detail = dp.data
          this.tablett.push(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async catetory () {
      try {
        let dp = await axiosapi.musiccategory()
        if (dp.status === 200) {
          // console.log(dp)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async certificates () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/certificates/')
        if (dp.status === 200) {
          // console.log(dp)
          this.tablett.push(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async tracks () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/tracks/')
        if (dp.status === 200) {
          console.log(dp)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async relates () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/relates/')
        if (dp.status === 200) {
          console.log(dp)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async editmusicconfirm () {
      console.log(this.formedit)
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formedit)
        if (dt.status === 200) {
          this.musicdetail()
          this.dialogFormVisibleedit = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async composermusicconfirm () {
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formcomposer)
        if (dt.status === 200) {
          this.musicdetail()
          this.dialogFormVisiblecomposer = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
