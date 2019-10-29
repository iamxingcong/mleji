<template>
  <div id='PermissionManage'>
    <div class="whitewraps">
      <div class="pb15">
        <el-row>
          <span class="tit left">会员权限管理</span>
          <span class="right mt15 mr15">
            <el-button size="mini" type="primary" @click="addMember">添加</el-button>
          </span>
        </el-row>
      </div>

      <div class="mg15">

        <div class="singles">
          <span class="titlea">未注册用户</span>
          <table>
              <tr>
                <td>权限</td>
                <td>是否允许</td>
                <td>次数限制</td>
              </tr>
              <tr>
                <td>在线试听</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下载水印文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下载原始文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下单</td>
                <td></td>
                <td></td>
              </tr>
          </table>
          <el-button type="text" @click="edit(23)">权限编辑</el-button>
        </div>

        <div class="singles">
          <span class="titlea">注册用户</span>
          <table>
              <tr>
                <td>权限</td>
                <td>是否允许</td>
                <td>次数限制</td>
              </tr>
              <tr>
                <td>在线试听</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下载水印文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下载原始文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下单</td>
                <td></td>
                <td></td>
              </tr>
          </table>
          <el-button type="text" @click="checkMemberUser(34)">查看详情</el-button>
          <el-button type="text" @click="edit(23)">权限编辑</el-button>
        </div>

        <div class="singles">
          <span class="titlea">会员用户</span>
          <table>
              <tr>
                <td>权限</td>
                <td>是否允许</td>
                <td>次数限制</td>
              </tr>
              <tr>
                <td>在线试听</td>
                <td></td>
                <td></td>
              <tr>
                <td>下载水印文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下载原始文件</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>下单</td>
                <td></td>
                <td></td>
              </tr>
          </table>
          <el-button type="text" @click="checkMemberUser(34)">查看详情</el-button>
          <el-button type="text" @click="edit(23)">权限编辑</el-button>
        </div>

      </div>

      <div class="pb15">
        <el-row>
          <span class="tit left">曲库授权管理</span>
          <span class="right mt15 mr15">
            <el-button size="mini" type="primary" @click="pricesetting">添加定价方式</el-button>
          </span>
        </el-row>
      </div>

      <div class="mg15">

        <div class="single">
          <span class="titles">定价方式一</span>
          <span class="description">
              普通的定价方式，里边都是自己厂牌的作品，适用于影视类客户
          </span>
          <table>
              <tr>
                <td>授权范围</td>
                <td>价格</td>
                <td>描述</td>
              </tr>
              <tr>
                <td>网络视频（非广告类）</td>
                <td>100</td>
                <td>
                  包括公众号文章，vlog，网剧，网电影，网络综艺
                </td>
              </tr>
              <tr>
                <td>网络视频（广告类）</td>
                <td>100</td>
                <td>包括H5广告，视频内嵌广告，电影trailer</td>
              </tr>
              <tr>
                <td>全媒体广告</td>
                <td>100</td>
                <td>包含所有网络广告，楼宇广告，电梯广告，TVC广告</td>
              </tr>
              <tr>
                <td>APP背景音乐</td>
                <td>100</td>
                <td>包含APP游戏音乐，UGC音乐素材，APP内置内容</td>
              </tr>
              <tr>
                <td>硬件内置音乐</td>
                <td>100</td>
                <td>包含智能硬件、穿戴设备内置音乐</td>
              </tr>
              <tr>
                <td>院线电影</td>
                <td>100</td>
                <td>包含院线电影内使用的音乐</td>
              </tr>
              <tr>
                <td>店铺公播音乐</td>
                <td>100</td>
                <td>针对少于10家的连锁店铺内使用，大于10家请联系我们</td>
              </tr>
              <tr>
                <td>其他授权</td>
                <td>。。。。</td>
                <td>如有其他授权需求，<a href='#'>请联系我们</a></td>
              </tr>

          </table>
          <el-button type="text">查看详情</el-button>
          <el-button type="text">权限编辑</el-button>
          <el-button type="text">删除权限</el-button>
        </div>

        <div class="single">
          <span class="titles">定价方式二</span>
          <span class="description">
              贵一点的定价方式，里边都是优点高大上的，挺贵的东西
          </span>
           <table>
              <tr>
                <td>授权范围</td>
                <td>价格</td>
                <td>描述</td>
              </tr>
              <tr>
                <td>网络视频（非广告类）</td>
                <td>100</td>
                <td>
                  包括公众号文章，vlog，网剧，网电影，网络综艺
                </td>
              </tr>
              <tr>
                <td>网络视频（广告类）</td>
                <td>100</td>
                <td>包括H5广告，视频内嵌广告，电影trailer</td>
              </tr>
              <tr>
                <td>全媒体广告</td>
                <td>100</td>
                <td>包含所有网络广告，楼宇广告，电梯广告，TVC广告</td>
              </tr>
              <tr>
                <td>APP背景音乐</td>
                <td>100</td>
                <td>包含APP游戏音乐，UGC音乐素材，APP内置内容</td>
              </tr>
              <tr>
                <td>硬件内置音乐</td>
                <td>100</td>
                <td>包含智能硬件、穿戴设备内置音乐</td>
              </tr>
              <tr>
                <td>院线电影</td>
                <td>100</td>
                <td>包含院线电影内使用的音乐</td>
              </tr>
              <tr>
                <td>店铺公播音乐</td>
                <td>100</td>
                <td>针对少于10家的连锁店铺内使用，大于10家请联系我们</td>
              </tr>
              <tr>
                <td>其他授权</td>
                <td>。。。。</td>
                <td>如有其他授权需求，<a href='#'>请联系我们</a></td>
              </tr>

          </table>
          <el-button type="text">查看详情</el-button>
          <el-button type="text">权限编辑</el-button>
          <el-button type="text">删除权限</el-button>
        </div>
      </div>
    </div>

    <addMemberUser :show.sync = "show"> </addMemberUser>
    <checkMemberUser :cshow.sync = "cshow"></checkMemberUser>
    <editMemberUser :dshow.sync = "dshow"></editMemberUser>
    <priceSetting :eshow.sync = "eshow"></priceSetting>

</div>
</template>
<script>
import addMemberUser from './subcompo/addMemberUser.vue'
import checkMemberUser from './subcompo/checkMemberUser.vue'
import editMemberUser from './subcompo/editMemberUser.vue'

import priceSetting from './subcompo/priceSetting.vue'

export default {
  name: 'PermissionManage',
  data () {
    return {
      show: false,
      cshow: false,
      dshow: false,
      eshow: false
    }
  },
  components: {
    addMemberUser,
    checkMemberUser,
    editMemberUser,
    priceSetting
  },
  methods: {
    addMember () {
      this.show = true
      console.log(this.show + ', show parent')
    },
    checkMemberUser (v) {
      console.log(v)
      this.cshow = true
    },
    edit (v) {
      console.log(v)
      this.dshow = true
    },
    pricesetting () {
      this.eshow = true
    }
  }
}

</script>
<style scoped src='../../assets/css/permissionmanage.css'></style>
