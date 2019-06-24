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

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【共催】</span>
          <br/>仙台高等専門学校
          <br/>PCN仙台

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【後援】</span>
          <br/>宮城県
          <br/>仙台市
          <br/>宮城県教育委員会
          <br/>仙台市教育委員会
          <br/>宮城県高度情報化推進協議会

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
</style>
