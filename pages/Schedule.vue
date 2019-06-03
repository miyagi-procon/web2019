<template lang="pug">
  section#schedule
    .schedule_wrapper
      h1.schedule_title スケジュール
      p.schedule_text comming soon...
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#schedule
  width 100%
  margin-bottom 40vmin

.schedule_wrapper
  width 80%
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.schedule_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_ORANGE 30%);

.schedule_text
  font-size 1.3rem
  line-height 2.5rem
</style>
