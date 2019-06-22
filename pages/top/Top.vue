<template lang="pug">
  section#top
    top-image1
    //- .title
    //-   .top_right
    //-   .top_left
    //-   img#logo(src="~assets/images/logo.png")
</template>

<script>
import TopImage1 from '~/components/TopImage1.vue'
import TopImage2 from '~/components/TopImage2.vue'

export default {
  components: {
    TopImage1,
    TopImage2
  }
}
</script>

<style lang="stylus" scoped>
#top
  width 100%
  margin-bottom 40vmin

.top_wrapper
  width 100%
  position relative
  @media screen and (max-width: 740px)
    height 100vw
  @media screen and (min-width: 740px)
    max-height 100vh
    height calc(100vw * 2 / 3)
</style>
