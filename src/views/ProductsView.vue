<template>
  <loading v-model:active="isLoading"></loading>
  <div class="row">
    <div class="col" style="display: flex; justify-content: center">
      <div>
        <h1>你現在在前台產品頁面</h1>
      </div>
    </div>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            style="
              height: 100px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
        </td>
        <td>{{ product.title }}</td>
        <!-- <td>
          <div class="h5" v-if="product.origin_price === product.price">
            {{ product.price }} 元
          </div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td> -->
        <td>
          <div class="btn-group btn-group-sm">
            <button
              @click="openModal(product)"
              type="button"
              class="btn btn-outline-secondary"
            >
              <i class="fas fa-spinner fa-pulse"></i>
              查看更多
            </button>
            <!-- <button
              :disabled="product.id === status.addToCartLoading"
              @click="addToCart(product.id, 1)"
              type="button"
              class="btn btn-outline-danger"
            >
              <i
                v-if="product.id === status.addToCartLoading"
                class="fas fa-spinner fa-pulse"
              ></i>
              加到購物車
            </button> -->
            <button class="btn btn-outline-danger">加到購物車</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Loading from 'vue-loading-overlay';
import axios from 'axios';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    getProduct() {
      const api = `${VITE_URL}/api/${VITE_API}/products/all`;

      axios.get(api).then((res) => {
        this.products = res.data.products;
        this.pages = res.data.pagination;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
