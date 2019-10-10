<template lang="pug">
  .nominatedCard_wrapper
    .nominatedCard_image(:style="{backgroundImage: `url(${getImage(image)})` }")
    .nominatedCard_content
      .nominatedCard_wrapper-content
        p.nominatedCard_heading {{ title }}
        p 使用ツール
        p.nominatedCard_subtext <span v-html="tools"></span>
</template>

<script>
export default {
  props: ['title', 'tools', 'image'],
  methods: {
    getImage: function(path) {
      return path
        ? require(`@/assets/images/${path}`)
        : require('@/assets/images/def.jpg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.nominatedCard_wrapper
  background-color THEME_GRAY2
  display flex
  flex-direction column
  margin 1rem
  @media screen and (max-width: 740px)
    width 200px
    height 250px
  @media screen and (min-width: 740px)
    width 400px
    height 450px
  &-content
    display flex
    flex-direction column
    align-items center
    width 100%

.nominatedCard_image
  height 90%
  object-fit cover
  background-size contain
  background-repeat no-repeat
  background-position center center
  display flex
  justify-content flex-start
  align-items flex-end

.nominatedCard-hidden
  display none

.nominatedCard_content
  height 50%
  display flex
  align-items flex-start
  justify-content center
  flex-direction column
  padding 1rem

.nominatedCard_heading
  font-weight 600
  position relative
  margin-bottom .5rem
  @media screen and (max-width: 740px)
    font-size 1.2rem
  @media screen and (min-width: 740px)
    font-size 1.5rem

.nominatedCard_subtext
  margin-bottom 1rem
  @media screen and (max-width: 740px)
    font-size 1rem
  @media screen and (min-width: 740px)
    font-size 1.2rem
</style>
