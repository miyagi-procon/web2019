<template lang="pug">
  section#top
    .top_right
    .top_left
    img#logo(src="~/assets/images/logo.png")
    //- p(class="top_text") ようこそ!<br/>thinkShake製作所はwebエンジニア高橋翔太の個人企業です。
</template>

<script>
export default {
  computed: {
    isActive() {
      if (process.browser) {
        return this.$window.scrollY === 0
      } else {
        return false
      }
    },
    marginTop() {
      if (process.browser) {
        let base = 168
        if (this.$window.height < 500) base = 201
        return this.$window.height / 2 - base
      } else {
        return 0
      }
    }
  },
  mounted: function() {
    document.getElementById('logo').classList.add('img_opening')
  }
}
</script>

<style lang="stylus" scoped>
#top
  width 30vmin
  height 30vmin

#logo
  width 60vmin
  height 60vmin
  position absolute
  top calc(50% - 30vmin)
  left calc(50% - 30vmin)
  margin-top 0

.top_right
  position absolute
  background-color rgb(231, 119, 34)
  width 30vmin
  height 30vmin
  top 0
  right 0

.top_left
  position absolute
  background-color rgb(116, 181, 228)
  width 30vmin
  height 30vmin
  bottom 0
  left 0
</style>
