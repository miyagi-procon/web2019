<template lang="pug">
  section#about
    .wrapper
      h1.about_title About
      .unvisible(v-bind:class="{ show: showSection }")
        .about_content
          .white_area
          img.about_titleImage1(src="~assets/images/title1.png")
          p.about_text <span class="about_text-large">「みやぎプロコン」</span>は、宮城県のこどもたちを対象に、<span class="about_text-orange">ものづくりの楽しさや面白さを体験してほしい！</span>という想いから始まりました。
            <br/>今や全国各地でコンピューターの仕組みを使ったものづくりやプログラミング教室の機会が広がっており、こどもたいの豊かなアイディアを生かした作品を募る「プログラミングコンテスト」が盛り上がりを見せています。
            <br/>そしてついに、こどもたちの豊かな感性を育む<span class="about_text-orange">宮城でのコンテストが初開催</span>です！
</template>

<script>
import appearMixin from '~/mixins/appearMixin'

export default {
  mixins: [appearMixin],
  computed: {
    showSection() {
      return this.isShown('about')
    }
  }
}
</script>

<style lang="stylus" scoped>
#about
  width 100%
  overflow hidden
  background-color THEME_ORANGE

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.about_title
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 4rem

.about_content
  margin 5vmin
  position relative
  padding-bottom 3vmin
  @media screen and (max-width: 740px)
    width 80vw
  @media screen and (min-width: 740px)
    width 70vw

.white_area
  background-color BG_COLOR
  position absolute
  width 95%
  height 90%
  top 10%
  left 5%
  z-index -1

.about_titleImage1
  float left
  z-index 10
  margin 0 1rem 1rem 0
  @media screen and (max-width: 740px)
    max-height 40vmin
  @media screen and (min-width: 740px)
    max-height 30vmin

.about_text
  padding 7rem 2rem 2rem 4rem
  @media screen and (max-width: 740px)
    font-size 1.2rem
  @media screen and (min-width: 740px)
    font-size 1.5rem

.about_text-large
  font-weight 700
  @media screen and (max-width: 740px)
    font-size 1.5rem
  @media screen and (min-width: 740px)
    font-size 2rem

.about_text-orange
  color THEME_ORANGE
</style>
