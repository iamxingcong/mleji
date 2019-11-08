
import axiosapi from '@/config/axiosapi'
import axi from '@/config/axi'

const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'AlbumFilter',
  data () {
    return {
      dialogVisible: false,
      dialogFormVisiblea: false,
      dialogFormVisibleedit: false,
      count: 0,
      currentPage1: 1,
      formLabelWidth: '150px',
      form: {
        name: ''
      },
      formb: {
        name: '',
        album_no: '',
        cover: '',
        desc: '',
        label_id: ''
      },
      formedit: {},
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      img: require('../icons/logo.png'),
      tags: [],
      tableData: [],
      labeluids: [],
      uuid: '',
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
    this.labelsearch()
    this.albumlist()
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
    async albumlist () {
      try {
        let ab = await axiosapi.album()
        this.tableData = ab.data.results
        this.count = ab.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async handleSizeChange (val) {
      try {
        let ls = await axi().get('/ops/album?ordering=-created_at&page_size=' + val)
        this.tableData = ls.data.results
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChange (val) {
      try {
        let ls = await axi().get('/ops/album?ordering=-created_at&page=' + val)
        this.tableData = ls.data.results
      } catch (e) {
        console.log(e)
      }
    },
    async labelsearch () {
      try {
        let lw = await axiosapi.labelsearch()
        this.labeluids = lw.data.results
      } catch (e) {
        console.log(e)
      }
    },
    checkAlbum (uuid) {
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
    deleteAlbum (x) {
      this.uuid = x
      this.dialogVisible = true
    },
    async deleteconfirm (uuid) {
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
    handleCheckAllChange (val) {
      // this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
      console.table(val)
      this.checkedCities = val ? this.labeluids : []
      if (val) {
        this.tags = this.labeluids
      } else {
        this.tags = ''
      }
    },
    handleCheckedLabelsChange (value) {
      this.tags = value
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      this.albumlists()
    },
    async albumlists () {
      try {
        let ab = await axi().get('/ops/album/?label_id=' + this.tags.uuid)
        this.tableData = ab.data.results
        this.count = ab.data.count
      } catch (e) {
        console.log(e)
      }
    },
    cltag (vl) {
      console.log(vl.name)
      this.tags.splice(this.tags.indexOf(vl), 1)
    },
    openaddalbum () {
      this.dialogFormVisiblea = true
      this.imageUrl = ''
    },
    async addalbums () {
      try {
        let ls = await axiosapi.addalbum(this.formb)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.albumlist()
          this.dialogFormVisiblea = false
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async beforeAvatarUpload (file) {
      console.log(file)
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
          this.form.cover = this.urls + '/' + dt.data.key
          this.formb.cover = this.urls + '/' + dt.data.key
          this.formedit.cover = this.urls + '/' + dt.data.key
        }
      } catch (e) {
        console.log(e)
      }
      return isJPG && isLt2M && isPNG && isGIF
    }
  }
}
