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
            date='7/27'
            day='土'
            date2='7/28'
            day2='日'
            title='IchigoJamでゲームプログラミング'
            subtitle='IchigoJamを使って川下りゲームをプログラミングで作ってみよう'
            place='名取市'
            organizer='仙台高等専門学校'
            color='orange'
            link='https://connpass.com/event/140198/')
          workshop-card(
            date='7/27'
            day='土'
            date2='7/28'
            day2='日'
            title='アイディアハッカソン＆電子工作'
            subtitle='家族の困ったを解決するひみつ道具を作ろう！'
            place='仙台市（長町）'
            organizer='株式会社アイティプロジェクト'
            color='bule'
            link='http://sendai.pcn.club/ws/miyagiprocon2019.html')
          workshop-card(
            date='8/3'
            day='土'
            title='センサーをつかった電子工作'
            subtitle='いろんなセンサーを使ったものづくり体験'
            place='仙台市（長町）'
            organizer='株式会社アイティプロジェクト'
            color='gray'
            link='http://sendai.pcn.club/ws/miyagiprocon2019.html')
          workshop-card(
            date='8/3'
            day='土'
            date2='8/4'
            day2='日'
            title='センサープログラミングで自動ブレーキシステム'
            subtitle='センサーがついたロボットカーをプログラミングで自由自在に動かそう'
            place='仙台市'
            organizer='仙台高等専門学校'
            color='orange'
            link='https://connpass.com/event/140190/')
          workshop-card(
            date='8/5'
            day='月'
            date2='8/6'
            day2='火'
            title='ロボット組立＆プログラミング体験'
            subtitle='映画スターウォーズに登場するR2ユニットの組立て＆プログラミング'
            place='仙台市（長町）'
            organizer='マジカルコンパススクール'
            color='blue'
            link='http://www.magicalcompath.jp/news/201907l_droid_ws.html')
          workshop-card(
            date='8/7'
            day='水'
            title='ＩＴの力でいちご畑を救おう！'
            subtitle='温度センサーで室温調整に挑戦！'
            place='山元町「ICHIGO WORLD」'
            organizer='株式会社GRA'
            color='gray'
            link='https://forms.gle/diFQfkfhhwVTmtRZ7')
          workshop-card(
            date='8/7'
            day='水'
            title='ロボット組立＆プログラミング体験'
            subtitle='映画スターウォーズに登場するR2ユニットの組立て＆プログラミング'
            place='仙台市'
            organizer='マジカルコンパススクール'
            color='orange'
            link='http://www.magicalcompath.jp/news/201907l_droid_ws.html')
          workshop-card(
            date='8/9'
            day='金'
            title='「知る・考える・学ぶ・伝える」～Switch in 富谷'
            subtitle='センサー、モーター、サウンド、ライトで何ができるかな？'
            place='富谷市'
            organizer='NPO法人 ふうどばんく東北AGAIN'
            color='blue'
            link='https://www.fut-messe.com/switch-tomiya/')
          workshop-card(
            date='8/10'
            day='土'
            title='自分や家族の悩みをプログラミングで解決しちゃおう！'
            subtitle='micro:bitで簡単工作＆プログラミング'
            place='宮城教育大学(5号館1階 未来の教室)'
            organizer='みやぎプロコン実行委員会'
            color='gray'
            link='http://sendai.pcn.club/ws/miyagiprocon2019-0810.html')           
          workshop-card(
            date='8/11'
            day='日'
            date2='8/12'
            day2='祝・月'
            title='やってみよう！プログラミング'
            subtitle='オリジナルゲーム制作やロボット制御に挑戦！'
            place='仙台市'
            organizer='緑と風のガーデン'
            color='orange'
            link='https://midori-kaze-garden.jp/event_201907/')
          workshop-card(
            date='8/17'
            day='土'
            title='IchigoJamを使って気軽にプログラミングデビュー！'
            subtitle='自由研究に使えるかも'
            place='仙台市（長町）'
            organizer='WachHackSendai(株式会社diddyworks, thinkShake製作所)'
            color='bule'
            link='https://peraichi.com/landing_pages/view/wackhacksendai')
          workshop-card(
            date='8/21'
            day='水'
            title='embotを使ってロボット工作＆プログラミング'
            subtitle='「身近な困りごと」を解決しよう！（※embotをすでにお持ちの小中学生限定）'
            place='仙台市ドコモ東北ビル'
            organizer='NTTドコモ'
            color='gray'
            link='https://forms.gle/DR1iFV9rn3rjinUd9')
          workshop-card(
            date='8/24'
            day='土'
            date2='8/25'
            day2='日'
            title='アイディアハッカソン＆電子工作'
            subtitle='家族の困ったを解決するひみつ道具を作ろう！'
            place='仙台市（長町）'
            organizer='株式会社アイティプロジェクト'
            color='orange'
            link='http://sendai.pcn.club/ws/miyagiprocon2019.html')
          workshop-card(
            date='8/25'
            day='日'
            title='ゲーム作成でプログラミングを学ぶ'
            subtitle='Scratchを使ってゲームを作成'
            place='石巻市'
            organizer='一般社団法人イトナブ'
            color='bule'
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
