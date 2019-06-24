<template lang="pug">
  .detail_wrapper
    p.detail_heading {{ heading }}
    p.detail_subtext <span v-html="subtext"></span>
</template>

<script>
export default {
  props: ['heading', 'subtext']
}
</script>

<style lang="stylus" scoped>
.detail_wrapper
  margin-left 1.5rem
  border-bottom 3px dotted THEME_BLUE

.detail_heading
  font-weight 600
  position relative
  margin 1rem 0 1rem
  @media screen and (max-width: 740px)
    font-size 1.2rem
  @media screen and (min-width: 740px)
    font-size 1.5rem
  &:after
    display block
    content ''
    position absolute
    background-color THEME_BLUE
    -webkit-transform rotate(-45deg)
    transform rotate(-45deg)
    @media screen and (max-width: 740px)
      top .6rem
      left -1.6rem
      width .8rem
      height .8rem
    @media screen and (min-width: 740px)
      top .6rem
      left -2rem
      width 1rem
      height 1rem

.detail_subtext
  font-size 1rem
  margin-bottom 1rem
</style>
