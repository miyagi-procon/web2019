<template lang="pug">
  div
    top
    about
    schedule
    stories
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import About from '~/pages/top/About.vue'
import Schedule from '~/pages/top/Schedule.vue'
import Stories from '~/pages/top/Stories.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Stories,
    Schedule,
    Sponsors
  }
}
</script>

<style lang="stylus" scoped></style>
