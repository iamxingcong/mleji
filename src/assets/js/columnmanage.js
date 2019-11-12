import axiosapi from '@/config/axiosapi'

export default {
  name: 'ColumnManage',
  data () {
    return {
      tableData: [{}],
      currentPage3: 2,
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '150px'
    }
  },
  created () {
    this.getclm()
  },
  methods: {
    async getclm () {
      try {
        let dt = await axiosapi.getcolumn()
        if (dt.status === 200 || dt.status === 201) {
          this.tableData = dt.data.results
        }
      } catch (e) {
        console.log(e)
      }
    },
    addclm () {
      this.dialogFormVisible = true
    },
    async addcolumncfm () {
      try {
        let dt = await axiosapi.addcolumn(this.form)
        if (dt.status === 200 || dt.status === 201) {
          this.getclm()
          this.dialogFormVisible = false
          this.$message({
            message: '添加栏目成功！',
            type: 'success'
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
    },
    async schange (s) {

    },
    edit () {

    },
    hddelete () {

    },
    backTo () {
      this.$router.go(-1)
    }
  }
}
