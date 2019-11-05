<template>
  <div id='default'>
    <span>默认页面</span>
    <input type="file" @change="selectImage(this)"/>
  </div>
</template>
<script>
var image = ''
export default {
  name: 'home',
  methods: {
    selectImage (file) {
      debugger
      var fx = file
      if (!fx.files || !fx.files[0]) {
        return
      }
      var reader = new FileReader()
      reader.onload = function (evt) {
        // document.getElementById('image').src = evt.target.result
        image = evt.target.result
        console.log(image)
      }
      reader.readAsDataURL(fx.files[0])
    }
  }
}
</script>
