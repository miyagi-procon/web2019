<template lang="pug">
  section#about
    .about_wrapper
      h1.about_title 「みやぎプロコン」とは
      p.about_text カクカクしかじか
    .about_image.about_image-one
      img(src="~assets/images/top2.jpg")
      p まっさらな０、可能性の１歩。
    .about_image.about_image-two
      img(src="~assets/images/top3.jpg")
      p ０が１に変わるよろこびを。
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.about_wrapper
  width 100%
  max-width 1080px
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
  position relative
  &>img
    display inline-block
    @media screen and (max-width: 1080px)
      width 70%
    @media screen and (min-width: 1080px)
      width 50%
  &>p
    position absolute
    color BG-color
    font-size 2rem
    // font-weight 600
    padding 1rem
    text-align center
    letter-spacing 0.1rem
    @media screen and (max-width: 1080px)
      bottom 20%
    @media screen and (min-width: 1080px)
      top 0
      width 50%
      height calc(100% - 4px)
      display flex
      align-items center
      justify-content center
  &-one
    &>p
      background-color theme-blue
      @media screen and (max-width: 1080px)
        left 0
      @media screen and (min-width: 1080px)
        right 0
  &-two
    text-align right
    &>p
      background-color theme-orange
      @media screen and (max-width: 1080px)
        right 0
      @media screen and (min-width: 1080px)
        left 0
</style>
