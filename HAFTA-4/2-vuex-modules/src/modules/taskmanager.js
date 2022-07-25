export default {
  namespaced: true,
  state: {
    itemList: [],
    userList: [],
  },
  mutation: {
    setItem(state, item) {
      state.itemList.push(item);
    },
  },

  getters: {
    _itemList: (state) => state.itemList,
  },
};
