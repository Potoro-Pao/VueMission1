<template>
  <h2>登入Login</h2>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="loginCheck">
          <div class="form-floating mb-3">
            <input
              @keyup.enter="loginCheck"
              v-model="user.account"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              @keyup.enter="loginCheck"
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button
            @click="loginCheck"
            id="loginBtn"
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

const adminLoginAPI = `${VITE_URL}/admin/signin`;
export default {
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
            expired,
          )}`;

          this.$router.push('/admin/products');
          // axios.defaults.headers.common["Authorization"] = token;
          //   window.location.href = 'index.html';
        })
        .catch(() => {
          window.location = 'login.html';
        });
    },
  },
};
</script>
