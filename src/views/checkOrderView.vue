<template>
  <loading v-model:active="isLoading"></loading>
  <div class="container">
    <h1 class="text-center my-5">Confirm Your Payment</h1>

    <div class="row">
      <div class="mb-3">
        <label style="font-size: 20px" for="orderId" class="form-label mb-3"
          >Order ID</label
        >
        <input
          type="text"
          class="form-control"
          id="orderId"
          v-model="checkoutOrderID"
          readonly
        />
        <label style="font-size: 20px" for="orderId" class="form-label mb-3"
          >Search Order ID</label
        >
        <input
          type="text"
          class="form-control"
          id="orderId"
          v-model="orderID"
        />
        <button class="btn btn-primary mt-3" @click="searchOrder">
          Search
        </button>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="order in orders" :key="order.id">
          <div class="card">
            <img
              :src="order.product.imageUrl"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ order.product.title }}
              </h5>
            </div>
            <div class="container">
              <p class="card-text">Price: {{ order.product.price }}</p>
              <p>Quantity: {{ order.qty }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><strong>Customer Information </strong></h5>
            <p class="card-text">Name: {{ this.userData.name }}</p>
            <p class="card-text">Email: {{ this.userData.email }}</p>
            <p class="card-text">Address: {{ this.userData.address }}</p>
            <p class="card-text">Phone: {{ this.userData.tel }}</p>
            <p class="card-text text-success">Total: {{ this.ordersTotal }}</p>
          </div>
        </div>
        <div class="mt-3">
          <label for="paymentMethod" class="form-label">付款方式</label>
          <select
            class="form-select"
            id="paymentMethod"
            v-model="selectedPaymentMethod"
          >
            <option disabled value="">Choose a payment method</option>
            <option>Credit card</option>
            <option>Bank transfer</option>
            <option>Pay when you get it (Cash on Delivery)</option>
          </select>
        </div>
        <button
          class="btn btn-primary mt-3"
          :disabled="!selectedPaymentMethod"
          @click="confirmOrder"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import axios from 'axios';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
  data() {
    return {
      selectedPaymentMethod: '',
      isLoading: true,
      checkoutData: {},
      orderData: {},
      productDetails: {},
      userData: {},
      orders: {},
      ordersTotal: 0,
      checkoutOrderID: '',
      orderID: '',
    };
  },
  components: {
    Loading,
  },
  methods: {
    confirmOrder() {
      const api = `${VITE_URL}/api/${VITE_API}/pay/${this.orderID}`;
      axios
        .post(api)
        .then(() => {
          this.isLoading = true;
          this.$router.push('/success');
        })
        .catch((error) => {
          console.error('請求失敗:', error);
        });
    },
    getOrderAll() {
      const api = `${VITE_URL}/api/${VITE_API}/orders`;
      axios
        .get(api)
        .then((res) => {
          this.isLoading = false;
          this.orders = res.data.orders;
          const order = this.orders.find(
            (e) => e.id === this.checkoutData.orderId,
          );

          if (order) {
            console.log(order);
            this.orders = order.products;
            this.ordersTotal = Math.round(order.total);
            this.orderID = order.id;
            this.userData = order.user;
          } else {
            console.log('未找到訂單');
          }
        })
        .catch((error) => {
          console.error('請求失敗:', error);
        });
    },

    searchOrder() {
      const api = `${VITE_URL}/api/${VITE_API}/order/${this.orderID}`;
      axios.get(api).then((res) => {
        this.isLoading = false;
        this.orders = res.data.order.products;
        this.userData = res.data.order.user;
        this.ordersTotal = Math.round(res.data.order.total);
        this.checkoutOrderID = res.data.order.id;
        this.orderID = res.data.order.id;
      });
    },
  },
  created() {
    if (this.$route.query.data) {
      this.checkoutData = JSON.parse(this.$route.query.data);
    }
  },
  mounted() {
    this.isLoading = false;
    this.checkoutOrderID = this.checkoutData.orderId;
    this.orderID = this.checkoutData.orderId;
    this.getOrderAll();
  },
};
</script>

<style scoped>
.card {
  /* 調整卡片的最大高度 */
  max-height: 400px;
  overflow-y: auto; /* 添加滾動條以適應內容 */
}
</style>
