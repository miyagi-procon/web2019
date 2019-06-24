<template lang="pug">
  div
    top
    news
    about
    detail
    schedule
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import News from '~/pages/top/News.vue'
import About from '~/pages/top/About.vue'
import Detail from '~/pages/top/Detail.vue'
import Schedule from '~/pages/top/Schedule.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Detail,
    Schedule,
    Sponsors,
    News
  }
}
</script>

<style lang="stylus" scoped></style>
