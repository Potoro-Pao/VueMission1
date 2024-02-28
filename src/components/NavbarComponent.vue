<template>
  <div class="container-fluid d-flex flex-column" style="z-index: 1">
    <nav
      class="navbar navbar-expand-lg"
      style="background-color: #504152; padding: 0.5rem 1rem"
    >
      <router-link
        class="navbar-brand p-2"
        style="color: #f4f4f4; font-size: 24px"
        to="/"
        >Bookstore</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item me-4">
            <router-link
              class="nav-link active"
              style="color: #eae0d5; font-size: 18px"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item me-4">
            <router-link
              class="nav-link"
              style="color: #eae0d5; font-size: 18px"
              to="/products"
              >Products</router-link
            >
          </li>
          <li class="nav-item me-4">
            <router-link
              class="nav-link"
              style="color: #eae0d5; font-size: 18px"
              to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="btn pe-5" to="/cart">
              <div class="position-relative">
                <i
                  style="color: #eae0d5; font-size: 24px"
                  class="bi bi-cart-fill"
                ></i>
                <span
                  class="position-absolute top-0
                   start-100 translate-middle badge rounded-pill bg-danger"
                  style="transform: translate(-50%, -50%)"
                >
                  {{ this.cart?.length }}
                  <!-- 使用pinia的值 -->
                  <span class="visually-hidden">unread messages</span>
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    // getCart() {
    //   const api = `${VITE_URL}/api/${VITE_API}/cart`;
    //   axios.get(api).then((res) => {
    //     this.cart = res.data.data;
    //   });
    // }, 原來在購物車寫好的API可以把她想成一種公用項的tools放到piniastore裡面
  },
  mounted() {
    this.getCart();
  },
};
</script>
