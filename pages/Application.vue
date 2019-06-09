<template lang="pug">
  section#application
    .application_wrapper
      h1.application_title 応募概要
      p.application_text 第1回みやぎプロコンでは、宮城県内の小中学生が作ったプログラム作品を募集します。
        <br/>プログラミングに触れたことがない初心者も大歓迎です。
        <br/>各地で実施する関連ワークショップに参加して、挑戦してみよう。
      p.application_text 最終審査会＆表彰式は、10月27日(日)仙台高等専門学校広瀬キャンパスで開催！
        <br/>賞品には、ノートパソコンやタブレットなど豪華な副賞も多数！

      h2.application_subheading 募集内容
      p.application_text テーマ：自由
        <br/>オリジナルのブログラム作品であれば、ジャンルや言語、作成ツールは問いません。
        <br/>・ゲームやアプリなどのソフトウェア
        <br/>・ロボットや電子工作などのハードウェア
        <br/>・PCやスマートフォン、タブレットで動作するwebプログラム 等
        <br/>自由な発想と組合せで作品をつくって気軽に応募しよう！

      h2.application_subheading 応募資格
      p.application_text 宮城県の小学生・中学生(隣県も可)
        <br/>・2人以上のチームでつくった作品でも応募可
        <br/>・1人（1チーム）何作品でも応募可（※但しノミネートは1作品のみ）

      h2.application_subheading 応募方法
      p.application_text 応募方法の詳細は、後日お知らせいたします
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#application
  width 100%
  margin-bottom 40vmin

.application_wrapper
  width 80%
  max-width 700px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.application_title
  // width 100%
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_ORANGE 30%);

.application_subheading
  width 100%
  font-size 1.6rem
  line-height 2.5rem
  font-weight 400
  margin-bottom 3vmin
  background: linear-gradient(transparent 80%, THEME_BLUE 20%);

.application_text
  width 100%
  font-size 1.2rem
  line-height 2.5rem
  margin-bottom 10vmin
</style>
