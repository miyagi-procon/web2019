<template lang="pug">
  section#top
    .title
      .top_right
      .top_left
      img#logo(src="~assets/images/logo.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#top
  width 100%
  margin-bottom 40vmin

.title
  background-image url('~assets/images/top1.jpg')
  background-size cover
  width 100%
  max-height 100vh
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
  background-color THEME_ORANGE
  width 20vw
  height 20vw
  max-width calc(1080px * 0.2)
  max-height calc(1080px * 0.2)
  bottom 0
  right 0

.top_left
  position absolute
  background-color THEME_BLUE
  width 20vw
  height 20vw
  max-width calc(1080px * 0.2)
  max-height calc(1080px * 0.2)
  top 0
  left 0
</style>
