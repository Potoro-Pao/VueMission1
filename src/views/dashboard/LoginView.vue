<template>
  <BgC></BgC>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 mt-5 font-weight-normal text-center">Admin Log in</h1>
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
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BgC from '../../components/BgComponent.vue';

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
  components: {
    BgC,
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
