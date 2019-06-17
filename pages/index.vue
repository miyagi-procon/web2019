<template lang="pug">
  div
    top
    about
    //- application
    schedule
    workshop
    stories
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import About from '~/pages/top/About.vue'
// import Application from '~/pages/top/Application.vue'
import Schedule from '~/pages/top/Schedule.vue'
import Stories from '~/pages/top/Stories.vue'
import Workshop from '~/pages/top/Workshop.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Stories,
    // Application,
    Schedule,
    Workshop,
    Sponsors
  }
}
</script>

<style lang="stylus" scoped></style>
