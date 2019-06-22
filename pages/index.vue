<template lang="pug">
  div
    top
    about
    schedule
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import About from '~/pages/top/About.vue'
import Schedule from '~/pages/top/Schedule.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Schedule,
    Sponsors
  }
}
</script>

<style lang="stylus" scoped></style>
