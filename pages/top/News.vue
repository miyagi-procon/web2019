<template lang="pug">
  section#news
    .wrapper
      h1.news_title News
      .unvisible(v-bind:class="{ show: showSection }")
        .news_content
          news-item(
            heading='ワークショップの情報を追加しました'
            subtext='関連ワークショップの情報を追加しました。<br/><a href="/workshop">こちら</a>からチェックしてみてください！'
            date='2019/6/25')
          news-item(
            heading='ホームページ公開しました！'
            subtext='「みやぎプロコン」の公式ホームページを公開しました。<br/>これからどんどん情報が追加されていきますので、お楽しみに！'
            date='2019/6/24')
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
  margin 3rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 4rem

.news_content
  background-color BG_COLOR
  margin 5vmin
  overflow-y scroll
  height 50vmin
  @media screen and (max-width: 740px)
    width 80vw
    padding 2rem
  @media screen and (min-width: 740px)
    width 50vw
    padding 2rem 5rem
</style>
