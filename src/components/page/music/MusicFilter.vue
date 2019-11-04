<template>
  <div id='MusicFilter'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">筛选条件</span>
      </el-row>
      <div class="filterwrap">
        <el-row>
            <span class="cktit left">风格</span>
            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox-button>

            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">

              <el-checkbox-button v-for="city in cities" :label="city" :key="city" >{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>

        <el-row>
            <span class="cktit left">情绪</span>
            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAlla" @change="handleCheckAllChangea">全选</el-checkbox-button>

            <el-checkbox-group v-model="checkedCitiesa" @change="handleCheckedCitiesChangea">

              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>

        <el-row>
            <span class="cktit left">配器</span>
            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAllb" @change="handleCheckAllChangeb">全选</el-checkbox-button>

            <el-checkbox-group v-model="checkedCitiesb" @change="handleCheckedCitiesChangeb">

              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>

        <el-row>
            <span class="cktit left">速度</span>
            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAllc" @change="handleCheckAllChangec">全选</el-checkbox-button>

            <el-checkbox-group v-model="checkedCitiesc" @change="handleCheckedCitiesChangec">

              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>

        <el-row>
          <span class="cktit left">
            已选条件:
          </span>
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            @close="cltag(tag)"
            closable
          >
            {{tag.name}}
          </el-tag>
          <el-button type="text">清除全部</el-button>
        </el-row>

      </div>
    </div>

    <div class="whitewraps mt15">
      <el-row>
        <span class="tit left">筛选结果</span>
        <span class="right mt15 mr15">
          <el-button size="mini">导出</el-button>
          <el-button size="mini" @click="dialogFormVisible = true">添加音乐</el-button>
        </span>
      </el-row>
      <div class="pd15">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="composer"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="album_name"
            label="专辑名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="length"
            label="时长"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="desc"
            width="180">
          </el-table-column>
          <el-table-column
            prop="track_count"
            label="版本数">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作">
            <template slot-scope="scope">
                <el-button
                  type="text"
                @click="checkMusic(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="DownloadMusic(scope.row.uuid)">下载</el-button>
            </template>
          </el-table-column>
        </el-table>
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
import axiosapi from '@/config/axiosapi'
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'MusicFilter',
  data () {
    return {
      dialogFormVisible: false,
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
      checkAll: false,
      checkAlla: false,
      checkAllb: false,
      checkAllc: false,
      checkedCities: [],
      checkedCitiesa: [],
      checkedCitiesb: [],
      checkedCitiesc: [],
      cities: cityOptions,
      isIndeterminate: true,
      tags: [
        {name: '标签一'},
        {name: '标签二'},
        {name: '标签三'},
        {name: '标签四'},
        {name: '标签五'}
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created () {
    this.musiclist()
  },
  methods: {
    checkMusic (x) {
      this.$router.push(
        {
          path: 'MusicDetail',
          query: {'uuid': x}
        }
      )
    },
    DownloadMusic () {

    },
    async musiclist () {
      try {
        let ls = await axiosapi.musiclistmusic()
        console.log(ls)
        this.tableData = ls.data.results
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
            desc: ''
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      console.log(value)
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChangea (val) {
      this.checkedCitiesa = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChangea (value) {
      let checkedCount = value.length
      this.checkAlla = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChangeb (val) {
      this.checkedCitiesb = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChangeb (value) {
      let checkedCount = value.length
      this.checkAllb = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChangec (val) {
      this.checkedCitiesc = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChangec (value) {
      let checkedCount = value.length
      this.checkAllc = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    cltag (vl) {
      console.log(vl.name)
      this.tags.splice(this.tags.indexOf(vl), 1)
    }
  }
}
</script>
<style scoped>
.el-checkbox-button, .el-checkbox-button__inner{
    position: relative;
    display: block;
    float: left;
    margin-left: 15px;
    opacity: 0.9;
}
.filterwrap{
  margin-top: 15px;
}
.cktit{
  line-height: 25px;
  color: #443344;
  padding-left: 15px;
  font-size: 16px;
}
.filterwrap .el-row{
  margin-bottom: 5px;
}
.whitewraps  .el-tag{
  margin-bottom: 3px;
  margin-left: 15px;
  float: left;
}
.whitewraps .el-row  .el-button--text{
  display: block;
  float: left;
  color: #e2e2e2;
  margin-left: 15px;
  margin-top: -3.5px;
}
.el-table::before {

    height: 0px !important;
}
</style>
