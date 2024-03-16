<template>
  <NavC basePath="/admin"></NavC>
  <BgC></BgC>
  <div
    class="container"
    style="
      display: flex;
      flex-direction: column;
      min-height: calc(100vh);
    "
  >
    <RouterView></RouterView>
  </div>

  <footer-c class="mt-6 w-100"></footer-c>
</template>

<script>
import axios from 'axios';
import BgC from '../../components/BgComponent.vue';
import FooterC from '../../components/FooterComponent.vue';
import NavC from '../../components/NavbarComponent.vue';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    checkAdmin() {
      const url = `${VITE_URL}/api/user/check`;

      axios
        .post(url)
        .then(() => {})
        .catch(() => {
          this.$router.push('/login');
        });
    },
  },

  components: {
    BgC,
    FooterC,
    NavC,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
};
</script>
