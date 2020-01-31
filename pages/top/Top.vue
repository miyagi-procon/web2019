<template lang="pug">
  section#top
    a.top_container(href='https://miyagi-procon.jp/2019/award/ev20200229.html')
      img(:src="require('@/assets/images/top4.jpg')")
    .menubar_wrapper
      menu-bar
</template>

<script>
import MenuBar from '~/components/MenuBar'

export default {
  components: {
    MenuBar
  }
}
</script>

<style lang="stylus" scoped>
#top
  width 100%
  background-color BASE_COLOR

.top_wrapper
  width 100%
  position absolute
  animation-name slide
  animation-duration 20s
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
  color BASE_COLOR
  font-size 1rem
  padding 1rem
  text-decoration none
  border-radius 1rem 0 0 1rem
  &:visited
    color BASE_COLOR
</style>
