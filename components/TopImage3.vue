<template lang="pug">
  .top_wrapper.top_wrapper3
    img.top_textImage3(src="~assets/images/slide3_text.png")
    img.top_image3(src="~assets/images/slideillust3.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper3
  background-color THEME_BLUE
  animation-delay 8s

.top_textImage3
  position absolute
  @media screen and (max-width: 740px)
    max-height 32vmin
    left 10%
    top 15%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 20vmin
    right 5%
    top 30%
  @media screen and (min-width: 1080px)
    max-height 40vmin
    right 5%
    top 35%

.top_image3
  position absolute
  @media screen and (max-width: 740px)
    max-height 60vw
    left 25%
    bottom 0
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 60vmin
    left 5%
    top calc(100vw * 2 / 3 - 60vmin)
  @media screen and (min-width: 1080px)
    max-height 70vmin
    left 5%
    top 20%
</style>
