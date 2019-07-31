<template lang="pug">
  .workshopCard_wrapper(v-bind:style="{ backgroundColor: activeColor }")
    .workshopCard_dateWrapper
      .workshopCard_date
        p {{ dateString }}
        p [{{ day }}]
      .workshopCard_date(v-bind:class="{ 'workshopCard-hidden': !date2Exist }")
        p {{ date2String }}
        p [{{ day2 }}]
      a.workshopCard_link(target='_blank' v-bind:href="link" v-bind:class="{ 'workshopCard-hidden': !linkExist }") 詳細 >
      p.workshopCard_soon(v-bind:class="{ 'workshopCard-hidden': linkExist }") 詳細は<br/>もうすぐ！
    .workshopCard_content
      p.workshopCard_heading {{ title }}
      p.workshopCard_subtext1 <span v-html="subtitle"></span>
      .workshopCard_subtext2
        p <font-awesome-icon icon="map-marker-alt" style="font-size: 1rem"/> {{ place }}
        p <font-awesome-icon icon="building" style="font-size: 1rem"/> {{ organizer }}
</template>

<script>
export default {
  props: [
    'date',
    'day',
    'date2',
    'day2',
    'title',
    'subtitle',
    'place',
    'organizer',
    'colorIndex',
    'link'
  ],
  data() {
    let activeColor
    switch (this.colorIndex % 3) {
      case 1:
        activeColor = 'rgb(181, 181, 182)'
        break
      case 2:
        activeColor = 'rgb(231, 119, 34)'
        break
      case 0:
      default:
        activeColor = 'rgb(116, 181, 228)'
        break
    }
    const date = new Date(this.date)
    const date2 = this.date2 ? new Date(this.date2) : null
    return {
      activeColor,
      date2Exist: this.date2 && this.day2,
      linkExist: this.link,
      dateString: `${date.getMonth() + 1}/${date.getDate()}`,
      date2String: date2 ? `${date2.getMonth() + 1}/${date2.getDate()}` : ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.workshopCard_wrapper
  background-color THEME_BLUE
  display flex
  margin 1rem
  @media screen and (max-width: 740px)
    width 250px
    height 150px
  @media screen and (min-width: 740px)
    width 450px
    height 250px

.workshopCard_dateWrapper
  display flex
  flex-direction column

.workshopCard_date
  background-color BASE_COLOR
  color BG_COLOR
  display flex
  align-items center
  justify-content center
  flex-direction column
  @media screen and (max-width: 740px)
    width 50px
    height 50px
  @media screen and (min-width: 740px)
    font-size 1.3rem
    width 100px
    height 100px

.workshopCard-hidden
  display none

.workshopCard_content
  display flex
  align-items flex-start
  justify-content center
  flex-direction column
  padding 1rem

.workshopCard_heading
  font-weight 600
  position relative
  margin-bottom .5rem
  @media screen and (max-width: 740px)
    font-size 1.2rem
  @media screen and (min-width: 740px)
    font-size 1.5rem

.workshopCard_subtext1
  margin-bottom 1rem
  @media screen and (max-width: 740px)
    font-size 1rem
  @media screen and (min-width: 740px)
    font-size 1.2rem

.workshopCard_subtext2
  font-weight 700
  font-size 1rem
  width 100%
  display flex
  flex-direction column
  justify-content flex-end
  align-items flex-end
  text-align right
  float right

.workshopCard_link
  background-color BG_COLOR
  font-size 1rem
  font-weight 600
  padding 1rem
  text-decoration none
  border-radius 1rem
  border-width .1rem
  border-style solid
  border-color BASE_COLOR
  width 6rem
  height 4rem
  text-align center
  line-height 2rem
  margin 1rem .2rem
  color BASE_COLOR
  &:visited
    color BASE_COLOR

.workshopCard_soon
  color BG_COLOR
  text-align center
  margin 1rem 0
</style>
