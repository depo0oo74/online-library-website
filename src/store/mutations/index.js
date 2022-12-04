export const authMutations = {
  login(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("personalData", payload.personalData);
    state.accessToken = payload.accessToken;
    state.personalData = payload.personalData;
  },
  logout(state) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("personalData");
    state.accessToken = null;
    state.personalData = {};
  },
};
