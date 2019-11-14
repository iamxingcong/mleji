import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'

export default {
  name: 'RequestManage',
  data () {
    return {
      tableDatab: [],
      currentPage4: 1,
      count: 0
    }
  },
  filters: {
    optfil (v) {
      if (!v) {
        return ''
      }
      if (v === 'WAITING') {
        return '等待审核'
      } else if (v === 'SUCCEED') {
        return '申请通过'
      } else if (v === 'REJECTED') {
        return '拒绝'
      } else {
        return '--'
      }
    }
  },
  created () {
    this.applyforproject()
  },
  methods: {
    async applyforproject () {
      try {
        let dt = await axiosapi.applyforproject()
        if (dt.status === 200) {
          console.log(dt.status)
          this.tableDatab = dt.data.results
          this.count = dt.data.count
        }
      } catch (e) {
        console.log(e.config)
      }
    },
    RequestDetail (row) {
      this.$router.push(
        {
          path: 'RequestDetail',
          query: {'uuid': row.uuid}
        }
      )
    },
    async agree (row) {
      console.log(row)
      try {
        let ls = await axi().put('/ops/apply_for_vip/' + row.uuid + '/agree/')
        if (ls.status === 200) {
          this.applyforproject()
          this.$message({
            message: '通过',
            type: 'success'
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    async refuse (row) {
      try {
        let ls = await axi().put('/ops/apply_for_vip/' + row.uuid +'/reject/')
        if (ls.status === 200) {
          this.applyforproject()
          this.$message({
            message: '拒绝成功',
            type: 'success'
          })
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
    }
  }
}
