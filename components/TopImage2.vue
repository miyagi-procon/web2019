<template lang="pug">
  .top_wrapper.top_wrapper1
    p.top_text ともだちの気持ちを<br/>計れる<br/>センサー。
    img.top_image(src="~assets/images/slideillust2.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper1
  background-color THEME_GRAY

.top_text
  font-weight 700
  color BG_COLOR
  position absolute
  @media screen and (max-width: 740px)
    text-align right
    font-size 2rem
    right 10vw
    top 15%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    text-align right
    font-size 3rem
    right 10vw
    top 20%
  @media screen and (min-width: 1080px)
    text-align center
    font-size 4rem
    right 10vw
    top 30%

.top_image
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
    max-height 70vmin
    left 10%
    top 20%
</style>
