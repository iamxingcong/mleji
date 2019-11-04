<template>
  <div id='MusicDetail'>
    <div class="whitewraps">

      <el-row>
        <span class="tit left">音乐信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">上传歌词</el-button>
          <el-button size="mini">编辑音乐信息</el-button>
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
          <el-button size="mini">编辑创作人信息</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tablett"
            border
            style="width: 100%">
            <el-table-column
              prop="publisher"
              label="原出版商"
            >
            </el-table-column>
            <el-table-column
              prop="agent_publisher"
              label="代理出版商"
            >
            </el-table-column>
            <el-table-column
              prop="release_year"
              label="发行时间"
            >
            </el-table-column>
            <el-table-column
              prop="composer"
              label="原曲作者"
            >
            </el-table-column>
            <el-table-column
              prop="arranged_by"
              label="编曲作者"
            >
            </el-table-column>
            <el-table-column
              prop="lyricist"
              label="原词作者"
            >
            </el-table-column>
            <el-table-column
              prop="arranged_by"
              label="主要表演者"
            >
            </el-table-column>
            <el-table-column
              prop="place_of_recording"
              label="录制地点"
            >
            </el-table-column>

          </el-table>
      </div>

      <el-row>
        <span class="tit left">描述</span>
        <span class="right mt15 mr15">
          <el-button size="mini">编辑描述</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tablett"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="styles"
              label="风格"
            >
            </el-table-column>
            <el-table-column
              prop="moods"
              label="情绪"
            >
            </el-table-column>
            <el-table-column
              prop="main_instruments"
              label="主奏乐器"
            >
            </el-table-column>
            <el-table-column
              prop="accompanied_instruments"
              label="伴奏乐器"
            >
            </el-table-column>
            <el-table-column
              prop="keyword"
              label="关键词"
            >
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
            >
            </el-table-column>
          </el-table>
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

  </div>
</template>
<script>
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'MusicDetail',
  data () {
    return {
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
          this.detail = dp.data
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
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
