<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col-12">
        <label for="couponCode">Coupon Code:</label>
        <input
          type="text"
          id="couponCode"
          v-model="couponCode"
          placeholder="Enter coupon code"
          class="form-control"
        />
        <button class="btn btn-success mt-2" @click="applyCoupon">
          Apply Coupon
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
              <!-- New column for actions -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="item.id">
              <th scope="row" class="align-middle">{{ index + 1 }}</th>
              <td class="align-middle">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      :src="item.product.imageUrl"
                      class="img-fluid"
                      alt="Item"
                    />
                  </div>
                  <div class="col-md-9">
                    <div>{{ item.product.title }}</div>
                    <div class="text-muted">
                      {{ item.product.origin_price }}
                    </div>
                    <!-- 暫時設定不然會太多 -->
                  </div>
                </div>
              </td>
              <td class="align-middle">${{ item.product.price }}</td>
              <td class="align-middle">
                <div class="quantity-controller btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-if="item.qty > 1"
                    @click="
                      item.qty--;
                      this.changeCartQty(item, item.qty);
                    "
                  >
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    :value="item.qty"
                    disabled
                  />
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="
                      item.qty++;
                      this.changeCartQty(item, item.qty);
                    "
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="align-middle">${{ item.qty * item.product.price }}</td>
              <td class="align-middle">
                <!-- New column for remove button -->
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="this.removeCartItem(item.id)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <tfoot>
          <tr>
            <td
              colspan="4"
              class="text-right font-weight-bold subtotal-total-label"
            >
              Subtotal:
            </td>
            <td colspan="2" class="text-right subtotal-total-value">
              ${{ this.total }}
            </td>
          </tr>
          <tr>
            <td
              colspan="4"
              class="text-right font-weight-bold subtotal-total-label"
            >
              Discount:
            </td>
            <td
              colspan="2"
              class="text-right text-success subtotal-total-value"
            >
              <!-- - ${{ formattedDiscount }} -->
            </td>
          </tr>
          <tr>
            <td
              colspan="4"
              class="text-right font-weight-bold subtotal-total-label"
            >
              Total:
            </td>
            <td
              colspan="2"
              class="text-right font-weight-bold subtotal-total-value"
            >
              ${{ this.final_total }}
            </td>
          </tr>
        </tfoot>
      </div>
    </div>
    <button class="btn btn-info">checkout</button>
  </div>
</template>

<script>

import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['cart', 'final_total', 'total']), // 将 cart 映射到 computed 属性
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeCartItem', 'changeCartQty']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
