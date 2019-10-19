import { getToken, setToken } from "@/utils/auth";
import { login, getInfo, logout } from "@/api/user";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password })
        .then(res => {
          const { data } = res;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(res => {
          const { data } = res;
          if (!data) {
            reject("Verification failed, please Login again.");
          }

          const { roles, name, avatar, introduction } = data;

          if (!roles || roles.length <= 0) {
            reject("getInfo: roles must be a non-null array!");
          }

          commit("SET_ROLSE", roles);
          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          commit("SET_INTRODUCTION", introduction);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          location.reload();
          // commit("SET_TOKEN", "");
          // commit("SET_ROLES", []);
          // removeToken();
          // resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  //todo
  changeRoles() {}
};

export default {
  state,
  mutations,
  actions
};
