<template lang="pug">
  section#top
    //- a.top_container(href='https://miyagi-procon.jp/2019/award/ev20200229.html')
    //-   img(:src="require('@/assets/images/top5.jpg')")
    .for_noimage
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

.top_container
  width 100%
  >img
    width 100%

.for_noimage
  height 1px
</style>
