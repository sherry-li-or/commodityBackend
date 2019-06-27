/* const localStoragePlugin = store => {
  store.subscribe((mutation, { user }) => {
    // 當執行 setUserData 時才執行以下程式碼
    if (mutation.type === 'setUserData') {
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  })
}
const store = new Vuex.Store({
  state: {
    user: {
      account: '',
      password: '',
      isLogin: false
    }
  },
  mutations: {
    setUserData (state, { userData }) {
      state.user.account = userData.account
      state.user.password = userData.password
      state.user.isLogin = true
    }
  },
  plugins: [localStoragePlugin]
}) */
