<template lang="pug">
  section#detail
    .wrapper
      .unvisible(v-bind:class="{ show: showSection }")
        .detail_content
          .white_area
          img.detail_titleImage1(src="~assets/images/title2.png")
          ul.detail_items
            detail-item(
              heading='プログラミング初心者でも大丈夫！'
              subtext='夏休み期間中に開催される<a href="/workshop">プログラミング体験イベント（ワークショップ）</a>に参加して、作品作りのアイディアを考えよう！自由研究にもピッタリ！')
            detail-item(
              heading='応募内容は自由！'
              subtext='ゲームやアプリ、ロボットや電子工作など、オリジナルのプログラム作品であれば何でもOK。')
            detail-item(
              heading='最終審査会で自分の作品をアピール！'
              subtext='ノミネート作品に選ばれた人は、最終審査会で作品をプレゼンすると優秀作品に選ばれる確率がUP！')
            detail-item(
              heading='豪華賞品がいっぱい！'
              subtext='ノートパソコンやタブレットなど、豪華な副賞、協賛賞がたくさんあります。')
            .detail_area
              a.detail_toApplication(href="/application") 応募について見る
</template>

<script>
import DetailItem from '~/components/DetailItem.vue'
import appearMixin from '~/mixins/appearMixin'

export default {
  components: {
    DetailItem
  },
  mixins: [appearMixin],
  computed: {
    showSection() {
      return this.isShown('detail')
    }
  }
}
</script>

<style lang="stylus" scoped>
#detail
  width 100%
  overflow hidden
  background-color THEME_ORANGE

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.detail_title
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 4rem

.detail_content
  margin 5vmin
  position relative
  // padding-bottom 2vmin
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
  right 5%
  z-index -1

.detail_titleImage1
  float right
  z-index 10
  margin 0 0 1rem 1rem
  @media screen and (max-width: 740px)
    max-height 40vmin
  @media screen and (min-width: 740px)
    max-height 30vmin

.detail_items
  padding 6rem 4rem 2rem 2rem

.detail_area
  padding-top 1rem
  display flex
  align-items center

.detail_toApplication
  background-color BASE_COLOR
  padding 1rem
  text-decoration none
  border-radius 1rem
  text-align center
  margin 2rem auto
  color BG_COLOR
  @media screen and (max-width: 740px)
    font-size 2rem
    padding 1rem 1rem
  @media screen and (min-width: 740px)
    font-size 3rem
    padding 1rem 4rem
  &:visited
    color BG_COLOR

.detail_toFile
  background-color BG_COLOR_T
  font-size 1rem
  padding 1rem
  text-decoration none
  border-radius 1rem
  text-align center
  margin 2rem 2rem 4rem
  color BASE_COLOR
  &:visited
    color BASE_COLOR

.detail_flex
  display flex
  flex-wrap wrap
</style>
