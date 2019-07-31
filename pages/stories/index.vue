<template lang="pug">
  section#stories
    .stories_container_top
      top-image1
      top-image2
      top-image3
      top-image4
      top-image5
    .menubar_wrapper
      menu-bar
    .stories_container
      h1.stories_title <font-awesome-icon icon="check" class="stories_icon"/> コンセプトストーリー
      .stories_card.stories_card-blue#story1
        p.stories_card_main ぼくは算数がにがてです。
          <br/>なぜなら、数字がきらいだからです。
          <br/>たし算やひき算はできます。
          <br/>でも、かけ算や文しょうだいはむずかしくてにが手です。
          <br/>しゅくだいをやっているときも、
          <br/>はやくゲームしたいなっておもいます。
          <br/>ゲームをやっているときはじかんはあっというまで、
          <br/>ぼくのとくいなことです。
        p.stories_card_sub おとなの方へ
          <br/>何もないことを表す０。
          <br/>この概念が生まれたことで、数学は飛躍的な進歩を遂げました。
          <br/>世界を急速に発展させてきたコンピューターを動かしている最小単位は０と１。
          <br/>今、世界のトップクラスでゲームを作っている大人も、０と１からはじまる数や記号を駆使してゲームをつくっています。
          <br/>彼や彼女もかつてはゲームで友達と競い合うひとりのこどもでした。
          <br/>算数だって苦手だったかもしれません。
          <br/>でも今やエンターテイメントをつくる面白さに夢中です。
          <br/>こどもたちは、まっさらな０の状態。
          <br/>可能性を広げる小さな１歩を、応援してあげませんか。
        p.stories_card_keyword まっさらな０、可能性の１歩。

      .stories_card.stories_card-orange.unvisible#story2(v-bind:class="{ show: showStory2 }")
        p.stories_card_main 図工の時間に、あったらいいなと思うどうぐをつくりました。
          <br/>わたしは、将来びようしになりたいので、好きなかみがたとかみの色に変えられるマシーンをダンボールで作りました。
          <br/>クラスの男の子は、むりって言ってきたけど、わたしはそうは思いません。
          <br/>みらいに、ぜったいつくってみたいとおもいます。
        p.stories_card_sub おとなの方へ
          <br/>おとなになったらこれをしたい！
          <br/>そうはっきり言えるのは素晴らしいことです。
          <br/>将来の夢ランキングとか、安泰な職業とか、それは時代が勝手に決めること。
          <br/>こどもたちは一人ひとりのペースで、好きなこと、やりたいことを見つければいい。
          <br/>もちろん、すきなこと、向いていることが何なのか、見出せないこともあります。
          <br/>「好き」のきっかけづくりができるように、ものづくりの形がひとつではないことを味わってもらいたいと考えています。
          <br/>できた！わかった！やった！０が１に変わるよろこびを、宮城のこどもたちに。
        p.stories_card_keyword ０が１に変わるよろこびを。
</template>

<script>
import TopImage1 from '~/components/TopImage1.vue'
import TopImage2 from '~/components/TopImage2.vue'
import TopImage3 from '~/components/TopImage3.vue'
import TopImage4 from '~/components/TopImage4.vue'
import TopImage5 from '~/components/TopImage5.vue'
import MenuBar from '~/components/MenuBar'
import appearMixin from '~/mixins/appearMixin'

export default {
  components: {
    TopImage1,
    TopImage2,
    TopImage3,
    TopImage4,
    TopImage5,
    MenuBar
  },
  mixins: [appearMixin],
  computed: {
    showStory2() {
      return this.isShown('story2')
    }
  }
}
</script>

<style lang="stylus" scoped>
#stories
  width 100%
  margin-bottom 10vmin
  overflow hidden

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.stories_container
  width 90%
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 12vmin auto 0
  &_top
    position relative
    @media screen and (max-width: 740px)
      height 100vw
    @media screen and (min-width: 740px)
      max-height 80vh
      height calc(100vw * 2 / 3)

.top_wrapper
  width 100%
  position absolute
  animation-name slide
  animation-duration 20s
  animation-iteration-count infinite
  opacity 0
  @media screen and (max-width: 740px)
    height 100vw
  @media screen and (min-width: 740px)
    max-height 80vh
    height calc(100vw * 2 / 3)

.stories_title
  margin 3rem 0 1rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.stories_icon
  color BG_COLOR
  background-color THEME_GRAY
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

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

.stories_card
  width 100%
  margin 4rem 0
  box-shadow .5rem 1rem 1rem .5rem rgba(0,0,0,0.2)
  padding 2rem
  &-blue
    background-color THEME_BLUE
  &-orange
    background-color THEME_ORANGE

.stories_card_main
  color BG_COLOR
  font-size 1.6rem
  @media screen and (max-width: 740px)
    line-height 2.5rem
    letter-spacing .05rem
  @media screen and (min-width: 740px)
    line-height 3rem
    letter-spacing .1rem

.stories_card_sub
  margin-top 6rem
  font-weight 600
  font-size 1.2rem
  letter-spacing .05rem
  line-height 2rem

.stories_card_keyword
  color BG_COLOR
  margin-top 6rem
  font-weight 600
  @media screen and (max-width: 740px)
    font-size 1.7rem
    letter-spacing .05rem
  @media screen and (min-width: 740px)
    font-size 2rem
    letter-spacing .2rem
</style>
