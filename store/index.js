export const state = () => ({
  isLoggedIn: false,
});

export const actions = {
  async signIn(state, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          payload.email === "admin@grid.com" &&
          payload.password === "admin"
        ) {
          resolve();
        } else {
          reject("Invalid email or password");
        }
      }, 1000);
    })
      .then(() => {
        state.commit("setLoggedIn", true);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  setLoggedIn(state, payload) {
    state.isLoggedIn = payload;
  },
  logOut(state) {
    state.isLoggedIn = false;
  },
};

export const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};
