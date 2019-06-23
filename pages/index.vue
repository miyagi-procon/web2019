<template lang="pug">
  div
    top
    news
    about
    schedule
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import News from '~/pages/top/News.vue'
import About from '~/pages/top/About.vue'
import Schedule from '~/pages/top/Schedule.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Schedule,
    Sponsors,
    News
  }
}
</script>

<style lang="stylus" scoped></style>
