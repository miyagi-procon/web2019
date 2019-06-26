<template lang="pug">
  .top_wrapper.top_wrapper5
    .top_text_wrapper
      p.top_text5 「才能」とか
        <br/>「向き不向き」ではなく、
        <br/>こどもたちが
        <br/>「<span class="top_text5-black">夢中になれるもの</span>」を
        <br/>応援しませんか。
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.top_wrapper5
  background-color THEME_ORANGE
  animation-delay 16s

.top_text_wrapper
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center

.top_text5
  font-weight 700
  // background-color BG_COLOR_T
  color BG_COLOR
  position absolute
  text-align center
  padding 2rem 2rem
  border-radius 2rem
  @media screen and (max-width: 740px)
    font-size 2rem
    line-height 3.5rem
  @media screen and (min-width: 740px) and (max-width: 1080px)
    font-size 2.5rem
    line-height 4rem
  @media screen and (min-width: 1080px)
    font-size 3.5rem
    line-height 6rem
  &-black
    color BASE_COLOR
</style>
