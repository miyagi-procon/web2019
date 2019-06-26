<template lang="pug">
  section#sponsors
    .wrapper
      .sponsors_wrapper
        p.text.sponsors_text <span class='text-emphasis'>【協賛】</span>
        .sponsors_image.sponsors_bottom
          img.sponsors_image_item(src="~assets/images/sakura.jpg")
          img.sponsors_image_item(src="~assets/images/itp.jpg")
          img.sponsors_image_item(src="~assets/images/umezawa.gif")

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【主催】</span>
          <br/>みやぎプロコン実行委員会

        p.text.sponsors_text <span class='text-emphasis'>【共催】</span>
          .sponsors_image.sponsors_bottom
            img.sponsors_image_item2(src="~assets/images/pcn.jpg")
            img.sponsors_image_item(src="~assets/images/sendai-kosen.jpg")

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【後援】</span>
          <br/>宮城県
          <br/>仙台市
          <br/>宮城県教育委員会
          <br/>仙台市教育委員会
          <br/>宮城県高度情報化推進協議会

        p.text.sponsors_text <span class='text-emphasis'>【特別協力】</span>
          .sponsors_image.sponsors_bottom
            img.sponsors_image_item3(src="~assets/images/thinkShake.png")
            img.sponsors_image_item4(src="~assets/images/folk-glocal-works.png")

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【協力】</span>
          <br/>一般社団法人PCN
          <br/>一般社団法人イトナブ石巻
          <br/>NTTドコモ
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#sponsors
  width 100%
  background-color THEME_GRAY

.sponsors_wrapper
  background-color BG_COLOR
  height 90%
  margin 10vmin 0
  padding 10vmin 0 0
  @media screen and (max-width: 740px)
    width 80vw
  @media screen and (min-width: 740px)
    width 70vw

.sponsors_text
  font-size 1.4rem
  text-align center

.sponsors_bottom
  margin-bottom 10vmin

.sponsors_image
  display flex
  flex-direction column
  align-items center
.sponsors_image_item
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin-bottom 5vmin

.sponsors_image_item2
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin 5vmin 0

.sponsors_image_item3
  @media screen and (max-width: 740px)
    width 30%
  @media screen and (min-width: 740px)
    width 20%
  margin 5vmin 0 8vmin

.sponsors_image_item4
  @media screen and (max-width: 740px)
    width 40%
  @media screen and (min-width: 740px)
    width 30%
  margin-bottom 5vmin
</style>
