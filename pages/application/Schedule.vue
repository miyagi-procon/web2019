<template lang="pug">
  section#schedule
    .wrapper.schedule_wrapper(class="unvisible" v-bind:class="{ show: showSection }")
      h1.heading スケジュール
      img.schedule_image(src="~assets/images/schedule.png")
</template>

<script>
import appearMixin from '~/mixins/appearMixin'

export default {
  mixins: [appearMixin],
  computed: {
    showSection() {
      return this.isShown('schedule')
    }
  }
}
</script>

<style lang="stylus" scoped>
#schedule
  width 100%
  margin-bottom 10vmin
  overflow hidden

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.schedule_wrapper
  width 100%

.schedule_image
  margin 5vmin 0 3vmin
  width 100%
</style>
