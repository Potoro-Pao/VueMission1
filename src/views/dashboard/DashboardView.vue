<template>
  這是後台
  <nav>
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/admin/order">訂單列表</RouterLink>|
    <RouterLink to="/">回到前台</RouterLink>|
  </nav>
  <RouterView></RouterView>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    checkAdmin() {
      const url = `${VITE_URL}/api/user/check`;
      axios
        .post(url)
        .then(() => {
          console.log('驗證成功！');
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
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
