import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Ahmet",
      lname: "Karagülle",
      age: 22,
      address: {},
      password: 45254525,
      tc: 11111111111,
    },
    theme: "dark",
    fullName: "Ahmet Hakan Karagülle",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Ahmet", "Mert", "Hakan", "Yaman", "Emir", "Mustafa"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Tv", type: "elektronik" },
      { id: 4, title: "Bilgisayar", type: "elektronik" },
      { id: 5, title: "Vantilatör", type: "elektronik" },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItem({ commit }, item) {
      console.log("item :>>", item);
      setTimeout(() => {
        //context.commit("newItem", item);
        commit("newItem", item);
      }, 2000);
    },
  },
  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type == "mobilya"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
