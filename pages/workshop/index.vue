<template lang="pug">
  section#workshop
    .menubar_wrapper
      menu-bar
    .workshop_container
      h1.workshop_title <font-awesome-icon icon="check" class="workshop_icon"/> ワークショップ
      .workshop_wrapper
        p.workshop_text 夏休み期間中はプログラミング体験イベントが盛りだくさん！
          <br/>ワークショップに参加して、みやぎプロコンに応募しよう！
        .workshop_lists
          workshop-card(
            date='7/14'
            day='日'
            title='センサー＆ロボットプログラミング'
            subtitle='自動ブレーキ自動車をつくってみよう'
            place='仙台市'
            organizer='みやぎプロコン実行委員会'
            color='blue'
            link='http://www.science-day.com/program/?ID=e2019-697')
          workshop-card(
            date='7/27'
            day='土'
            date2='7/28'
            day2='日'
            title='アイディアハッカソン＆電子工作'
            subtitle='家族の困ったを解決するひみつ道具を作ろう！'
            place='仙台市'
            organizer='株式会社アイティプロジェクト'
            color='gray')
          workshop-card(
            date='8/3'
            day='土'
            title='センサーをつかった電子工作'
            subtitle='いろんなセンサーを使ったものづくり体験'
            place='仙台市'
            organizer='株式会社アイティプロジェクト'
            color='orange')
          workshop-card(
            date='8/7'
            day='水'
            title='ＩＴの力でいちご畑を救おう！'
            subtitle='温度センサーで室温調整に挑戦！'
            place='山元町「ICHIGO WORLD」'
            organizer='株式会社GRA'
            color='blue'
            link='')
          workshop-card(
            date='8/11'
            day='日'
            date2='8/12'
            day2='祝・月'
            title='やってみよう！プログラミング'
            subtitle='オリジナルゲーム制作やロボット制御に挑戦！'
            place='仙台市'
            organizer='緑と風のガーデン'
            color='blue'
            link='https://midori-kaze-garden.jp/event_201907/')            
          workshop-card(
            date='8/17'
            day='土'
            title='IchigoJamを使って気軽にプログラミングデビュー！'
            subtitle='自由研究に使えるかも'
            place='仙台市'
            organizer='WachHackSendai(株式会社diddyworks, thinkShake製作所)'
            color='gray')
          workshop-card(
            date='8/21'
            day='水'
            title='(仮)ロボット工作＆プログラミングWS'
            subtitle='embotを使っておとなの「困った」を解決しよう！'
            place='仙台市ドコモ東北ビル'
            organizer='NTTドコモ'
            color='orange')
          workshop-card(
            date='8/24'
            day='土'
            date2='8/25'
            day2='日'
            title='アイディアハッカソン＆電子工作'
            subtitle='家族の困ったを解決するひみつ道具を作ろう！'
            place='仙台市'
            organizer='株式会社アイティプロジェクト'
            color='blue')
          workshop-card(
            date='8/25'
            day='日'
            title='ゲーム作成でプログラミングを学ぶ'
            subtitle='Scratchを使ってゲームを作成'
            place='石巻市'
            organizer='一般社団法人イトナブ'
            color='gray'
            link='http://itnav.jp/itnavjuku/')
</template>

<script>
import MenuBar from '~/components/MenuBar'
import WorkshopCard from '~/components/WorkshopCard'

export default {
  components: {
    MenuBar,
    WorkshopCard
  }
}
</script>

<style lang="stylus" scoped>
#workshop
  width 100%
  background-color THEME_ORANGE

.workshop_container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 12vmin

.workshop_wrapper
  background-color BG_COLOR
  margin 0 auto
  padding 2rem
  width 80vw
  margin-bottom 10vmin
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap

.workshop_title
  margin 3rem
  font-weight 500
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.workshop_icon
  color THEME_ORANGE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.workshop_text
  font-size 1.3rem
  line-height 2.5rem
  font-weight 700
  text-decoration underline dotted THEME_ORANGE

.workshop_lists
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap
</style>
