
import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'BrandDetail',
  data () {
    return {
      dialogVisible: false,
      dialogFormVisibleedit: false,
      formLabelWidth: '150px',
      label: {},
      img: require('../icons/logo.png'),
      currentPage4: 1,
      count: 0,
      tb: [],
      uuid: '',
      labeluids: [],
      formedit: {},
      imageUrl: '',
      updata: {
        'upload_dir': 'album_cover',
        'extension': ''
      },
      updatas: {},
      updatt: {
        'upload_dir': 'album_cover',
        'extension': 'jpeg'
      },
      urls: ''
    }
  },
  created () {
    this.labeldetail(this.$route.query.uuid)
    this.albumlist()
    this.imgupurl()
    this.labelsearch()
  },
  methods: {
    async labelsearch () {
      try {
        let lw = await axiosapi.labelsearch()
        this.labeluids = lw.data.results
      } catch (e) {
        console.log(e)
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
    async  albumlist () {
      try {
        let ls = await axiosapi.album()
        this.tb = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async labeldetail (x) {
      try {
        let dt = await axi().get('/ops/label/' + x)
        if (dt.status === 200) {
          this.label = dt.data
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    checkAlbum (uuid) {
      console.log(uuid)
      this.$router.push(
        {
          path: 'AlbumDetail',
          query: {'uuid': uuid}
        }
      )
    },
    editAlbum (uuid) {
      this.dialogFormVisibleedit = true
      this.uuid = uuid
      this.albumdetail(this.uuid)
    },
    async editalbumConfirm () {
      try {
        let dt = await axi().put('/ops/album/' + this.uuid, this.formedit)
        if (dt.status === 200) {
          this.formedit = dt.data
          this.albumlist()
          this.dialogFormVisibleedit = false
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    async albumdetail () {
      try {
        let dt = await axi().get('/ops/album/' + this.uuid)
        if (dt.status === 200) {
          this.formedit = dt.data
          this.imageUrl = dt.data.cover
        } else {
          console.log('错误')
        }
      } catch (e) {
        console.log(e)
      }
    },
    deleteAlbum (uuid) {
      this.uuid = uuid
      this.dialogVisible = true
      console.log(this.uuid)
    },
    async deleteconfirm () {
      try {
        let dp = await axi().delete('/ops/album/' + this.uuid)
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.albumlist()
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
    async handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      try {
        let ls = await axi().get('/ops/label?ordering=-created_at&page_size=' + val)
        this.tb = ls.data.results
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      try {
        let ls = await axi().get('/ops/album?ordering=-created_at&page=' + val)
        this.tb = ls.data.results
      } catch (e) {
        console.log(e)
      }
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
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
      return isJPG && isLt2M
    }
  }
}
