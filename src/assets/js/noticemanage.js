import axiosapi from '@/config/axiosapi'

export default {
  name: 'NoticeManage',
  data () {
    return {
      input1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      optionsa: [{
        value: '选项1',
        label: '黄金糕fs'
      }, {
        value: '选项2',
        label: '双皮fds奶'
      }, {
        value: '选项3',
        label: '蚵f仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      valuea: '',
      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄',
        addressd: '马大哈',
        addresse: false,
        addressf: 'affa'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        addressa: '上海市普陀区金沙江路 1518 弄',
        addressb: '上海市普陀区金沙江路 1518 弄',
        addressc: '上海市普陀区金沙江路 1518 弄',
        addressd: '马大哈',
        addresse: true,
        addressf: 'affa'
      }],
      currentPage3: 2
    }
  },
  created () {
    this.messagel()
  },
  methods: {
    async messagel () {
      try {
        let dt = await axiosapi.message()
        if (dt.status === 200 || dt.status === 201) {
          this.detail = dt.data.results
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
    checkNotice (x) {
      console.log(x)
      console.log('通知详情')
      this.$router.push('NoticeDetail')
    },
    editNotice (x) {
      console.log('编辑通知')
    },
    deleteNotice (f) {
      console.log(f)
      console.log('删除通知')
    },
    createNotice () {
      console.log('新增信息')
      this.$router.push('NoticeCreate')
    }
  }
}
