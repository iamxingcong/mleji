
import axi from '@/config/axi'
export default {
  name: 'UserDetail',
  data () {
    return {
      img: require('../../assets/icons/logo.png'),
      tableData: [],
      tableDatab: [],
      tableDatae: [],
      tableDataf: [],
      tableDatag: [],
      currentPage5: 1,
      inputa: '',
      inputb: '',
      inputc: '',
      inputd: '',
      inpute: '',
      inputf: '',
      currentPage3: 2,
      currentPage4: 1,
      uuid: '',
      udata: {}
    }
  },
  created () {
    this.uuid = this.$route.query.uuid
    this.detail()
    this.userproject()
    this.userorder()
    this.ustatics()
  },
  methods: {
    async ustatics () {
      try {
        let dt = await axi().get('/ops/user/' + this.uuid + '/statistics')
        if (dt.status === 200) {
          this.tableData.push(dt.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async detail () {
      try {
        let dt = await axi().get('/ops/user/' + this.uuid)
        if (dt.status === 200) {
          this.udata = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async userproject () {
      try {
        let dp = await axi().get('/ops/user/' + this.uuid + '/project/')
        if (dp.status === 200) {
          // console.log(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async userorder () {
      try {
        let dr = await axi().get('/ops/user/' + this.uuid + '/order/')
        if (dr.status === 200) {
          // console.log(dp.data)
        } else {
          console.log('错误')
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
    handleSizeChange (val) {
      console.log(`每页a ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页a: ${val}`)
    },
    backTo () {
      this.$router.go(-1)
    },
    edituser () {
      this.$router.push({
        path: 'UserEdit',
        query: {'uuid': this.uuid}
      })
    }
  }
}
