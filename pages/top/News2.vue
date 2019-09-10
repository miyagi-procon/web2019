<template lang="pug">
  section#news
    .wrapper
      h1.news_title <font-awesome-icon icon="check" class="news_icon"/> 作品応募受付中！
      a.link_applicationForm(href='https://serve-it.jp/miyagiprocon/howto/' target='_blank')
        img(src='~assets/images/bt_oubo.png')
      h1.news_title <font-awesome-icon icon="check" class="news_icon"/> ワークショップ開催中！
    .news_container
      .news_wrapper
        .news_lists
          workshop-card2(
            v-for="(workshop, index) in imageWorkshops"
            :date="workshop.date"
            :day="workshop.day"
            :date2="workshop.date2"
            :day2="workshop.day2"
            :title="workshop.title"
            :subtitle="workshop.subtitle"
            :place="workshop.place"
            :organizer="workshop.organizer"
            :colorIndex="index"
            :image="workshop.image"
            :link="workshop.link"
          )
      a.news_link-workshop(href="/workshop") 開催中ワークショップをもっと見る >
</template>

<script>
import NewsItem from '~/components/NewsItem.vue'
import appearMixin from '~/mixins/appearMixin'
import WorkshopCard2 from '~/components/WorkshopCard2'
import workshopsJson from '~/assets/json/workshops.json'

export default {
  components: {
    NewsItem,
    WorkshopCard2
  },
  mixins: [appearMixin],
  data() {
    let imageWorkshops = []
    workshopsJson.workshops.forEach(workshop => {
      const today = new Date()
      const workshopDate = new Date(workshop.date)
      if (workshop.image && workshopDate >= today) imageWorkshops.push(workshop)
    })
    imageWorkshops = imageWorkshops.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return aDate - bDate
    })
    return { imageWorkshops }
  },
  computed: {
    showSection() {
      return this.isShown('news')
    }
  }
}
</script>

<style lang="stylus" scoped>
#news
  width 100%
  overflow hidden
  background-color THEME_BLUE

.unvisible
  opacity 0
  -webkit-transition all 1s
  -webkit-transform translate(-100px, 0)

.show
  opacity 1
  -webkit-transform translate(0px, 0)

.news_title
  color BASE_COLOR
  margin 3rem 0 2rem
  font-weight 400
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.news_icon
  color THEME_BLUE
  background-color BG_COLOR_T
  padding .5rem
  border-radius 1rem
  @media screen and (max-width: 740px)
    font-size 2rem
  @media screen and (min-width: 740px)
    font-size 3rem

.news_wrapper
  margin 0 auto
  padding 2rem
  width 80vw
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap

.news_lists
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap

.news_container
  display flex
  flex-direction column
  align-items center

.news_link-workshop
  width 65%
  padding 1rem
  background-color BASE_COLOR
  color BG_COLOR
  font-size 2rem
  margin-bottom 10vmin
  text-align center
  text-decoration none
</style>
