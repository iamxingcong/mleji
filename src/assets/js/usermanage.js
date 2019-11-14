
import axiosapi from '@/config/axiosapi'
import axi from '@/config/axi'
export default {
  name: 'UserManage',
  data () {
    return {
      input1: '',
      options: [{
        value: 'NORMAL',
        label: '普通'
      }, {
        value: 'VIP',
        label: '高级'
      }],
      value: '',
      value1: '',
      dialogVisible: false,
      tableData: [{
        avatar: '',
        cumulative_pay: 0,
        download_origin_count: 0,
        is_active: true,
        is_vip: false,
        last_login: '',
        name: '',
        uuid: ''
      }],
      currentPage3: 1,
      count: 0,
      uuid: '',
      name: ''
    }
  },
  created () {
    this.user()
  },
  methods: {
    async user () {
      try {
        const dt = await axiosapi.user()
        if (dt.status === 200) {
          this.tableData = dt.data.results
          this.count = dt.data.count
        }
      } catch (e) {
        console.log(e)
      }
    },
    detailedUser (row) {
      console.log(row)
      this.$router.push({
        path: 'UserDetail',
        query: {'uuid': row}
      })
    },
    edit (row) {
      console.log(row)
      this.$router.push({
        path: 'UserEdit',
        query: {'uuid': row.uuid}
      })
    },
    addUser () {
      this.$router.push('AddUser')
    },
    hddelete (x) {
      this.uuid = x.uuid
      this.name = x.name
      this.dialogVisible = true
    },
    async deleteconfirm () {
      try {
        let dp = await axi().delete('/ops/user/' + this.uuid)
        if (dp.status === 200) {
          this.user()
          this.dialogVisible = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    schange (r) {
      console.log(r.addressd)
    },
    async handleSizeChangeg (val) {
      try {
        const dt = await axi().get('/ops/user/?page_size=' + val)
        if (dt.status === 200) {
          this.tableData = dt.data.results
          this.count = dt.data.count
        }
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChangeg (val) {
      try {
        const dt = await axi().get('/ops/user/?page=' + val)
        if (dt.status === 200) {
          this.tableData = dt.data.results
          this.count = dt.data.count
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
