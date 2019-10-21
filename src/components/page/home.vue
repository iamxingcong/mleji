<template>
  <div id='default'>
    <span>默认页面</span>
  </div>
</template>
<script>
import { userlist } from '../../config/urls'
export default {
  name: 'home',
  created () {
    this.user()
  },
  methods: {
    async user () {
      try {
        const response = await userlist()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
