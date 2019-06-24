<template lang="pug">
  section#applicationDetail
    .wrapper(class="unvisible" v-bind:class="{ show: showSection }")
      h1.heading 詳細
      h2.subheading 募集内容
      p.text テーマ：自由
        <br/>オリジナルのブログラム作品であれば、ジャンルや言語、作成ツールは問いません。
        <br/>・ゲームやアプリなどのソフトウェア
        <br/>・ロボットや電子工作などのハードウェア
        <br/>・PCやスマートフォン、タブレットで動作するwebプログラム 等
        <br/>自由な発想と組合せで作品をつくって気軽に応募しよう！

      h2.subheading 応募資格
      p.text 宮城県の小学生・中学生(隣県も可)
        <br/>・2人以上のチームでつくった作品でも応募可
        <br/>・1人（1チーム）何作品でも応募可（※但しノミネートは1作品のみ）

      h2.subheading 応募方法
      p.text 応募方法の詳細は、後日お知らせいたします
</template>

<script>
export default {
  methods: {
    isShown: function(togglePos) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(
          'applicationDetail',
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
#applicationDetail
  width 100%
  margin-bottom 20vmin
  overflow hidden

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)
</style>
