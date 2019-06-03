<template lang="pug">
  section#application
    .application_wrapper
      h1.application_title 募集内容
      p.application_text comming soon...
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
  max-width 740px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto

.application_title
  font-size 2rem
  letter-spacing 0.1rem
  font-weight 600
  margin-bottom 2rem
  background: linear-gradient(transparent 70%, THEME_BLUE 30%);

.application_text
  font-size 1.3rem
  line-height 2.5rem
</style>
