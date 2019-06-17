<template lang="pug">
  section#workshop
    .workshop_wrapper
      h1.heading ワークショップ
      p.workshop_text 関連ワークショップも続々開催！<br/>まずは参加してみよう！
      p.workshop_text ※詳細は随時発表
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#workshop
  width 100%
  margin-bottom 40vmin

.workshop_wrapper
  width 80%
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.workshop_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_BLUE 30%);

.workshop_text
  font-size 1.3rem
  line-height 2.5rem
</style>
