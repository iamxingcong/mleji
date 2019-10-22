<template>
  <div id='MusicDetail'>
    <div class="whitewraps">

      <el-row>
        <span class="tit left">音乐信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">上传歌词</el-button>
          <el-button size="mini">筛选音乐信息</el-button>
        </span>
      </el-row>

      <div class="musicinfo mg15">
        <div class="left sq250">
            left
        </div>
        <div class="right wdp252">
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
            <div class="crs l50">
              <span>a</span>
              <span>a</span>
              <span>a</span>
              <span>a</span>
            </div>
        </div>
      </div>

      <el-row>
        <span class="tit left">创作人信息</span>
        <span class="right mt15 mr15">
          <el-button size="mini">编辑音乐信息</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="原出版商"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="代理出版商"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="发行时间"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="原曲作者"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="编曲作者"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
              label="原词作者"
            >
            </el-table-column>
            <el-table-column
              prop="namef"
              label="主要表演者"
            >
            </el-table-column>
            <el-table-column
              prop="nameg"
              label="录制地点"
            >
            </el-table-column>

          </el-table>
      </div>

      <el-row>
        <span class="tit left">ISRC信息</span>
      </el-row>
      <div class="musicdistributor">
        <el-row>
            <span>原出版商</span>
            <span>原出版商</span>
            <span>原出版商</span>
        </el-row>
        <el-row>
            <el-input v-model="inputa" ></el-input>
            <el-input v-model="inputb" ></el-input>
            <el-input v-model="inputc" ></el-input>
        </el-row>
         <el-row>
            <span>原出版商</span>
            <span>原出版商</span>
            <span>原出版商</span>
        </el-row>
        <el-row>
            <el-input v-model="inputd" ></el-input>
            <el-input v-model="inpute" ></el-input>
            <el-input v-model="inputf" ></el-input>
        </el-row>
      </div>

      <el-row>
        <span class="tit left">描述</span>
        <span class="right mt15 mr15">
          <el-button size="mini">编辑描述</el-button>
        </span>
      </el-row>
      <div class="mg15">
          <el-table
            :data="tableDatab"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="风格"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="情绪"
            >
            </el-table-column>
            <el-table-column
              prop="nameb"
              label="主奏乐器"
            >
            </el-table-column>
            <el-table-column
              prop="namec"
              label="伴奏乐器"
            >
            </el-table-column>
            <el-table-column
              prop="named"
              label="关键词"
            >
            </el-table-column>
            <el-table-column
              prop="namee"
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
            :data="tableDatac"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="授权编号"
            >
            </el-table-column>
            <el-table-column
              prop="namea"
              label="发生时间"
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
      inputf: ''
    }
  }
}
</script>
<style scoped src='../../../assets/css/musicdetail.css'></style>
