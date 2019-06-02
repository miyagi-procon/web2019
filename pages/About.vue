<template lang="pug">
  section#about
    .about_wrapper
      h1.about_title 「みやぎプロコン」とは
      p.about_text カクカクしかじか
    .about_image.about_image-one(v-bind:class="{ show: !toggleImage }")
      img(src="~assets/images/top2.jpg")
      p まっさらな０、可能性の１歩。
    .about_image.about_image-two(v-bind:class="{ show: toggleImage }")
      img(src="~assets/images/top3.jpg")
      p ０が１に変わるよろこびを。
</template>

<script>
export default {
  methods: {
    isShown: function(togglePos) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(
          'about',
          this.centerOfWindow()
        )
        return topPos + togglePos <= this.$window.scrollY
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 : 0
    }
  },
  computed: {
    toggleImage() {
      return this.isShown(250)
    }
  }
}
</script>

<style lang="stylus" scoped>
#about
  margin-bottom 500vmin

.about_wrapper
  width 100%
  max-width WIDTH_MAX
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.about_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600

.about_text
  font-size 1rem

.about_image
  margin-top 100px
  width 100%
  position absolute
  opacity 0
  -webkit-transition all .5s
  &>img
    display inline-block
    @media screen and (max-width: WIDTH_MAX)
      width 70%
    @media screen and (min-width: WIDTH_MAX)
      width 50%
  &>p
    position absolute
    color BG_COLOR
    font-size 2rem
    // font-weight 600
    padding 1rem
    text-align center
    letter-spacing 0.1rem
    @media screen and (max-width: WIDTH_MAX)
      bottom 20%
    @media screen and (min-width: WIDTH_MAX)
      top 0
      width 50%
      height calc(100% - 4px)
      display flex
      align-items center
      justify-content center
  &-one
    &>p
      background-color THEME_BLUE
      @media screen and (max-width: WIDTH_MAX)
        left 0
      @media screen and (min-width: WIDTH_MAX)
        right 0
  &-two
    text-align right
    &>p
      background-color THEME_ORANGE
      @media screen and (max-width: WIDTH_MAX)
        right 0
      @media screen and (min-width: WIDTH_MAX)
        left 0

.show
  -webkit-transform translate(0px, 0)
  opacity 1
</style>
