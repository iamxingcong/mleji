
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'

export default {
  name: 'MusicDetail',
  data () {
    return {
      img: require('../icons/logo.png'),
      dialogFormVisibleedit: false,
      dialogFormVisiblecomposer: false,
      dialogFormVisibledesc: false,
      daddMultiVersionPop: false,
      delrltdialogVisible: false,
      daddRelateVersionPop: false,
      delalikedialogVisible: false,
      updatelyricsvisible: false,
      formLabelWidth: '150px',
      formedit: {
        name: '',
        file: '',
        format: '',
        arranged_by: '',
        tempo_notes_id: '',
        opening_key: '',
        tempo_open_id: '',
        tempo_end_id: ''
      },
      formcomposer: {
        release_year: [],
        publisher: '',
        agent_publisher: '',
        composer: '',
        lyricist: '',
        arranged_by: '',
        factoid: '',
        place_of_recording: ''
      },
      formdesc: {
        keyword: '',
        desc: '',
        moods: [],
        styles: [],
        main_instruments: []
      },
      formaddversion: {},
      formaddrelate: {},
      formeditr: {},
      addversionsearch: '',
      addrelatesearch: '',
      tableDatae: [{
        date: '2016-05-03',
        namea: '上海',
        nameb: '普陀区',
        namec: '上海市普陀区金沙江路 1518 弄',
        named: 200333,
        namee: 'sfsff',
        namef: 'sfd搜搜放松放松'
      }],
      inputa: '',
      inputb: '',
      inputc: '',
      inputd: '',
      inpute: '',
      inputf: '',
      detail: {},
      tablett: [],
      musiccategory: [],
      style: [],
      mood: [],
      instrument: [],
      speed: [],
      checkedmood: [],
      checkedinstrument: [],
      checkedinstruments: [],
      checkedstyle: [],
      checkedspeed: '',
      catetorys: [],
      cat: [],
      imageUrl: '',
      imageUrls: '',
      isMultiple: true,
      updata: {
        'upload_dir': 'music_path',
        'extension': ''
      },
      updatt: {
        'upload_dir': 'music_path',
        'extension': 'mp3'
      },
      updattlrc: {
        'upload_dir': 'music_lrc',
        'extension': 'lrc'
      },
      updattlrcx: {
        'upload_dir': 'music_lrc',
        'extension': ''
      },
      updatas: {},
      updatass: {},
      imgs: '',
      urls: '',
      urlss: '',
      musiclists: [],
      musiclistschecked: [],
      musiclistscheckeds: [],
      tags: [],
      tagss: [],
      uuidslist: [],
      uuidslists: [],
      tracklist: [],
      uuid: '',
      delname: '',
      relatelist: []
    }
  },
  created () {
    this.musicdetail()
    this.certificates()
    this.tracks()
    this.relates()
    this.catetory()
    this.cat = JSON.parse(localStorage.getItem('catetorys'))
  },
  computed: {
    location: () => window.location
  },
  filters: {
    fstyle (vl) {
      if (!vl) {
        return ''
      }
      let tem = JSON.parse(localStorage.getItem('catetorys'))
      if (!tem) {
        return ''
      }
      let wd = []
      for (var i = 0; i < vl.length; i++) {
        for (var j = 0; j < tem.length; j++) {
          if (vl[i] === tem[j].id) {
            wd.push(tem[j].name)
          }
        }
      }
      return wd.toString()
    }
  },
  methods: {
    yearchosee (v) {
      console.log(this.formcomposer.release_year)
    },
    async musicdetail () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid)
        if (dp.status === 200) {
          this.formdesc.desc = dp.data.desc
          this.formdesc.keyword = dp.data.keyword
          this.detail = dp.data
          this.tablett.push(dp.data)
          this.checkedstyle = dp.data.styles
          this.checkedmood = dp.data.moods
          this.checkedinstruments = dp.data.main_instruments
          this.checkedinstrument = dp.data.accompanied_instruments
          this.formcomposer.publisher = dp.data.publisher
          this.formcomposer.agent_publisher = dp.data.agent_publisher
          this.formcomposer.release_year = dp.data.release_year
          this.formcomposer.composer = dp.data.composer
          this.formcomposer.lyricist = dp.data.lyricist
          this.formcomposer.arranged_by = dp.data.arranged_by
          this.formcomposer.factoid = dp.data.factoid
          this.formcomposer.place_of_recording = dp.data.place_of_recording
          this.formedit.name = dp.data.name
          this.formedit.file = dp.data.file
          this.formedit.format = dp.data.format
          this.formedit.arranged_by = dp.data.arranged_by
          this.formedit.tempo_notes_id = dp.data.tempo_notes_id
          this.formedit.opening_key = dp.data.opening_key
          this.formedit.closing_key = dp.data.closing_key
          this.formedit.tempo_open_id = dp.data.tempo_open_id
          this.formedit.tempo_end_id = dp.data.tempo_end_id
          this.formedit.tempo_notes_id = dp.data.tempo_notes_id
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async catetory () {
      try {
        let dp = await axiosapi.musiccategory()
        if (dp.status === 200) {
          let that = this
          dp.data.results.forEach(function (x) {
            if (x.type === 'MOOD') {
              that.mood = x.children
            }
            if (x.type === 'STYLE') {
              that.style = x.children
            }
            if (x.type === 'SPEED') {
              that.speed = x.children
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
    async certificates () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/certificates/')
        if (dp.status === 200) {
          this.tablett.push(dp.data)
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    dialogFormVisibledescss () {
      this.dialogFormVisibledesc = true
      this.catetory()
    },
    addMultiVersionPop () {
      this.daddMultiVersionPop = true
      this.uuidslist = []
      this.musicsearchlist()
      this.tags = []
    },
    addRelateVersionPop () {
      this.daddRelateVersionPop = true
      this.uuidslists = []
      this.musicsearchlist()
      this.tags = []
    },
    async daddMultiVersionPopcfm () {
      if (!this.tags) {
        return
      }
      for (var i = 0; i < this.tags.length; i++) {
        this.uuidslist.push(this.tags[i].uuid)
      }
      try {
        let dp = await axi().post('/ops/music/' + this.$route.query.uuid + '/track_add/', {'uuids': this.uuidslist})
        if (dp.status === 200) {
          this.daddMultiVersionPop = false
          this.$message({
            message: '添加多版本成功！',
            type: 'success'
          })
          this.tracks()
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async musicsearchlist () {
      try {
        let ls = await axiosapi.musicsearch()
        if (ls.status === 200) {
          this.musiclists = ls.data.results
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    handleCloses (tag) {
      this.tagss.splice(this.tagss.indexOf(tag), 1)
    },
    handlemusiclists (v) {
      this.tags = v
    },
    handlemusiclistss (v) {
      this.tagss = v
    },
    async tracks () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/tracks/')
        if (dp.status === 200) {
          this.tracklist = dp.data.results
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async relates () {
      try {
        let dp = await axi().get('/ops/music/' + this.$route.query.uuid + '/relates/')
        if (dp.status === 200) {
          this.relatelist = dp.data.results
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async editmusicconfirm () {
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formedit)
        if (dt.status === 200) {
          this.musicdetail()
          this.dialogFormVisibleedit = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async composermusicconfirm () {
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formcomposer)
        if (dt.status === 200) {
          this.musicdetail()
          this.dialogFormVisiblecomposer = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    cgstyles (v) {
      console.log(v)
      this.formdesc.styles = v
    },
    cgmoods (v) {
      console.log(v)
      this.formdesc.moods = v
    },
    cginstruments (v) {
      console.log(v)
      this.formdesc.main_instruments = v
    },
    cginstrumentss (v) {
      console.log(v)
      this.formdesc.accompanied_instruments = v
    },
    async descmusicconfirm () {
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formdesc)
        if (dt.status === 200) {
          this.musicdetail()
          this.dialogFormVisibledesc = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    dialogFormVisibleeditclk () {
      this.dialogFormVisibleedit = true
      this.imgupurl()
      this.imgupurls()
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
    async imgupurls () {
      try {
        let dt = await axiosapi.avatarupload(this.updattlrc)
        if (dt.status === 200 || dt.status === 201) {
          this.urlss = dt.data.host
        }
      } catch (e) {
        console.log(e)
      }
    },
    updatelyrics () {
      this.updatelyricsvisible = true
      this.imgupurls()
    },
    async updatelyricscfm () {
      try {
        let dt = await axi().patch('/ops/music/' + this.$route.query.uuid, this.formeditr)
        if (dt.status === 200) {
          this.musicdetail()
          this.updatelyricsvisible = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleAvatarSuccesssl (res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUploadsl (file) {
      console.log(file)
      this.imageUrls = file.name
      const istext = file.type === 'text/plain'
      const islrc = file.name.substring(file.name.length - 4) === '.lrc'
      if (istext || islrc) {
        console.log('ok')
      } else {
        this.$message.error('歌词文件格式不符')
        this.imageUrls = ''
        return
      }
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!isLt2M) {
        this.$message.error('上传歌词文件大小不能超过 1MB!')
      }
      try {
        if (istext) {
          this.updattlrcx.extension = 'text'
        } else {
          this.updattlrcx.extension = 'lrc'
        }

        let dt = await axiosapi.avatarupload(this.updattlrcx)
        if (dt.status === 200 || dt.status === 201) {
          this.updatass.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updatass.policy = dt.data.policy
          this.updatass.Signature = dt.data.Signature
          this.updatass.key = dt.data.key
          this.formeditr.lrc_path = dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return istext && islrc && isLt2M
    },
    handleAvatarSuccess (res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      console.log(file)
      this.imageUrl = file.name
      const ismp3 = file.type === 'audio/mp3'
      const iswav = file.type === 'audio/wav'
      if (ismp3 || iswav) {
        console.log('ok')
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
          this.formedit.path = dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return ismp3 && iswav && isLt2M
    },
    handleAvatarSuccesss (res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUploads (file) {
      console.log(file)
      this.imageUrls = file.name
      const istext = file.type === 'text/plain'
      const islrc = file.name.substring(file.name.length - 4) === '.lrc'
      if (istext || islrc) {
        console.log('ok')
      } else {
        this.$message.error('歌词文件格式不符')
        this.imageUrls = ''
        return
      }
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!isLt2M) {
        this.$message.error('上传歌词文件大小不能超过 1MB!')
      }
      try {
        if (istext) {
          this.updattlrcx.extension = 'text'
        } else {
          this.updattlrcx.extension = 'lrc'
        }

        let dt = await axiosapi.avatarupload(this.updattlrcx)
        if (dt.status === 200 || dt.status === 201) {
          this.updatass.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updatass.policy = dt.data.policy
          this.updatass.Signature = dt.data.Signature
          this.updatass.key = dt.data.key
          this.formedit.lrc_path = dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return istext && islrc && isLt2M
    },
    musicdetailck (x) {
      this.$router.push(
        {
          path: 'MusicDetail',
          query: {'uuid': x}
        }
      )
      window.location.reload()
    },
    async deleteconfirm () {
      try {
        let dt = await axi().post('/ops/music/' + this.$route.query.uuid + '/track_remove/', {'uuids': [this.uuid]})
        if (dt.status === 200) {
          this.tracks()
          this.delrltdialogVisible = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteconfirmrlt () {
      try {
        let dt = await axi().post('/ops/music/' + this.$route.query.uuid + '/relate_remove/', {'uuids': [this.uuid]})
        if (dt.status === 200) {
          this.relates()
          this.delalikedialogVisible = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    musicdelrelate (y) {
      this.uuid = y.uuid
      this.delname = y.name
      this.delrltdialogVisible = true
    },
    musicdellike (y) {
      this.uuid = y.uuid
      this.delname = y.name
      this.delalikedialogVisible = true
    },
    async daddRelateVersionPopcfm () {
      console.log('相似')
      console.log(this.tagss)
      if (!this.tagss) {
        return
      }
      for (var i = 0; i < this.tagss.length; i++) {
        this.uuidslists.push(this.tagss[i].uuid)
      }
      try {
        let dp = await axi().post('/ops/music/' + this.$route.query.uuid + '/relate_add/', {'uuids': this.uuidslists})
        if (dp.status === 200) {
          this.daddRelateVersionPop = false
          this.$message({
            message: '添加相似作品成功！',
            type: 'success'
          })
          this.relates()
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
