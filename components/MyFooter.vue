<template lang="pug">
  footer#footer
    p Copyright(c) {{ year }} Miyagi Procon. All Rights Reserved.
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() }
  }
}
</script>

<style lang="stylus" scoped>
#footer
  background-color BASE_COLOR
  color BG_COLOR
  width 100%
  display flex
  justify-content center
  text-align center
  flex-direction column
  align-items center
  height 30px

p
  font-size 0.7rem
  width 85%
</style>
