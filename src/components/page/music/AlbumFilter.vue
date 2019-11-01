<template>
  <div id='AlbumFilter'>
    <div class="whitewraps">
      <el-row>
        <span class="tit left">筛选条件</span>
      </el-row>
      <div class="filterwrap">
        <el-row>
            <span class="cktit left">厂牌：</span>
            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox-button>

            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">

              <el-checkbox-button v-for="city in cities" :label="city" :key="city" >{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
          <div class="inline">
            <span class="cktit left">关键词：</span>
          </div>
          <div class="inline">
            <el-input v-model="form.name" placeholder="请输入内容" size="mini"></el-input>
          </div>
          <div class="inline">
            <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          </div>
        </el-row>

        <el-row>
          <span class="cktit left">
            已选条件：
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
          <span class="right  mr15">
            <el-button type="primary" size="mini"   @click='openaddalbum'>添加专辑</el-button>
          </span>
        </el-row>

      </div>
    </div>

    <div class="whitewraps mt15">
      <el-row>
        <span class="tit left">专辑列表</span>
      </el-row>
      <div class="pd15">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column label="专辑图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.cover ? scope.row.cover : img " width="100" :key="scope.row.image" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="label_id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="专辑名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="album_no"
            label="专辑编号">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="专辑描述">
          </el-table-column>
          <el-table-column
            prop="uuid"
            label="操作">
              <template slot-scope="scope">
                <el-button
                  type="text"
                 @click="checkAlbum(scope.row.uuid)">查看</el-button>
                <el-button
                  type="text"
                  @click="editAlbum(scope.row.uuid)">编辑</el-button>
                <el-button
                  type="text"
                  @click="deleteAlbum(scope.row.uuid)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div id='openaddalbum'>
      <el-dialog title='添加专辑：'
      :close-on-click-modal='false'
      :visible.sync='dialogFormVisiblea'>
        <el-form :model='formb'>
          <el-form-item label='专辑名：' :label-width='formLabelWidth'>
            <el-input v-model='formb.name' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='专辑号：' :label-width='formLabelWidth'>
            <el-input v-model='formb.album_no' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='请填写专辑描述：' :label-width='formLabelWidth'>
            <el-input
              type='textarea'
              :autosize='{ minRows: 3, maxRows: 4}'
              placeholder='请输入专辑描述'
              v-model='formb.desc'>
            </el-input>
          </el-form-item>

          <el-form-item label='专辑封面：' :label-width='formLabelWidth'>
            <el-input v-model='formb.cover' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label='厂牌ID：' autocomplete='on' :label-width='formLabelWidth'>
            <el-select v-model="formb.label_id" placeholder="请选择">
              <el-option
                v-for="item in labeluids"
                :key="item.name"
                :label="item.name"
                :value="item.uuid">
                <span style="float: left">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.uuid }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot='footer' class='dialog-footer'>
          <el-button @click='dialogFormVisiblea = false'>取 消</el-button>
          <el-button type='primary' @click='addalbums'>确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'

const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'AlbumFilter',
  data () {
    return {
      dialogFormVisiblea: false,
      formLabelWidth: '150px',
      form: {
        name: ''
      },
      formb: {
        name: '',
        album_no: '',
        cover: '',
        desc: '',
        label_id: ''
      },
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      img: require('../../../assets/icons/logo.png'),
      tags: [
        {name: '标签一'},
        {name: '标签二'},
        {name: '标签三'},
        {name: '标签四'},
        {name: '标签五'}
      ],
      tableData: [],
      labeluids: [],
      uuid: ''
    }
  },
  created () {
    this.labelsearch()
    this.albumlist()
  },
  methods: {
    async albumlist () {
      try {
        let ab = await axiosapi.album()
        this.tableData = ab.data.results
      } catch (e) {
        console.log(e)
      }
    },
    async labelsearch () {
      try {
        let lw = await axiosapi.labelsearch()
        this.labeluids = lw.data.results
      } catch (e) {
        console.log(e)
      }
    },
    checkAlbum (uuid) {
      console.log(uuid)
      this.$router.push(
        {
          path: 'AlbumDetail',
          query: {'uuid': uuid}
        }
      )
    },
    editAlbum (uuid) {

    },
    deleteAlbum (uuid) {

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
    cltag (vl) {
      console.log(vl.name)
      this.tags.splice(this.tags.indexOf(vl), 1)
    },
    openaddalbum () {
      this.dialogFormVisiblea = true
    },
    async addalbums () {
      try {
        let ls = await axiosapi.addalbum(this.formb)
        console.log(ls)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogFormVisiblea = false
        }
      } catch (e) {
        console.log(e)
      }
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
  width: 80px;
  text-align: right;
}
.filterwrap .el-row{
  margin-bottom: 5px;
}
.whitewraps  .el-tag{
  margin-bottom: 3px;
  margin-left: 15px;
  float: left;
}
.whitewraps  .el-row .el-button--text{
  display: block;
  float: left;
  color: #e2e2e2;
  margin-left: 15px;
  margin-top: -3.5px;
}
.el-table::before {

    height: 0px !important;
}
.el-row .el-form{
  width: 300px;
}
.el-row .inline{
  display: block;
  float: left;
  margin: 10px auto;
}
.el-row .inline:nth-child(2),
.el-row .inline:nth-child(3) {
  margin-left: 15px;

}
.el-tag{
  height: 25px;
  line-height: 25px;
}

</style>
