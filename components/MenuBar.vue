<template lang="pug">
  menu#menubar
    nav(v-bind:class="{ isFix: toggleFix }")
      ul(class='menubar_items')
        li
          router-link(to="/")
            img.menu_logo(src="~assets/images/logo2.png")
        li
          a(href="#" class="menubar_item" @click.stop.prevent="aboutClick") みやぎプロコンって？
        li
          a(href="#" class="menubar_item" @click.stop.prevent="applicationClick") 応募について
        li
          a(href="#" class="menubar_item" @click.stop.prevent="nominatedClick") ノミネート作品
        li
          a(href="#" class="menubar_item" @click.stop.prevent="storiesClick") コンセプト<br/>ストーリー
        li
          a(href="https://www.facebook.com/miyagiprocon/" target='_blank' class="menubar_item")
            img.menu_facebook(src="~assets/images/facebook.png")
        li
          .hamburger.hamburger-head(v-bind:class="{ 'hamburger_menu-open': $store.state.toggleMenu, showHumburger: toggleFix }")
            hamburger
</template>

<script>
import VueScrollTo from 'vue-scrollto'
import Hamburger from '~/components/Hamburger.vue'

export default {
  components: {
    Hamburger
  },
  methods: {
    isFix: function(togglePos) {
      if (
        process.browser &&
        (this.$route.path === '/' || this.$route.path === '/stories')
      ) {
        const [topPos] = this.$window.getElementPos('menubar', 0)
        return topPos + togglePos <= this.$window.scrollY && topPos !== 0
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
    nominatedClick: function() {
      this.$router.push('/nominated')
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
  height 12vmin
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
  @media screen and (max-width: 740px)
    display none

.menu_logo
  height 10vmin
  padding 0.3rem

.menu_facebook
  height 7vmin
  padding 0.3rem

.hamburger
  z-index 200
  display none
.hamburger_menu-open
  z-index 300
.showHumburger
  @media screen and (max-width: 740px)
    display block
</style>
