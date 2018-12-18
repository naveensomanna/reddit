import axios from "axios";

const state = {
  name: "",
  avatar: "",
  Loader: ""
};
const getters = {
  Name: state => {
    return state.name;
  },
  Avatar: state => {
    return state.avatar;
  },
  Loader: state => {
    return state.Loader;
  }
};
const mutations = {
  User: (state, payload) => {
    state.UserData = payload;
  },
  Name: (state, payload) => {
    state.name = payload;
  },
  Avatar: (state, payload) => {
    state.avatar = payload;
  },
  Loader: (state, payload) => {
    state.Loader = payload;
  }
};
const actions = {
  User: context => {
    let str = sessionStorage.getItem("token").replace(/"/g, "");
    context.commit("Loader", true);
    axios
      .get("https://oauth.reddit.com/api/v1/me", {
        headers: {
          Authorization: "Bearer " + str,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        context.commit("Loader", false);
        let UserData = JSON.parse(JSON.stringify(response.data));
        context.commit("Name", UserData.name);
        context.commit("Avatar", UserData.icon_img);
      })
      .catch(err => console.log(err));
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
