import { authActions } from "../actions";
import { authMutations } from "../mutations";

export const AuthModule = {
  state() {
    return {
      accessToken: null,
      personalData: {},
    };
  },
  mutations: authMutations,
  actions: authActions,
};
