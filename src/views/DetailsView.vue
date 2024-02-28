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
                <h5 class="card-title">{{product.title}}</h5>
                <p class="card-text">Category <br> {{product.content}}</p>
                <p class="card-text">Short Description <br> {{product.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Price & Checkout Card -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5
             class="card-title">{{product.price}}</h5>
            <h5 v-if="product.origin_price!== product.price" class="card-title">
              <del>{{product.origin_price}}</del></h5>
            <p style="block">Free Delivery Worldwide</p>

            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary" type="button">-</button>
              <input type="text" class="form-control" value="1" readonly />
              <button class="btn btn-outline-secondary" type="button">+</button>
            </div>
            <button @click.prevent = "addToCart(product.id)"
            class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addToCart(id) {
      const api = `${VITE_URL}/api/${VITE_API}/cart`;
      const order = {
        product_id: id,
        qty: 1,
      };
      axios
        .post(api, { data: order })
        .then((res) => {
          console.log(res);
        });
    },
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_API}/product/${id}`).then((res) => {
        this.product = res.data.product;
        console.log(res);
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
