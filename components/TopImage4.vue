<template lang="pug">
  .top_wrapper.top_wrapper4
    img.top_image4-1(src="~assets/images/slideillust4-1.png")
    img.top_image4-2(src="~assets/images/slideillust4-2.png")
    .top_text_wrapper
      img.top_textImage4(src="~assets/images/slide4_text.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper4
  background-color THEME_GRAY
  animation-delay 12s

.top_text_wrapper
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center

.top_textImage4
  @media screen and (max-width: 740px)
    max-height 37vmin
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 26vmin
  @media screen and (min-width: 1080px)
    max-height 45vmin

.top_image4-1
  position absolute
  right 5%
  top 5%
  @media screen and (max-width: 740px)
    max-height 50vw
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 40vmin
  @media screen and (min-width: 1080px)
    max-height 50vmin

.top_image4-2
  position absolute
  left 5%
  bottom 5%
  @media screen and (max-width: 740px)
    max-height 60vw
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 50vmin
  @media screen and (min-width: 1080px)
    max-height 60vmin
</style>
