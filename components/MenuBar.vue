<template lang="pug">
  menu#menubar
    nav(v-bind:class="{ isFix: toggleFix }")
      ul(class='menubar_items')
        li
          img.menu_logo(src="~assets/images/logo2.png")
        li
          a(href="#" class="menubar_item" @click.stop.prevent="aboutClick") トップ
        li
          a(href="#" class="menubar_item" @click.stop.prevent="applicationClick") 応募について
        li
          a(href="#" class="menubar_item" @click.stop.prevent="workshopClick") ワークショップ
        li
          a(href="#" class="menubar_item" @click.stop.prevent="storiesClick") コンセプト<br/>ストーリー
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  methods: {
    isFix: function(togglePos) {
      if (process.browser && this.$route.path === '/') {
        const [topPos] = this.$window.getElementPos('menubar', 0)
        return topPos + togglePos <= this.$window.scrollY
      } else {
        return true
      }
    },
    aboutClick: function() {
      if (this.$route.path === '/') {
        this.topClick('about')
      } else {
        this.$router.push('/')
        setTimeout(() => this.topClick('about'), 500)
      }
    },
    applicationClick: function() {
      this.$router.push('/application')
    },
    storiesClick: function() {
      this.$router.push('/stories')
    },
    scheduleClick: function() {
      this.topClick('schedule')
    },
    workshopClick: function() {
      this.$router.push('/workshop')
    },
    topClick: function(buttonName) {
      if (process.browser) {
        VueScrollTo.scrollTo(`#${buttonName}`, 700, {
          offset: -this.centerOfWindow()
        })
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 - 100 : 0
    }
  },
  computed: {
    toggleFix() {
      return this.isFix(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
#menubar
  padding 0

.isFix
  width 100%
  position fixed
  top 0
  z-index 100

.menubar_items
  background-color BASE_COLOR
  display flex
  width 100%
  height 10vmin
  flex-direction row
  align-items center
  justify-content space-around

.menubar_item
  font-size 1rem
  color BG_COLOR
  text-decoration none
  display inline-block
  &:active
    color BG_COLOR
  &:visited
    color BG_COLOR

.menu_logo
  height 10vmin
  padding 0.3rem
</style>
