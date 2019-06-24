<template lang="pug">
  section#schedule
    .wrapper(class="unvisible" v-bind:class="{ show: showSection }")
      h1.heading スケジュール

      h2.subheading 2019年7月～
      p.text 関連ワークショップを県内各地で実施
      .text.text-right
        router-link.schedule_toWorkshop(to="/workshop") ワークショップ一覧

      h2.subheading 2019年8月1日(木)～9月30日(月)
      p.text 作品応募期間

      h2.subheading 2019年10月上旬
      p.text 一次審査追加の通知

      h2.subheading 2019年10月27日
      p.text <span class='text-emphasis'>最終審査会＆表彰式</span>
        <br/>場所：仙台高等専門学校広瀬キャンパス
        <br/>(高専祭と同時開催！)
        <br/>ノミネート作品の展示や子供たちによる作品のプレゼン、
        <br/>ゲストトークセッション、ワークショップなど楽しい催しも実施予定。
        <br/>詳細は随時発表します。
</template>

<script>
import appearMixin from '~/mixins/appearMixin'

export default {
  mixins: [appearMixin],
  computed: {
    showSection() {
      return this.isShown('schedule')
    }
  }
}
</script>

<style lang="stylus" scoped>
#schedule
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

.schedule_toWorkshop
  background-color THEME_GRAY
  font-size 1rem
  padding 1rem
  text-decoration none
  border-radius 1rem
  color BASE_COLOR
  &:visited
    color BASE_COLOR
</style>
