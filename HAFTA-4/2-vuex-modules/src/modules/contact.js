export default {
  namespaced: true,
  state: {
    contactName: "puresol",
    contactAddress: "USA",
  },

  mutation: {
    setItem(state, name) {
      state.contactName = name;
    },
  },

  getters: {
    _contactName: (state) => state.contactName,
  },
};
