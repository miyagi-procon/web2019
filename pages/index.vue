<template lang="pug">
  div
    top
    about
    stories
</template>

<script>
import Top from '~/pages/Top.vue'
import About from '~/pages/About.vue'
import Stories from '~/pages/Stories.vue'

export default {
  components: {
    Top,
    About,
    Stories
  }
}
</script>

<style lang="stylus" scoped></style>
