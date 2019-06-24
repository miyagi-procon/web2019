<template lang="pug">
  section#application
    .menubar_wrapper
      menu-bar
    .application_container
      h1.application_title 応募について
      .application_wrapper
        .wrapper
          p.application_description 第1回みやぎプロコンでは、宮城県内の小中学生が作ったプログラム作品を募集します。
            <br/><span class='text-emphasis'>プログラミングに触れたことがない初心者も大歓迎です。</span>
            <br/>各地で実施する関連ワークショップに参加して、挑戦してみよう。
            <br/>
            <br/>最終審査会＆表彰式は、10月27日(日)仙台高等専門学校広瀬キャンパスで開催！
            <br/><span class='text-emphasis'>賞品には、ノートパソコンやタブレットなど豪華な副賞も多数！</span>
        detail
        schedule
</template>

<script>
import MenuBar from '~/components/MenuBar'
import Detail from '~/pages/application/Detail'
import Schedule from '~/pages/application/Schedule'

export default {
  components: {
    MenuBar,
    Detail,
    Schedule
  }
}
</script>

<style lang="stylus" scoped>
#application
  width 100%
  overflow hidden
  background-color THEME_BLUE

.application_title
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 4rem

.application_container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 12vmin

.application_wrapper
  background-color BG_COLOR
  width 80vw
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 10vmin 10vmin


.application_description
  font-size 1.3rem
  line-height 2.5rem
  margin 2rem 0 20vmin
</style>
