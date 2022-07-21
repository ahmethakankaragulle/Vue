const app = Vue.createApp({
  data() {
    return {
      redBg: false,
      showBorder: false,
      boxClass: "border",
      bgColor: "cyan",
    };
  },

  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBg };
    },
  },
});
app.mount("#app");
