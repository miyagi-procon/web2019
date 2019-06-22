<template lang="pug">
  .top_wrapper.top_wrapper1
    p.top_text 気分にあわせて<br/>光る花。
    img.top_image(src="~assets/images/slideillust1.png")
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper1
  background-color THEME_ORANGE

.top_text
  text-align center
  font-weight 700
  color BG_COLOR
  position absolute
  @media screen and (max-width: 740px)
    font-size 2rem
    left 10vw
    top 25%
  @media screen and (min-width: 740px) and (max-width: 1080px)
    font-size 3rem
    left 10vw
    top 40%
  @media screen and (min-width: 1080px)
    font-size 4rem
    left 10vw
    top 40%

.top_image
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
