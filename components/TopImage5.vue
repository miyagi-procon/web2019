<template lang="pug">
  .top_wrapper.top_wrapper5
    .top_text_wrapper
      img.top_textImage5(src="~assets/images/slide5_text.png")
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

.top_textImage5
  @media screen and (max-width: 740px)
    max-height 45vmin
  @media screen and (min-width: 740px) and (max-width: 1080px)
    max-height 40vmin
  @media screen and (min-width: 1080px)
    max-height 60vmin
</style>
