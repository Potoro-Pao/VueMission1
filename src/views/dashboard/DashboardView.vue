<template>
    <NavC basePath="/admin"></NavC>
  <BgC></BgC>
  <RouterView></RouterView>

  <FooterC
    class="mt-6 w-100"
    style="bottom: 0; width: 100%"
  ></FooterC>
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
