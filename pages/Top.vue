<template lang="pug">
  section#top
    .title
      .top_right
      .top_left
      img#logo(src="~assets/images/logo.png")
    .top_image.top_image-one
      img(src="~assets/images/top2.jpg")
      p まっさらな０、可能性の１歩。
    .top_image.top_image-two
      img(src="~assets/images/top3.jpg")
      p ０が１に変わるよろこびを。
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
  width 100%

.title
  background-image url('~assets/images/top1.jpg')
  background-size cover
  width 100%
  max-height calc(1080px * 2/ 3)
  height calc(100vw * 2 / 3)
  position relative
  display flex
  align-items center
  justify-content center

#logo
  width 40vw
  height 40vw
  max-width calc(1080px * 0.4)
  max-height calc(1080px * 0.4)
  margin-top 0

.top_right
  position absolute
  background-color theme-orange
  width 20vw
  height 20vw
  max-width calc(1080px * 0.2)
  max-height calc(1080px * 0.2)
  bottom 0
  right 0

.top_left
  position absolute
  background-color theme-blue
  width 20vw
  height 20vw
  max-width calc(1080px * 0.2)
  max-height calc(1080px * 0.2)
  top 0
  left 0

.top_image
  margin-top 100px
  width 100%
  position relative
  &>img
    display inline-block
    @media screen and (max-width: 900px)
      width 70%
    @media screen and (min-width: 900px)
      width 50%
  &>p
    position absolute
    color BG-color
    font-size 2rem
    // font-weight 600
    padding 1rem
    text-align center
    bottom 20%
    letter-spacing 0.1rem
  &-one
    &>p
      background-color theme-blue
      left 0
  &-two
    text-align right
    &>p
      background-color theme-orange
      right 0
</style>
