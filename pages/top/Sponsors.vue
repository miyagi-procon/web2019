<template lang="pug">
  section#sponsors
    .wrapper
      .sponsors_wrapper
        p.text.sponsors_text <span class='text-emphasis'>【協賛】</span>
        .sponsors_bottom.sponsors_wrapper-gold
          a.sponsors_item-gold(href="https://www.sakura.ad.jp/" target="_blank")
            img(src="~assets/images/sakura.jpg")
          a.sponsors_item-gold(href="http://www.umezawa.co.jp/" target="_blank")
            img(src="~assets/images/umezawa.png")
          a.sponsors_item-gold(href="https://www.fujitsu.com/jp/" target="_blank")
            img(src="~assets/images/fujitsu.jpg")
          a.sponsors_item-gold(href="https://www.treasuredata.co.jp/" target="_blank")
            img(src="~assets/images/tresure.jpg")
          a.sponsors_item-gold(href="http://it-p.jp/" target="_blank")
            img(src="~assets/images/itp.jpg")
          .sponsors_wrapper-bronze
            p.sponsors_bronze 株式会社交宣
            p.sponsors_bronze 株式会社日立製作所 東北支社
            p.sponsors_bronze 錦ケ丘ヒルサイドモール

      .sponsors_wrapper
        p.text.sponsors_text <span class='text-emphasis'>【後援】</span>
          .sponsors_wrapper-silver.sponsors_bottom
            p.sponsors_item-silver 宮城県
            p.sponsors_item-silver 仙台市
            p.sponsors_item-silver 宮城県教育委員会
            p.sponsors_item-silver 仙台市教育委員会
            p.sponsors_item-silver 宮城県高度情報化推進協議会
            p.sponsors_item-silver 山元町教育委員会
        p.text.sponsors_text.sponsors_bottom <span class='text-emphasis'>【主催】</span>
          <br/>みやぎプロコン実行委員会
        p.text.sponsors_text <span class='text-emphasis'>【共催】</span>
          .sponsors_wrapper-silver.sponsors_bottom
            a.sponsors_item-silver(href="https://www.sendai-nct.ac.jp/" target="_blank")
              img(src="~assets/images/sendai-kosen.jpg")
            a.sponsors_item-silver(href="http://sendai.pcn.club/" target="_blank")
              img(src="~assets/images/pcn.jpg")
        p.text.sponsors_text <span class='text-emphasis'>【協力】</span>
          .sponsors_wrapper-silver.sponsors_bottom
            p.sponsors_item-silver 一般社団法人PCN
            p.sponsors_item-silver
              a(href="http://itnav.jp/" target="_blank") 一般社団法人イトナブ石巻
            p.sponsors_item-silver NTTドコモ
            p.sponsors_item-silver
             a(href="https://corp.diddyworks.co.jp/" target="_brank") 株式会社diddyworks
        p.text.sponsors_text <span class='text-emphasis'>【特別協力】</span>
          .sponsors_wrapper-silver.sponsors_bottom
            a.sponsors_item-silver(href="https://thinkshake.net/" target="_blank")
              img(src="~assets/images/thinkShake.png")
            a.sponsors_item-silver(href="https://www.folkgw.com/" target="_blank")
              img(src="~assets/images/folk-glocal-works.png")
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
  padding 7vmin 0 0
  @media screen and (max-width: 740px)
    width 80vw
  @media screen and (min-width: 740px)
    width 70vw
  &-gold
    width 100%
    display flex
    flex-direction column
    align-items center
    // justify-content center
  &-silver
    display flex
    flex-direction row
    flex-wrap wrap
    align-items flex-start
  &-bronze
    margin-top 3rem
    width 100%
    display flex
    flex-direction row
    flex-wrap wrap
    align-items center

.sponsors_text
  font-size 1.4rem
  text-align center
  margin-bottom 2rem

.sponsors_bottom
  margin-bottom 10vmin

.sponsors_item-gold
  text-align center
  width 60%
  max-width 500px
  >img
    text-align center
    margin-bottom 2vmin

.sponsors_item-silver
  text-align center
  width 50%
  margin-bottom 1rem
  font-size 1.2rem
  >img
    text-align center
    margin-bottom 2vmin

.sponsors_bronze
  width 33%
  text-align center
  margin-bottom 2vmin

.sponsors_kousen
  text-align center
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin-bottom 2vmin

.sponsors_pcn
  text-align center
  @media screen and (max-width: 740px)
    width 80%
  @media screen and (min-width: 740px)
    width 60%
  margin-bottom 2vmin

.sponsors_thinkshake
  text-align center
  @media screen and (max-width: 740px)
    width 30%
  @media screen and (min-width: 740px)
    width 50%
  margin-bottom 2vmin

.sponsors_folk
  text-align center
  @media screen and (max-width: 740px)
    width 40%
  @media screen and (min-width: 740px)
    width 20%
  margin-bottom 2vmin
</style>
