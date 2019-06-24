<template lang="pug">
  section#top
    .top_container
      top-image1
      top-image2
      top-image3
      top-image4
      router-link.top_stories(to="/stories") コンセプトストーリーへ
    .menubar_wrapper
      menu-bar
    .top_divider
      img.divider_logo(src="~assets/images/logo2.png")
</template>

<script>
import TopImage1 from '~/components/TopImage1.vue'
import TopImage2 from '~/components/TopImage2.vue'
import TopImage3 from '~/components/TopImage3.vue'
import TopImage4 from '~/components/TopImage4.vue'
import MenuBar from '~/components/MenuBar'

export default {
  components: {
    TopImage1,
    TopImage2,
    TopImage3,
    TopImage4,
    MenuBar
  }
}
</script>

<style lang="stylus" scoped>
#top
  width 100%
  // margin-bottom 40vmin

.top_container
  position relative
  @media screen and (max-width: 740px)
    height 100vw
  @media screen and (min-width: 740px)
    max-height 100vh
    height calc(100vw * 2 / 3)

.top_wrapper
  width 100%
  position absolute
  animation-name slide
  animation-duration 16s
  animation-iteration-count infinite
  opacity 0
  @media screen and (max-width: 740px)
    height 100vw
  @media screen and (min-width: 740px)
    max-height 100vh
    height calc(100vw * 2 / 3)

.top_stories
  position absolute
  right 0
  bottom 2%
  background-color BG_COLOR_T
  font-size 1rem
  padding 1rem
  text-decoration none
  border-radius 1rem 0 0 1rem
  &:visited
    color BASE_COLOR

.top_divider
  background-color BASE_COLOR
  display flex
  width 100%
  height 10vmin
  flex-direction row
  align-items center
  justify-content center
  @media screen and (min-width: 740px)
    display none

.divider_logo
  max-height 10vmin
  padding 0.3rem
</style>
