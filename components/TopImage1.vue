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
  font-weight 700
  color BG_COLOR
  text-align center
  position absolute
  @media screen and (max-width: 740px)
    font-size 2rem
    left 10vw
    top 20%
  @media screen and (min-width: 740px)
    font-size 4rem
    left 10vw
    top 50%

.top_image
  position absolute
  @media screen and (max-width: 740px)
    max-height 70vw
    right 10%
    bottom 10%
  @media screen and (min-width: 740px)
    max-height 60vmin
    right 10%
    bottom 10%
</style>
