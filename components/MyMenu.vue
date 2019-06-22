<template lang="pug">
  menu(class="header_wrapper")
    button(type="button" class="menu_button" @click="toggleOpen($store.state.toggleMenu)")
      span(class="menu_line-top" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")
      span(class="menu_line-middle" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")
      span(class="menu_line-bottom" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")

    nav(class="menu_wrapper" v-bind:class="{ 'menu_wrapper-open': $store.state.toggleMenu }")
      ul(class='menu_items')
        li
          a(href="#" class="menu_item" @click.stop.prevent="aboutClick") 「みやぎプロコン」って？
        li
          a(href="#" class="menu_item" @click.stop.prevent="applicationClick") 応募について
        li
          a(href="#" class="menu_item" @click.stop.prevent="scheduleClick") スケジュール
        li
          a(href="#" class="menu_item" @click.stop.prevent="workshopClick") ワークショップ
        li
          a(href="#" class="menu_item" @click.stop.prevent="storiesClick") コンセプトストーリー
</template>

<script>
import { mapActions } from 'vuex'
import VueScrollTo from 'vue-scrollto'

export default {
  methods: {
    ...mapActions(['closeMenu', 'openMenu']),
    toggleOpen(toggleMenu) {
      if (toggleMenu) {
        this.closeMenu()
      } else {
        this.openMenu()
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
      this.closeMenu()
      this.$router.push('/application')
    },
    storiesClick: function() {
      this.closeMenu()
      this.$router.push('/stories')
    },
    scheduleClick: function() {
      this.topClick('schedule')
    },
    workshopClick: function() {
      this.closeMenu()
      this.$router.push('/workshop')
    },
    topClick: function(buttonName) {
      this.closeMenu()
      if (process.browser) {
        VueScrollTo.scrollTo(`#${buttonName}`, 700, {
          offset: -this.centerOfWindow()
        })
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 - 100 : 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.header_wrapper
  padding 0

.menu_wrapper
  display none
  &-open
    display block

.menu_items
  display flex
  position fixed
  top 10%
  left 10%
  height 70%
  flex-direction column
  align-items flex-start
  justify-content space-around

.menu_button
  position relative
  display inline-block
  width 30px
  height 40px
  background-color transparent
  cursor pointer
  outline none
  appearance none
  border none
  padding 0

.menu_item
  font-size 2rem
  color BG_COLOR
  text-decoration none
  -webkit-transition all .5s
  &:active
    color BG_COLOR

.menu_line-top
  top 0px
.menu_line-middle
  top 10px
.menu_line-bottom
  top 20px

.menu_line-top,
.menu_line-middle,
.menu_line-bottom
  position absolute
  display block
  width 100%
  height 3px
  border-radius 3px
  transition 0.15s ease-out
  background-color BASE_COLOR

.menu_button-open
  // 真ん中の線
  &.menu_line-top
    width 0
    opacity 0
    transform translateX(20px) rotate(90deg)
    background-color BG_COLOR
  // 上の線
  &.menu_line-middle
    width 30px
    transform translateY(5px) rotate(-135deg)
    background-color BG_COLOR
  // 下の線
  &.menu_line-bottom
    width 30px
    transform translateY(-5px) rotate(135deg)
    background-color BG_COLOR
</style>
