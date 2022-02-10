export default {
  login(state) {
    state.LoggedIn = true;
  },
  logout(state) {
      state.LoggedIn = false;
  }
};
