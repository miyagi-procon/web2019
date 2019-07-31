<template lang="pug">
  .top_wrapper.top_wrapper2
    img.top_textImage2(src="~assets/images/slide2_text.png")
    img.top_image2(src="~assets/images/slideillust2.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper2
  background-color THEME_GRAY
  animation-delay 4s

.top_textImage2
  position absolute
  @media screen and (max-width: 740px)
    max-height 35vmin
    right 2vw
    top 15%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 25vmin
    right 2vw
    top 20%
  @media screen and (min-width: 1080px)
    max-height 45vmin
    right 10vw
    top 30%

.top_image2
  position absolute
  @media screen and (max-width: 740px)
    max-height 70vw
    left 10%
    bottom 0
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 60vmin
    left 10%
    top calc(100vw * 2 / 3 - 60vmin)
  @media screen and (min-width: 1080px)
    max-height 60vmin
    left 10%
    top 20%
</style>
