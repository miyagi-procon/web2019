<template lang="pug">
  .top_wrapper.top_wrapper1
    img.top_textImage1(src="~assets/images/slide1_text.png")
    img.top_image1(src="~assets/images/slideillust1.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper1
  background-color THEME_ORANGE
  animation-delay 0s

.top_textImage1
  position absolute
  @media screen and (max-width: 740px)
    max-height 24vmin
    left 0
    top 25%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 20vmin
    left 5vw
    top 40%
  @media screen and (min-width: 1080px)
    max-height 30vmin
    left 10vw
    top 40%

.top_image1
  position absolute
  @media screen and (max-width: 740px)
    max-height 70vw
    right 10%
    bottom 10%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 60vmin
    right 10%
    top calc(100vw * 2 / 3 - 60vmin)
  @media screen and (min-width: 1080px)
    max-height 70vmin
    right 10%
    top 20%
</style>
