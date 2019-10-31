<template lang="pug">
  .header_wrapper
    button(type="button" class="hamburger_button" @click="toggleOpen($store.state.toggleMenu)")
      span(class="hamburger_line-top" v-bind:class="{ 'hamburger_button-open': $store.state.toggleMenu }")
      span(class="hamburger_line-middle" v-bind:class="{ 'hamburger_button-open': $store.state.toggleMenu }")
      span(class="hamburger_line-bottom" v-bind:class="{ 'hamburger_button-open': $store.state.toggleMenu }")

    .hamburger_wrapper(v-bind:class="{ 'hamburger_wrapper-open': $store.state.toggleMenu }")
      ul(class='hamburger_items')
        li
          a(href="#" class="hamburger_item" @click.stop.prevent="aboutClick") 「みやぎプロコン」って？
        //- li
        //-   a(href="#" class="hamburger_item" @click.stop.prevent="applicationClick") 応募について
        li
          a(href="https://miyagi-procon.jp/2019/award/" class="hamburger_item") 表彰式について
        li
          a(href="https://miyagi-procon.jp/2019/award/result.html" class="hamburger_item") 結果発表
        //- li
        //-   a(href="#" class="hamburger_item" @click.stop.prevent="nominatedClick") ノミネート作品
        li
          a(href="#" class="hamburger_item" @click.stop.prevent="storiesClick") コンセプトストーリー
        li
          a(href="https://www.facebook.com/miyagiprocon/" target='_blank' class="hamburger_item") facebookページ
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
    workshopClick: function() {
      this.closeMenu()
      this.$router.push('/workshop')
    },
    nominatedClick: function() {
      this.closeMenu()
      this.$router.push('/nominated')
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

.hamburger_wrapper
  display none
  &-open
    display block

.hamburger_items
  display flex
  position fixed
  top 10%
  right 10%
  height 70%
  flex-direction column
  align-items flex-end
  justify-content space-around

.hamburger_button
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

.hamburger_item
  font-size 2rem
  color BG_COLOR
  text-decoration none
  -webkit-transition all .5s
  &:active
    color BG_COLOR

.hamburger_line-top
  top 10px
.hamburger_line-middle
  top 20px
.hamburger_line-bottom
  top 30px

.hamburger_line-top,
.hamburger_line-middle,
.hamburger_line-bottom
  position absolute
  display block
  width 100%
  height 3px
  border-radius 3px
  transition 0.15s ease-out
  background-color BG_COLOR

.hamburger_button-open
  // 真ん中の線
  &.hamburger_line-top
    width 0
    opacity 0
    transform translateX(20px) rotate(90deg)
    background-color BG_COLOR
  // 上の線
  &.hamburger_line-middle
    width 30px
    transform translateY(5px) rotate(-135deg)
    background-color BG_COLOR
  // 下の線
  &.hamburger_line-bottom
    width 30px
    transform translateY(-5px) rotate(135deg)
    background-color BG_COLOR
</style>
