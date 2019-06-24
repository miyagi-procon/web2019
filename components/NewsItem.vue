<template lang="pug">
  .news_wrapper
    p.news_heading {{ heading }}
    p.news_date {{ date }}
    p.news_subtext <span v-html="subtext"></span>
</template>

<script>
export default {
  props: ['heading', 'subtext', 'date']
}
</script>

<style lang="stylus" scoped>
.news_wrapper
  margin 0 .5rem 5rem 1.5rem
  // border-bottom 3px dotted THEME_ORANGE

.news_heading
  font-weight 600
  position relative
  margin-top 1rem
  // border-bottom 3px dotted THEME_ORANGE
  @media screen and (max-width: 740px)
    font-size 1.2rem
  @media screen and (min-width: 740px)
    font-size 1.5rem
  &:after
    display block
    content ''
    position absolute
    background-color THEME_ORANGE
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

.news_subtext
  font-size 1rem
  margin .5rem 0
  padding 1rem 0
  border-bottom 3px dotted THEME_ORANGE
  border-top 3px dotted THEME_ORANGE

.news_date
  // font-weight 600
  width 100%
  text-align right
  // margin-top .5rem
</style>
