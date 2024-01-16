import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
const url = "https://ec-course-api.hexschool.io/v2";
const path = "potoro";
const productAPI = `${url}/api/${path}/products/all`;
const adminLoginAPI = `${url}/admin/signin`;
const app = createApp({
  data() {
    return {
      user: {
        account: null,
        password: null,
      },
    };
  },
  methods: {
    loginCheck() {
      const user = {
        username: this.user.account,
        password: this.user.password,
      };
      axios
        .post(adminLoginAPI, user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexVueToken=${token}; expires=${new Date(
            expired
          )}`;
          // axios.defaults.headers.common["Authorization"] = token;
          window.location.href = "index.html";
          alert("恭喜你成功登入了");
        })
        .catch((err) => {
          alert("登入失敗!");
          window.location = "login.html";
        });
    },
  },
});
app.mount("#app");
