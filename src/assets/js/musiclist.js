import axi from '@/config/axi'
import axiosapi from '@/config/axiosapi'
export default {
  name: 'MusicLists',
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
      value: '',
      value1: '',
      count: 0,
      dialogFormVisible: false,
      dialogVisible: false,
      formLabelWidth: '150px',
      form: {},
      tableData: [{
        avatar: '',
        cumulative_pay: 0,
        download_origin_count: 0,
        is_active: true,
        is_vip: false,
        last_login: '2019-10-25T15:06:56.831853',
        name: 'admin',
        uuid: 'd42ec625-43e4-4a0d-af5b-d307f66a2e9f'
      }],
      currentPage3: 2,
      imageUrl: '',
      updata: {
        'upload_dir': 'playlist_cover',
        'extension': ''
      },
      updatas: {},
      updatt: {
        'upload_dir': 'playlist_cover',
        'extension': 'jpeg'
      },
      urls: '',
      uuid: ''
    }
  },
  created () {
    this.play()
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
    addplaylists () {
      this.dialogFormVisible = true
      this.imageUrl = ''
      this.form = {
        name: '',
        desc: ''
      }
    },
    async addplay () {
      try {
        let ls = await axiosapi.addplaylist(this.form)
        if (ls.status === 201) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.play()
        }
      } catch (e) {
        console.log(e)
      }
    },
    async play () {
      try {
        const dt = await axiosapi.playlist()
        this.tableData = dt.data.results
        this.count = dt.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async deleteconfirm () {
      try {
        let dp = await axi().delete('/ops/playlist/' + this.uuid)
        if (dp.status === 200) {
          this.dialogVisible = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.play()
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
    detailedUser (row) {
      console.log(row)
      this.$router.push({
        path: 'MusicListMusicDetail',
        query: {'uuid': row}
      })
    },
    hddelete (row) {
      console.log(row)
      this.uuid = row.uuid
      this.dialogVisible = true
    },
    async schange (r) {
      console.log(r)
      this.uuid = r.uuid
      try {
        let ls = await axi().put('/ops/playlist/' + this.uuid + '/?is_active=' + r.is_active)
        if (ls.status === 200) {
          this.play()
        }

      } catch (e) {
        console.log(e)
      }
    },
    async handleSizeChange (val) {
      console.log(`每页a ${val} 条`)
      try {
        let ls = await axi().get('/ops/playlist?ordering=-created_at&page_size=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
      } catch (e) {
        console.log(e)
      }
    },
    async handleCurrentChange (val) {
      console.log(`当前页a: ${val}`)
      try {
        let ls = await axi().get('/ops/playlist?ordering=-created_at&page=' + val)
        this.tableData = ls.data.results
        this.count = ls.data.count
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
          this.updata.OSSAccessKeyId = dt.data.OSSAccessKeyId
          this.updata.policy = dt.data.policy
          this.updata.Signature = dt.data.Signature
          this.updata.key = dt.data.key
          this.form.cover = this.urls + '/' + dt.data.key

        }
      } catch (e) {
        console.log(e)
      }
      return isJPG && isLt2M
    }
  }
}
