<template lang="pug">
  section#application
    .menubar_wrapper
      menu-bar
    .application_container
      h1.application_title <font-awesome-icon icon="check" class="application_icon"/> 応募について
      .application_wrapper
        .application_about
          h1.heading 概要
          img(:src="require('@/assets/images/about_application.png')")
        detail
        schedule
</template>

<script>
import MenuBar from '~/components/MenuBar'
import Detail from '~/pages/application/Detail'
import Schedule from '~/pages/application/Schedule'

export default {
  components: {
    MenuBar,
    Detail,
    Schedule
  }
}
</script>

<style lang="stylus" scoped>
#application
  width 100%
  overflow hidden
  background-color THEME_BLUE

.application_title
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.application_icon
  color THEME_BLUE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.application_container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 12vmin

.application_wrapper
  background-color BG_COLOR
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-bottom 10vmin
  @media screen and (max-width: 740px)
    width 95vw
  @media screen and (min-width: 740px)
    width 80vw

.application_about
  max-width 700px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 10vmin auto
  @media screen and (max-width: 740px)
    width 95%
  @media screen and (min-width: 740px)
    width 80%
  >img
    margin-top 5vmin

.application_description
  font-size 1.3rem
  line-height 2.5rem
  margin 10vmin 0 20vmin
  padding 5vmin 0
  border-top 5px dotted THEME_BLUE
  border-bottom 5px dotted THEME_BLUE
</style>
