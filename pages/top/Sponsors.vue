<template lang="pug">
  section#sponsors
    .wrapper
      .sponsors_wrapper
        p.text.sponsors_text <span class='text-emphasis'>【協賛】</span>
        .sponsors_image.sponsors_bottom
          a.sponsors_image_link5(href="https://www.sakura.ad.jp/" target="_blank")
            img(src="~assets/images/sakura.jpg")
          a.sponsors_image_link(href="http://it-p.jp/" target="_blank")
            img(src="~assets/images/itp.jpg")
          a.sponsors_image_link(href="http://www.umezawa.co.jp/" target="_blank")
            img(src="~assets/images/umezawa.gif")

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【主催】</span>
          <br/>みやぎプロコン実行委員会

        p.text.sponsors_text <span class='text-emphasis'>【共催】</span>
          .sponsors_image.sponsors_bottom
            a.sponsors_image_link2(href="http://sendai.pcn.club/" target="_blank")
              img(src="~assets/images/pcn.jpg")
            a.sponsors_image_link(href="https://www.sendai-nct.ac.jp/" target="_blank")
              img(src="~assets/images/sendai-kosen.jpg")

        p.text.sponsors_text <span class='text-emphasis'>【特別協力】</span>
          .sponsors_image.sponsors_bottom
            a.sponsors_image_link3(href="https://thinkshake.net/" target="_blank")
              img(src="~assets/images/thinkShake.png")
            a.sponsors_image_link4(href="https://www.folkgw.com/" target="_blank")
              img(src="~assets/images/folk-glocal-works.png")

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【協力】</span>
          <br/>一般社団法人PCN
          <br/><a href="http://itnav.jp/" target="_blank">一般社団法人イトナブ石巻</a>
          <br/>NTTドコモ

        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【後援】</span>
          <br/>宮城県
          <br/>仙台市
          <br/>宮城県教育委員会
          <br/>仙台市教育委員会
          <br/>宮城県高度情報化推進協議会
          <br/>山元町教育委員会
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

.sponsors_image_link
  text-align center
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin-bottom 7vmin

.sponsors_image_link2
  text-align center
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin 5vmin 0

.sponsors_image_link3
  text-align center
  @media screen and (max-width: 740px)
    width 35%
  @media screen and (min-width: 740px)
    width 25%
  margin 5vmin 0 8vmin

.sponsors_image_link4
  text-align center
  @media screen and (max-width: 740px)
    width 40%
  @media screen and (min-width: 740px)
    width 30%
  margin-bottom 5vmin

.sponsors_image_link5
  text-align center
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin-bottom 2vmin
</style>
