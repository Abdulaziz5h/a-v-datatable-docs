import api from "@api";
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    login(commit, payload) {
      api.post("User/Login", payload, (data) => {
        console.log(data);
      });
    },
  },
};
