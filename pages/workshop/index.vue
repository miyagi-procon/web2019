<template lang="pug">
  section#workshop
    .menubar_wrapper
      menu-bar
    .workshop_container
      h1.workshop_title <font-awesome-icon icon="check" class="workshop_icon"/> ワークショップ
      .workshop_wrapper
        p.workshop_text 夏休み期間中はプログラミング体験イベントが盛りだくさん！
          <br/>ワークショップに参加して、みやぎプロコンに応募しよう！
        .workshop_lists
          workshop-card(
            v-for="(workshop, index) in futureWorkshops"
            :date="workshop.date"
            :day="workshop.day"
            :date2="workshop.date2"
            :day2="workshop.day2"
            :title="workshop.title"
            :subtitle="workshop.subtitle"
            :place="workshop.place"
            :organizer="workshop.organizer"
            :colorIndex="index"
            :link="workshop.link"
          )
        p.workshop_text 過去に開催されたワークショップ
        .workshop_lists
          workshop-card(
            v-for="(workshop, index) in pastWorkshops"
            :date="workshop.date"
            :day="workshop.day"
            :date2="workshop.date2"
            :day2="workshop.day2"
            :title="workshop.title"
            :subtitle="workshop.subtitle"
            :place="workshop.place"
            :organizer="workshop.organizer"
            :colorIndex="index"
            :link="workshop.link"
          )
</template>

<script>
import MenuBar from '~/components/MenuBar'
import WorkshopCard from '~/components/WorkshopCard'
import workshopsJson from '~/assets/json/workshops.json'

export default {
  components: {
    MenuBar,
    WorkshopCard
  },
  data() {
    let pastWorkshops = []
    let futureWorkshops = []
    workshopsJson.workshops.forEach(workshop => {
      const today = new Date()
      const workshopDate = new Date(workshop.date)
      if (workshopDate < today) {
        pastWorkshops.push(workshop)
      } else {
        futureWorkshops.push(workshop)
      }
    })
    futureWorkshops = futureWorkshops.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return aDate - bDate
    })
    pastWorkshops = pastWorkshops.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return aDate - bDate
    })
    return { futureWorkshops, pastWorkshops }
  }
}
</script>

<style lang="stylus" scoped>
#workshop
  width 100%
  background-color THEME_ORANGE

.workshop_container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 12vmin

.workshop_wrapper
  background-color BG_COLOR
  margin 0 auto
  padding 2rem
  width 80vw
  margin-bottom 10vmin
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap

.workshop_title
  margin 3rem
  font-weight 500
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.workshop_icon
  color THEME_ORANGE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.workshop_text
  width 100%
  text-align center
  font-size 1.3rem
  line-height 2.5rem
  font-weight 700
  text-decoration underline dotted THEME_ORANGE

.workshop_lists
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap
</style>
