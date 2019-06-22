<template lang="pug">
  .top_wrapper.top_wrapper1
    p.top_text4 こどもたちの<br/>アイディアと可能性は<br/>無限大。
    img.top_image4-1(src="~assets/images/slideillust4-1.png")
    img.top_image4-2(src="~assets/images/slideillust4-2.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper1
  background-color THEME_GRAY
  animation-delay 12s

.top_text4
  font-weight 700
  color BG_COLOR
  position absolute
  text-align center
  width 100%
  top 30%
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px) and (max-width: 1080px)
    font-size 3rem
  @media screen and (min-width: 1080px)
    font-size 4rem

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
