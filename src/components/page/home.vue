<template>
  <div id='default'>
    <span>默认页面</span>
    <template>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.uuid"
          :label="item.name"
          :value="item.uuid">
          <span style="float: left">{{ item.name }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.uuid }}</span>
        </el-option>
      </el-select>
    </template>

  </div>
</template>
<script>
import axiosapi from '@/config/axiosapi'
export default {
  name: 'home',
  data () {
    return {
      cities: [],
      value: ''
    }
  },
  mounted () {
    this.mlist()
  },
  methods: {
    async mlist () {
      try {
        let ls = await axiosapi.musicsearch()
        console.log(ls.data.results)
        if (ls.status === 200) {
          console.log(ls)
          this.cities = ls.data.results
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
