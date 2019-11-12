import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'MusicListMusicDetail',
  data () {
    return {
      currentPage3: 1,
      daddRelateVersionPop: false,
      dialogFormVisibleedit: false,
      dialogVisible: false,
      formLabelWidth: '150px',
      uuidslists: [],
      formaddrelate: {},
      formedit: {},
      tagss: [],
      addrelatesearch: '',
      musiclists: [],
      musiclistschecked: [],
      musiclistscheckeds: [],
      mldetail: {},
      playmlist: [],
      uuid: '',
      uuids: [],
      mname: '',
      count: 0,
      updatt: {
        'upload_dir': 'playlist_cover',
        'extension': 'gif'
      },
      updata: {
        'upload_dir': 'playlist_cover',
        'extension': ''
      },
      updatas: {},
      urls: '',
      imageUrl: '',
      catetorieslist: [],
      checkedcatories: []
    }
  },
  created () {
    this.playlistdetail()
    this.playlist()
    this.catetories()
  },
  methods: {
    cgcategory (v) {
      console.log(v)
      this.formedit.categories = v
    },
    async playlistdetail () {
      try {
        let dp = await axi().get('/ops/playlist/' + this.$route.query.uuid + '/')
        if (dp.status === 200) {
          this.mldetail = dp.data
          this.imageUrl = dp.data.cover
          this.checkedcatories = dp.data.categories
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async playlist () {
      try {
        let dp = await axi().get('/ops/playlist/' + this.$route.query.uuid + '/musics?ordering=created_at__gte')
        if (dp.status === 200) {
          this.playmlist = dp.data.results
          this.count = dp.data.count
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async handleSizeChangeg (val) {
      console.log(`每页a ${val} 条`)
      try {
        let ls = await axi().get('/ops/playlist/' + this.$route.query.uuid + '/musics?ordering=created_at__gte&page_size=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChangeg (val) {
      console.log(`当前页a: ${val}`)
      try {
        let ls = await axi().get('/ops/playlist/' + this.$route.query.uuid + '/musics?ordering=created_at__gte&page=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    handlemusiclistss (v) {
      this.tagss = v
    },
    handleCloses (tag) {
      this.tagss.splice(this.tags.indexOf(tag), 1)
    },
    addmus () {
      this.daddRelateVersionPop = true
      this.uuidslists = []
      this.musicsearchlist()
      this.tags = []
    },
    async daddRelateVersionPopcfm () {
      if (!this.tagss) {
        return
      }
      for (var i = 0; i < this.tagss.length; i++) {
        this.uuidslists.push(this.tagss[i].uuid)
      }
      try {
        let dp = await axi().post('/ops/playlist/' + this.$route.query.uuid + '/music_add/', {'uuids': this.uuidslists})
        if (dp.status === 200) {
          this.daddRelateVersionPop = false
          this.$message({
            message: '添加音乐成功！',
            type: 'success'
          })
          this.playlist()
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
    deleteMusic (row) {
      this.uuids.push(row.uuid)
      this.mname = row.name
      this.dialogVisible = true
    },
    async deleteconfirm () {
      try {
        let dp = await axi().post('/ops/playlist/' + this.$route.query.uuid + '/music_remove/', {'uuids': this.uuids})
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.playlist()
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
    async eplaylistdetail () {
      try {
        let dp = await axi().get('/ops/playlist/' + this.$route.query.uuid + '/')
        if (dp.status === 200) {
          this.formedit = dp.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    editmus () {
      this.dialogFormVisibleedit = true
      this.imgupurl()
      this.eplaylistdetail()
    },
    async catetories () {
      try {
        let dp = await axiosapi.musiccategory()
        if (dp.status === 200) {
          let that = this
          dp.data.results.forEach(function (x) {
            x.children.forEach(function (y) {
              that.catetorieslist.push(y)
            })
          })
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
      console.log(this.catetorieslist)
    },
    async editmusicconfirm () {
      try {
        let dp = await axi().put('/ops/playlist/' + this.$route.query.uuid, this.formedit)
        if (dp.status === 200) {
          this.dialogFormVisibleedit = false
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          this.playlistdetail()
        } else {
          console.log('错误')
        }
      } catch (e) {
        if (e.response) {
          this.$message.error(e.response.data.detail)
        } else if (e.request) {
          console.log(e.request)
        } else {
          console.log('Error', e.message)
        }
      }
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isGIF = file.type === 'image/gif'
      if (isJPG || isPNG || isGIF) {
        console.log('符合')
      } else {
        this.$message.error('图片格式不符合')
        return
      }

      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      try {
        this.updata.extension = file.type.replace('image/', '')
        let dt = await axiosapi.avatarupload(this.updata)
        if (dt.status === 200 || dt.status === 201) {
          this.updatas.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updatas.policy = dt.data.policy
          this.updatas.Signature = dt.data.Signature
          this.updatas.key = dt.data.key
          this.formedit.cover = this.urls + '/' + dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return isJPG && isLt2M && isPNG && isGIF
    }
  }
}
