<template lang="pug">
  .container
    modal(v-if="showModal || opening" @close="showModal = false")
    .main
      .main-content
        nuxt
        myFooter
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
import MyFooter from '~/components/MyFooter.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Hamburger,
    Modal,
    MyFooter
  },
  mounted: function() {
    this.$store.state.opening = false
  },
  computed: {
    opening() {
      return this.$store.state.opening
    },
    showModal() {
      return this.$store.state.modal
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  margin-left auto
  margin-right auto
  width 100%

.main
  width 100%
  overflow hidden
  &-content
    position absolute
    width 100%
</style>
