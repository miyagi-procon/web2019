<template lang="pug">
  footer#footer
    p.footer_head みやぎプロコン実行委員会
    .inquiry
      p [ お問合せ ]
      p 事務局：<a href="mailto:support@miyagi-procon.jp" class="inquiry_mail">support@miyagi-procon.jp</a>
      p.contactForm <a href="https://forms.gle/ph6SG63vf1PxzzWb8" class="contactForm_text" target="_blank">お問合せフォームはこちら</a>
    p.copyright Copyright(c) {{ year }} Miyagi Procon. All Rights Reserved.
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() }
  }
}
</script>

<style lang="stylus" scoped>
#footer
  background-color BASE_COLOR
  color BG_COLOR
  width 100%
  display flex
  justify-content center
  text-align center
  flex-direction column
  align-items center
  // height 30px

.footer_head
  font-size 1.2rem

.inquiry
  width 100%
  display flex
  justify-content center
  text-align center
  flex-direction column
  align-items center
  margin .5rem auto 1rem
  height 5rem
  &_mail
    text-decoration none
    color BG_COLOR

.copyright
  font-size 0.7rem
  width 85%

.contactForm
  width 13rem
  background-color BG_COLOR
  border-radius 2px
  margin-top .5rem
  &_text
    text-decoration none
    color BASE_COLOR
    font-size 0.8rem
</style>
