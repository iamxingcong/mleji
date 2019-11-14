import MusicListDetail from '../../components/page/subcompo/MusicListDetail.vue'
import DownloadList from '../../components/page/subcompo/DownloadList.vue'
import axiosapi from '@/config/axiosapi'
var stactic = [
  {'name': '用户数量', 'number': 200, 'class': 'ca'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cb'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cc'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cd'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'ce'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cf'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'cg'},
  {'name': 'vip用户数量', 'number': 15, 'class': 'ch'}
]
export default {
  name: 'DataManage',
  data () {
    return {
      input: '',
      statics: [],
      activeName: 'first',
      activeNames: 'first',
      times: '',
      timesd: '',
      tt: {
        music_count: 8,
        order_count: 0,
        total_income: 0,
        user_count: 1,
        vip_user_count: 0,
        yesterday_income: 0,
        yesterday_order_count: 0,
        yesterday_visit_count: 0
      }
    }
  },
  components: {
    MusicListDetail,
    DownloadList
  },
  created () {
    this.statics = stactic
    this.datapanel()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleClickd (tab, event) {
      console.log(tab, event)
    },
    async datapanel () {
      try {
        const pn = await axiosapi.datapanel()
        console.log(pn)
        if (pn.status === 200) {
          this.tt = pn.data
        }

      } catch (e) {
        console.log(e)
      }
    }
  }
}
