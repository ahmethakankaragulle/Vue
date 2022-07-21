const app = Vue.createApp({
  data() {
    return {
      fullName: "Ahmet Hakan",
    };
  },
  methods: {
    updateValue(name) {
      console.log(name.target.value);
      this.fullName = name.target.value;
    },
  },
}).mount("#app");
