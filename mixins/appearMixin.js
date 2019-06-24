export default {
  methods: {
    isShown: function(id, togglePos = 300) {
      if (process.browser) {
        const [topPos] = this.$window.getElementPos(id, this.centerOfWindow())
        return topPos - togglePos <= this.$window.scrollY && topPos !== 0
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height / 2 : 0
    }
  }
}
