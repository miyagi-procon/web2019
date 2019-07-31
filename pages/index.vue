<template lang="pug">
  div
    top
    news2
    about
    detail
    sponsors
</template>

<script>
import Top from '~/pages/top/Top.vue'
import News2 from '~/pages/top/News2.vue'
import About from '~/pages/top/About.vue'
import Detail from '~/pages/top/Detail.vue'
import Sponsors from '~/pages/top/Sponsors.vue'

export default {
  components: {
    Top,
    About,
    Detail,
    Sponsors,
    News2
  }
}
</script>

<style lang="stylus" scoped></style>
