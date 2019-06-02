<template lang="pug">
  section#about
    .about_wrapper
      h1.about_title 「みやぎプロコン」って？
      p.about_text 宮城県の小中学生を対象としたプログラミングコンテストです。
        <br/>作品を作り、発表し、仲間と触れ合う。
        <br/>応募だけが目的のコンテストではなく、このイベントを通じてプログラミングやものづくりに触れてもらいたいと願っています。
        <br/>初心者大歓迎！気軽な気持ちで始めてみよう！
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
  margin-bottom 40vmin

.about_wrapper
  width 80%
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  margin 0 auto

.about_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_ORANGE 30%);

.about_text
  font-size 1.3rem
  line-height 2.5rem

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
