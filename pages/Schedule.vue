<template lang="pug">
  section#schedule
    .wrapper(class="unvisible" v-bind:class="{ show: showSection }")
      h1.heading スケジュール

      h2.subheading 2019年7月～
      p.text 関連ワークショップを県内各地で実施
        <br/>※実施スケジュール等は、随時発表いたします

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
export default {
  methods: {
    isShown: function(togglePos) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(
          'schedule',
          this.centerOfWindow()
        )
        return topPos + togglePos <= this.$window.scrollY
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 : 0
    }
  },
  computed: {
    showSection() {
      return this.isShown(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
#schedule
  width 100%
  margin-bottom 40vmin
  overflow hidden

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)
</style>
