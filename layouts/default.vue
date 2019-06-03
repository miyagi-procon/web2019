<template lang="pug">
  .container
    //- modal(v-if="showModal || opening" @close="showModal = false")
    div(class="navi navi-head" v-bind:class="{ 'navi_menu-open': $store.state.toggleMenu }")
      my-menu
    .main
      .main-content
        nuxt
        myFooter
</template>

<script>
// import Navibar from '~/components/Navibar.vue'
import MyMenu from '~/components/MyMenu.vue'
import MyFooter from '~/components/MyFooter.vue'
// import Modal from '~/components/Modal.vue'

export default {
  components: {
    // Navibar,
    MyMenu,
    // Modal,
    MyFooter
  },
  mounted: function() {
    // this.$store.state.opening = false
  },
  computed: {
    // opening() { return this.$store.state.opening },
    // showModal() { return this.$store.state.modal },
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  margin-left auto
  margin-right auto
  width 100%
  // @media screen and (max-width: 900px)
  //   width 100%
  // @media screen and (min-width: 900px)
  //   max-width 1080px

.main
  width 100%
  overflow hidden
  &-content
    position absolute
    width 100%

.navi
  z-index 1
.navi-head
  position fixed
  top 5%
  left 5%
.navi_menu-open
  z-index 100
</style>
