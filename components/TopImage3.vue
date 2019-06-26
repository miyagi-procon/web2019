<template lang="pug">
  .top_wrapper.top_wrapper3
    p.top_text3 かけるだけで<br/>街で冒険ゲームができる<br/>めがね。
    img.top_image3(src="~assets/images/slideillust3.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper3
  background-color THEME_BLUE
  animation-delay 8s

.top_text3
  font-weight 700
  color BG_COLOR
  position absolute
  text-align center
  @media screen and (max-width: 740px)
    font-size 2rem
    width 100%
    top 15%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    font-size 2.5rem
    right 5%
    top 30%
  @media screen and (min-width: 1080px)
    font-size 3.5rem
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
