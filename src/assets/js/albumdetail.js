import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'

export default {
  name: 'AlbumDetail',
  data () {
    return {
      img: require('../icons/logo.png'),
      tableDatab: [],
      currentPage4: 1,
      count: 0,
      alblist: '',
      formedit: {
        name: '',
        music_no: '',
        lyricist: '',
        composer: '',
        arranged_by: '',
        path: '',
        desc: ''
      },
      formLabelWidth: '150px',
      dialogFormVisible: false,
      dialogFormVisibleedit: false,
      dialogVisible: false,
      uuid: '',
      uuids: [],
      musicuuid: '',
      cities: [],
      addmusicuuid: '',
      addmarr: [],
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
      urls: ''
    }
  },
  created () {
    this.albumlist(this.$route.query.uuid)
    this.musliclist(this.$route.query.uuid)
    this.imgupurl()
  },
  methods: {
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
    async albumlist (x) {
      try {
        let dt = await axi().get('/ops/album/' + x)
        if (dt.status === 200) {
          this.alblist = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async musliclist (x) {
      try {
        let dt = await axi().get('/ops/music/?album_id=' + x)
        if (dt.status === 200) {
          this.tableDatab = dt.data.results
          this.count = dt.data.count
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    addmusicspop () {
      this.dialogFormVisible = true
      this.musicsearchlist()
    },
    async musicsearchlist () {
      try {
        let ls = await axiosapi.musicsearch()
        if (ls.status === 200) {
          console.log(ls)
          this.cities = ls.data.results
        }
      } catch (e) {
        console.log(e)
      }
    },
    async addmusics () {
      this.addmarr = []
      this.addmarr.push(this.addmusicuuid)
      try {
        // /ops/album/<uuid>/musics_add/
        let ls = await axi().post('/ops/album/' + this.$route.query.uuid + '/musics_add/', {'uuids': this.addmarr})
        console.log(ls)
        if (ls.status === 201 || ls.status === 200) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.addmarr = []
          this.dialogFormVisible = false
          this.musliclist(this.$route.query.uuid)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async editmusicconfirm () {
      console.log(this.formedit)
      try {
        let dt = await axi().patch('/ops/music/' + this.musicuuid, this.formedit)
        if (dt.status === 200) {
          this.musliclist(this.$route.query.uuid)
          this.dialogFormVisibleedit = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleAvatarSuccess (res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
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
          this.formedit.path = this.urls + '/' + dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return ismp3 && iswav && isLt2M
    },
    async handleSizeChange (val) {
      try {
        let dt = await axi().get('/ops/music/?album_id=' + this.$route.query.uuid + '&page_size=' + val)
        if (dt.status === 200) {
          this.tableDatab = dt.data.results
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChange (val) {
      try {
        let dt = await axi().get('/ops/music/?album_id=' + this.$route.query.uuid + '&page=' + val)
        if (dt.status === 200) {
          this.tableDatab = dt.data.results
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    checkMusic (x) {
      this.$router.push(
        {
          path: 'MusicDetail',
          query: {'uuid': x}
        }
      )
    },
    editMusic (x) {
      this.musicuuid = x
      this.dialogFormVisibleedit = true
      this.musicdetail()
    },
    async musicdetail () {
      try {
        let dt = await axi().get('/ops/music/' + this.musicuuid)
        if (dt.status === 200) {
          this.formedit.name = dt.data.name
          this.formedit.music_no = dt.data.music_no
          this.formedit.lyricist = dt.data.lyricist
          this.formedit.composer = dt.data.composer
          this.formedit.arranged_by = dt.data.arranged_by
          this.formedit.path = dt.data.path
          this.formedit.desc = dt.data.desc
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    deleteMusic (x) {
      this.uuid = x
      this.dialogVisible = true
    },
    async deleteconfirm () {
      let dts = {
        'uuids': this.uuids
      }
      this.uuids.push(this.uuid)
      try {
        let dp = await axi().post('/ops/album/' + this.$route.query.uuid + '/musics_remove/', dts)
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.uuids = []
          this.musliclist(this.$route.query.uuid)
        } else {
          console.log('错误')
        }
      } catch (e) {
        // console.log(e)
        if (e.response) {
          this.dialogVisible = false
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          console.log(e.request)
        } else {
          console.log('Error', e.message)
        }
      }
    }
  }
}
