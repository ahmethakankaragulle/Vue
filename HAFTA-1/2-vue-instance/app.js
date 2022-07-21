const app = Vue.createApp({
  data() {
    return {
      title: "AHMET HAKAN KARAGÜLLE",
      content: "Fırat Üniversitesi Yazılım Mühendisliği 4.sınıf öğrencisi",
      eduflow: {
        target: "_blank",
        url: "https://kadirbulbul.com",
        alt: "kadirbulbul.com sitesi",
        title: "Kadir Bülbülün sitesine git",
      },
      coords: {
        x: 0,
        y: 0,
      },
    };
  },

  methods: {
    changeTitle(ptitle) {
      this.title = ptitle;
    },

    updateCoords(message, event) {
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
