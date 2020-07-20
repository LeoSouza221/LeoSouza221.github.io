export default {
  methods: {
    verifyMobile() {
      return this.$vuetify.breakpoint.width > 800;
    }
  },
}