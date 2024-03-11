<template>
  <loading v-model:active="isLoading"></loading>
  <div class="container mt-5">
    <div class="row">
      <!-- 分類菜單 -->
      <div class="col-md-3">
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="card-body py-0">
            <h2>Categories</h2>
            <ul class="list-unstyled">
              <li>
                <router-link class="py-2 d-block text-muted" :to="`/products`"
                  >All</router-link
                >
              </li>
              <li v-for="item in categories" :key="item">
                <router-link
                  class="py-2 d-block text-muted"
                  :to="`/products?categories=${item}`"
                  >{{ item }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 產品卡片 -->
      <div class="col-md-8">
        <div class="row">
          <div
            class="col-md-4 d-flex align-items-stretch"
            v-for="product in products"
            :key="product.id"
          >
            <div class="card mb-3 w-100 d-flex flex-column">
              <!-- 加入了flex布局 -->
              <img
                style="object-fit: cover"
                :src="product.imageUrl"
                class="card-img-top"
                alt="產品圖片"
              />
              <div class="card-body d-flex flex-column">
                <!-- 调整了这里 -->
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text flex-grow-1">{{ product.price }} 元</p>
                <!-- 使用flex-grow -->
                <div class="mt-2 mb-2">
                  <!-- 确保按钮在底部 -->
                  <router-link
                    :to="`/product/${product.id}`"
                    class="btn btn-outline-secondary w-50 gx-3"
                    >View More</router-link
                  >
                  <a
                    @click.prevent="addToCart(product.id)"
                    href="#"
                    class="btn btn-outline-info w-50 gx-3"
                    >Add to Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <pagC :pages="pages" :getProduct="getProduct" basePath="#/" />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import { mapActions } from 'pinia';
import cartStore from '../stores/cartStore';
import pagC from '../components/PaginationComponent.vue';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
  components: {
    Loading,
    pagC,
  },
  data() {
    return {
      isLoading: true,
      products: [],
      categories: [
        'Comic',
        'History',
        'Young Adult',
        'Drama',
        'novel',
        'Sci-Fi',
        'Murder',
        'TextBook',
      ],
      pages: {},
    };
  },
  watch: {
    '$route.query': {
      handler() {
        this.getProduct();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),

    getProduct(page = 1) {
      const { categories = '' } = this.$route.query;
      const api = `${VITE_URL}/api/${VITE_API}/products?page=${page}&category=${categories}`;
      // /products?category=Drama
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
