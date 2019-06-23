<template lang="pug">
  section#news
    .wrapper
      h1.news_title News
      .unvisible(v-bind:class="{ show: showSection }")
        .news_content
          p test
</template>

<script>
export default {
  methods: {
    isShown: function(togglePos) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(
          'news',
          this.centerOfWindow()
        )
        return topPos + togglePos <= this.$window.scrollY
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 : 0
    }
  },
  computed: {
    showSection() {
      return this.isShown(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
#news
  width 100%
  overflow hidden
  background-color THEME_BLUE

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.news_title
  color BASE_COLOR
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 4rem

.news_content
  background-color BG_COLOR
  margin 5vmin
  @media screen and (max-width: 740px)
    height 70vh
    width 70vw
  @media screen and (min-width: 740px)
    height 50vh
    width 40vw
</style>
