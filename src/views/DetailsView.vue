<template>
  <div class="container my-5">
    <div class="row">
      <!-- Product Image & Details Card -->
      <div class="col-lg-8">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-5">
              <img
                :src="product.imageUrl"
                class="img-fluid rounded-start"
                alt="Product Image"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  Category <br />
                  {{ product.content }}
                </p>
                <p class="card-text">
                  Short Description <br />
                  {{ product.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Price & Checkout Card -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ product.price }}</h5>
            <h5
              v-if="product.origin_price !== product.price"
              class="card-title"
            >
              <del>{{ product.origin_price }}</del>
            </h5>
            <p style="block">Free Delivery Worldwide</p>

            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                v-if="qty > 1"
                @click="qty--"
                type="button"
              >
                -
              </button>
              <input type="text" class="form-control" :value="qty" readonly />
              <button
                class="btn btn-outline-secondary"
                @click="qty++"
                type="button"
              >
                +
              </button>
            </div>
            <button
              @click.prevent="addToCart(product.id, this.qty)"
              class="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import cartStore from '../stores/cartStore';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_API}/product/${id}`).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
