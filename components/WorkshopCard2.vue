<template lang="pug">
  .workshopCard_wrapper
    .workshopCard_image(:style="{backgroundImage: `url(${getImage(image)})` }")
      .workshopCard_dateWrapper
        .workshopCard_date
          p {{ dateString }}
          p [{{ day }}]
        .workshopCard_date(v-bind:class="{ 'workshopCard-hidden': !date2Exist }")
          p {{ date2String }}
          p [{{ day2 }}]
    .workshopCard_content
      p.workshopCard_heading {{ title }}
      p.workshopCard_subtext1 <span v-html="subtitle"></span>
      .workshopCard_info
        .workshopCard_subtext2
          p <font-awesome-icon icon="map-marker-alt" style="font-size: 1rem"/> {{ place }}
          p <font-awesome-icon icon="building" style="font-size: 1rem"/> {{ organizer }}
        a.workshopCard_link(target='_blank' v-bind:href="link" v-bind:class="{ 'workshopCard-hidden': !linkExist }") 詳細 >
        p.workshopCard_soon(v-bind:class="{ 'workshopCard-hidden': linkExist }") 詳細は<br/>もうすぐ！
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
    'link',
    'image'
  ],
  data() {
    const date = new Date(this.date)
    const date2 = this.date2 ? new Date(this.date2) : null
    return {
      date2Exist: this.date2 && this.day2,
      linkExist: this.link,
      dateString: `${date.getMonth() + 1}/${date.getDate()}`,
      date2String: date2 ? `${date2.getMonth() + 1}/${date2.getDate()}` : ''
    }
  },
  methods: {
    getImage: function(path) {
      return path
        ? require(`@/assets/images/${path}`)
        : require('@/assets/images/0807.jpg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.workshopCard_wrapper
  background-color THEME_GRAY2
  display flex
  flex-direction column
  margin 1rem
  @media screen and (max-width: 740px)
    width 250px
    height 300px
  @media screen and (min-width: 740px)
    width 450px
    height 500px

.workshopCard_image
  height 50%
  object-fit cover
  background-size cover
  display flex
  justify-content flex-start
  align-items flex-end

.workshopCard_dateWrapper
  display flex
  flex-direction row

.workshopCard_date
  background-color BASE_COLOR
  color BG_COLOR
  display flex
  align-items center
  justify-content center
  flex-direction column
  @media screen and (max-width: 740px)
    width 50px
    height 40px
  @media screen and (min-width: 740px)
    font-size 1.3rem
    width 100px
    height 80px

.workshopCard-hidden
  display none

.workshopCard_content
  height 50%
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
  width 80%
  display flex
  flex-direction column
  margin 1rem 0
  // justify-content flex-end
  // align-items flex-end
  // text-align right
  // float right

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

.workshopCard_info
  width 100%
  display flex
</style>
