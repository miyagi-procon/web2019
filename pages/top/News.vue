<template lang="pug">
  section#news
    .wrapper
      h1.news_title <font-awesome-icon icon="check" class="news_icon"/> 新着情報
      .unvisible(v-bind:class="{ show: showSection }")
        .news_content
          news-item(
            heading='ノミネート作品が決定！'
            subtext='一次審査を勝ち残った<a href="/nominated">ノミネート作品</a>が決定しました！<br/>最終審査会は10月27日（日）12:30～15:30、仙台高等専門学校 広瀬キャンパスにて行われます！'
            date='2019/10/10')
          news-item(
            heading='【最終審査会＆表彰式について】'
            subtext=`日時：10月27日（日）12:30～15:30
                    <br/>会場：仙台高等専門学校 広瀬キャンパス 創造教育棟 3F
                    <br/>※入場無料（どなたでもご参加いただけます）
                    <br/>※一部の体験講座は有料、事前予約制となります。
                    <br/>詳しいタイムスケジュール等は、後日お知らせいたします。`
            date='2019/9/30')
          news-item(
            heading='作品募集を開始！'
            subtext='作品の募集を開始しました！締め切りは9/30です！<br/>応募詳細は<a href="/application">こちら</a>から。<br/>たくさんの応募、お待ちしております！'
            date='2019/8/1')
          news-item(
            heading='ワークショップの申し込み、続々開始してます！'
            subtext='各ワークショップの申し込みが開始しています。<br/><a href="/workshop">ワークショップページ</a>から興味があるワークショップのリンクを辿り、申し込んでみてください！'
            date='2019/7/16')
          news-item(
            heading='ワークショップの情報を追加しました'
            subtext='関連ワークショップの情報を追加しました。<br/><a href="/workshop">こちら</a>からチェックしてみてください！'
            date='2019/6/27')
          news-item(
            heading='ホームページ公開しました！'
            subtext='「みやぎプロコン」の公式ホームページを公開しました。<br/>これからどんどん情報が追加されていきますので、お楽しみに！'
            date='2019/6/27')
</template>

<script>
import NewsItem from '~/components/NewsItem.vue'
import appearMixin from '~/mixins/appearMixin'

export default {
  components: {
    NewsItem
  },
  mixins: [appearMixin],
  computed: {
    showSection() {
      return this.isShown('news')
    }
  }
}
</script>

<style lang="stylus" scoped>
#news
  width 100%
  overflow hidden
  background-color THEME_BLUE

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.news_title
  color BASE_COLOR
  margin 3rem 0 2rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.news_icon
  color THEME_BLUE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.news_content
  background-color BG_COLOR
  margin 0 5vmin 5vmin
  overflow-y scroll
  height 50vmin
  @media screen and (max-width: 740px)
    width 80vw
    padding 2rem
  @media screen and (min-width: 740px)
    width 50vw
    padding 2rem 5rem
</style>
