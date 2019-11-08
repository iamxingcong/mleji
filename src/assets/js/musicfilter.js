
import axi from '@/config/axi'
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
      checkAllc: false,
      checkedCities: [],
      checkedCitiesc: [],
      cities: cityOptions,
      isIndeterminate: true,
      tags: [],
      tableData: [],
      imageUrl: '',
      isMultiple: true,
      updata: {
        'upload_dir': 'music_path',
        'extension': ''
      },
      updatt: {
        'upload_dir': 'music_path',
        'extension': 'mp3'
      },
      updatas: {},
      imgs: '',
      urls: '',
      currentPage1: 1,
      count: 0,
      style: [],
      mood: [],
      instrument: [],
      checkedmood: [],
      checkedinstrument: [],
      checkedstyle: [],
      checkedspeed: [],
      searchTotal: [],
      filtervs: [],
      clearAll: false,
      speeds: {},
      speed: '',
      catetorys: []
    }
  },
  created () {
    this.musiclist()
    this.imgupurl()
    this.catetory()
  },
  methods: {
    clicktagsall () {
      this.tags = []
      this.filtervs = []
      this.clearAll = false
    },
    btnstyleall (v) {
      console.log(v)
    },
    btnstyleradio (vx) {
      this.speed = vx.id
      this.filtersearch()
    },
    btnstyle (vl) {
      this.tags = []
      this.tags = vl
      this.checkedmood = []
      this.checkedinstrument = []
      this.checkedstyle = []
      var that = this
      vl.forEach(function (x) {
        if (x.type === 'MOOD' && !that.checkedmood.includes(x.id)) {
          that.checkedmood.push(x.id)
        }
        if (x.type === 'STYLE' && !that.checkedstyle.includes(x.id)) {
          that.checkedstyle.push(x.id)
        }
        if (x.type === 'INSTRUMENT' && !that.checkedinstrument.includes(x.id)) {
          that.checkedinstrument.push(x.id)
        }
      })
      if (this.tags.length >= 1) {
        this.clearAll = true
      } else {
        this.clearAll = false
      }
      this.filtersearch()
    },
    async filtersearch () {
      try {
        let ls = await axi().get('/ops/music?ordering=-created_at&styles=' + this.checkedstyle + '&moods=' + this.checkedmood + '&instruments=' + this.checkedinstrument + '&tempo_notes_id=' + this.speed)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async catetory () {
      try {
        let dp = await axiosapi.musiccategory()
        if (dp.status === 200) {
          for (var i = 0; i < dp.data.results.length; i++) {
            for (var x = 0; x < dp.data.results[i].children.length; x++) {
              this.catetorys.push(dp.data.results[i].children[x])
            }
          }
          // console.log(JSON.stringify(this.catetorys))
          localStorage.setItem('catetorys', JSON.stringify(this.catetorys))
          let that = this
          this.searchTotal = dp.data.results
          dp.data.results.forEach(function (x) {
            if (x.type === 'MOOD') {
              that.mood = x.children
            }
            if (x.type === 'STYLE') {
              that.style = x.children
            }
            if (x.type === 'INSTRUMENT') {
              that.instrument = x.children
            }
          })
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    addmusicpop () {
      this.dialogFormVisible = true
      this.imageUrl = ''
    },
    checkMusic (x) {
      this.$router.push(
        {
          path: 'MusicDetail',
          query: {'uuid': x}
        }
      )
    },
    async imgupurl () {
      try {
        let dt = await axiosapi.avatarupload(this.updatt)
        if (dt.status === 200 || dt.status === 201) {
          this.urls = dt.data.host
        }
      } catch (e) {
        console.log(e)
      }
    },
    async downloadMusic (x) {
      try {
        let dp = await axi().get('/ops/music/' + x + '/path?disposition=attachment')
        if (dp.status === 200) {
          window.open(dp.data.url)
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleAvatarSuccess (res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      console.table(file)
      this.imageUrl = file.name
      const ismp3 = file.type === 'audio/mp3'
      const iswav = file.type === 'audio/wav'
      if (ismp3 || iswav) {
        console.log('')
      } else {
        this.$message.error('音乐文件格式不符')
        this.imageUrl = ''
        return
      }
      const isLt2M = file.size / 1024 / 1024 < 22
      if (!isLt2M) {
        this.$message.error('上传音乐文件大小不能超过 22MB!')
      }
      try {
        this.updata.extension = file.type.replace('audio/', '')
        let dt = await axiosapi.avatarupload(this.updata)
        if (dt.status === 200 || dt.status === 201) {
          this.updatas.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updatas.policy = dt.data.policy
          this.updatas.Signature = dt.data.Signature
          this.updatas.key = dt.data.key
          this.form.path = dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return ismp3 && iswav && isLt2M
    },
    async musiclist () {
      try {
        let ls = await axi().get('/ops/music?ordering=-created_at')
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async addmusics () {
      try {
        let ls = await axiosapi.addmusic(this.form)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.musiclist(this.$route.query.uuid)
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
    cltag (vl) {
      this.tags.splice(this.tags.indexOf(vl), 1)
    },
    async handleSizeChange (val) {
      try {
        let ls = await axi().get('/ops/music?ordering=-created_at&page_size=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChange (val) {
      try {
        let ls = await axi().get('/ops/music?ordering=-created_at&page=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    }
  }
}
