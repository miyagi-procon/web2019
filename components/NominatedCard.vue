<template lang="pug">
  .nominatedCard_wrapper
    .nominatedCard_image(:style="{backgroundImage: `url(${getImage(image)})` }")
    .nominatedCard_content
      p.nominatedCard_heading {{ title }}
      p.nominatedCard_subtext1 <span v-html="tools"></span>
      .nominatedCard_info
        .nominatedCard_subtext2
          p {{ tools }}
</template>

<script>
export default {
  props: [
    'title',
    'tools',
    'image'
  ],
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
    width 250px
    height 300px
  @media screen and (min-width: 740px)
    width 450px
    height 500px

.nominatedCard_image
  height 50%
  object-fit cover
  background-size cover
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

.nominatedCard_subtext1
  margin-bottom 1rem
  @media screen and (max-width: 740px)
    font-size 1rem
  @media screen and (min-width: 740px)
    font-size 1.2rem

.nominatedCard_subtext2
  font-weight 700
  font-size 1rem
  width 80%
  display flex
  flex-direction column
  margin 1rem 0
  // justify-content flex-end
  // align-items flex-end
  // text-align right
  // float right
</style>
