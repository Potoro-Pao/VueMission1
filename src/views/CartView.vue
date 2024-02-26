<template>
  <div class="container mt-5">
    <h2>購物車</h2>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th>數量</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>${{ item.price }}</td>
          <td>
            <button
              class="btn btn-secondary btn-sm"
              @click="updateQuantity(index, -1)"
            >
              -
            </button>
            <input
              type="text"
              class="form-control d-inline-block"
              v-model="item.quantity"
              style="width: 60px"
            />
            <button
              class="btn btn-secondary btn-sm"
              @click="updateQuantity(index, 1)"
            >
              +
            </button>
          </td>
          <td>${{ item.quantity * item.price }}</td>
        </tr>
      </tbody>
    </table>
    <div class="form-group">
      <label for="couponCode">優惠券代碼</label>
      <input
        type="text"
        class="form-control"
        v-model="couponCode"
        placeholder="輸入優惠券代碼"
      />
      <button class="btn btn-success mt-2" @click="applyCoupon">
        套用優惠券
      </button>
    </div>
    <div class="d-flex justify-content-end">
      <h4>總計：${{ totalPrice }}</h4>
    </div>
    <div class="d-flex justify-content-end mt-2">
      <button type="button" class="btn btn-primary">結帳</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        // 示例商品，實際應用中應從後端獲取
        { name: '商品 A', price: 100, quantity: 1 },
        // 可以添加更多商品
      ],
      couponCode: '',
      discount: 0, // 優惠金額，根據優惠券代碼變化
    };
  },
  methods: {
    updateQuantity(index, amount) {
      const item = this.cartItems[index];
      item.quantity += amount;
      if (item.quantity < 1) item.quantity = 1; // 防止數量小於1
    },
    applyCoupon() {
      // 假設優惠券代碼為"DISCOUNT10"，減少10元
      if (this.couponCode === 'DISCOUNT10') {
        this.discount = 10;
      } else {
        this.discount = 0;
        alert('無效的優惠券代碼');
      }
    },
  },
  computed: {
    totalPrice() {
      const total = this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      return total - this.discount;
    },
  },
};
</script>

<style>
/* 可以添加自定義樣式 */
</style>
