<template lang="pug">
  section#nominated
    .menubar_wrapper
      menu-bar
    .nominated_container
      h1.nominated_title <font-awesome-icon icon="check" class="nominated_icon"/> ノミネート作品
      .nominated_wrapper
        p.nominated_text 電子工作部門
        .nominated_lists
          nominated-card(
            v-for="(nominated, index) in electronics"
            :date="nominated.date"
            :day="nominated.day"
            :date2="nominated.date2"
            :day2="nominated.day2"
            :title="nominated.title"
            :subtitle="nominated.subtitle"
            :place="nominated.place"
            :organizer="nominated.organizer"
            :colorIndex="index"
            :image="nominated.image"
            :link="nominated.link"
          )
        p.nominated_text ゲーム・ソフトウェア部門
        .nominated_lists
          nominated-card(
            v-for="(nominated, index) in software"
            :date="nominated.date"
            :day="nominated.day"
            :date2="nominated.date2"
            :day2="nominated.day2"
            :title="nominated.title"
            :subtitle="nominated.subtitle"
            :place="nominated.place"
            :organizer="nominated.organizer"
            :colorIndex="index"
            :link="nominated.link"
          )
</template>

<script>
import MenuBar from '~/components/MenuBar'
import NominatedCard from '~/components/NominatedCard'
import nominatedJson from '~/assets/json/nominated.json'

export default {
  components: {
    MenuBar,
    NominatedCard
  },
  data() {
    let electronics = []
    let software = []
    nominatedJson.nominated.forEach(item => {
      if (item.course === 'electronics') {
        electronics.push(item)
      } else if (item.course === 'software') {
        software.push(item)
      }
    })
    return { electronics, software }
  }
}
</script>

<style lang="stylus" scoped>
#nominated
  width 100%
  background-color THEME_ORANGE

.nominated_container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 12vmin

.nominated_wrapper
  background-color BG_COLOR
  margin 0 auto
  padding 2rem
  width 80vw
  margin-bottom 10vmin
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap

.nominated_title
  margin 3rem
  font-weight 500
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.nominated_icon
  color THEME_ORANGE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.nominated_text
  width 100%
  text-align center
  font-size 1.3rem
  line-height 2.5rem
  font-weight 700
  text-decoration underline dotted THEME_ORANGE

.nominated_lists
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap
</style>
