<template lang="pug">
  section#stories
    .stories_wrapper
      h1.stories_title コンセプトストーリー
      p.stories_text 「みやぎプロコン」のコンセプトを表現したポスターを作りました。
      img.stories_image(src="~assets/images/story1.png" class="unvisible" v-bind:class="{ show: showSection }")
      img.stories_image(src="~assets/images/story2.png" class="unvisible" v-bind:class="{ show: showSection }")
</template>

<script>
export default {
  methods: {
    isShown: function(togglePos) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(
          'stories',
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
#stories
  width 100%
  margin-bottom 40vmin
  overflow hidden

.stories_wrapper
  width 80%
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.stories_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_GRAY 30%);

.stories_text
  font-size 1.3rem
  line-height 2.5rem

.stories_image
  width 100%
  margin 2rem 0
  filter drop-shadow(10px 10px 10px rgba(0,0,0,0.3))

.unvisible
  opacity 0
  -webkit-transition all 1s

.show
  opacity 1
  -webkit-transform translate(0px, 0)
</style>
