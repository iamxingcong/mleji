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

    <div class="whitewraps">
      <el-row>
        <span class="tit left">筛选结果</span>
      </el-row>
    </div>
  </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'MusicFilter',
  data () {
    return {
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
      ]
    }
  },
  methods: {
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

}
.filterwrap{
  margin-top: 15px;
}
.cktit{
  line-height: 38px;
  color: #443344;
  padding-left: 15px;
  font-size: 16px;
}
.filterwrap .el-row{
  margin-bottom: 15px;
}
.whitewraps  .el-tag{
  margin-bottom: 3px;
  margin-left: 15px;
  float: left;
}
.whitewraps .el-button--text{
  display: block;
  float: left;
  color: #e2e2e2;
  margin-left: 15px;
  margin-top: -3.5px;
}
</style>
