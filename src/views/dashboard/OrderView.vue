<template>
  <div class="container mt-5">
    <h2>訂單列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Order ID</th>
          <th scope="col">Created Time</th>
          <th scope="col">Total Amount</th>
          <th scope="col">Payment Status</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="order.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ order.id }}</td>
          <td>
            {{ new Date(order.create_at * 1000).toLocaleDateString('zh-TW') }}
          </td>
          <td>$ {{ order.total }}</td>
          <td :style="{ color: order.is_paid ? 'green' : 'black' }">
            {{ order.is_paid ? 'Paid' : 'Unpaid' }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="showOrderDetail(order.id)"
            >
              View Detail
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="prepareDeleteOrder(order.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div
    class="modal fade"
    ref="updateOrderModal"
    tabindex="-1"
    aria-labelledby="updateOrderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateOrderModalLabel">Update Order</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Form for updating order will go here -->
          <div class="mb-3">
            <label for="orderStatus" class="form-label">Payment Status</label>
            <select class="form-select" v-model="selectedOrder.is_paid">
              <option value="true">Paid</option>
              <option value="false">Unpaid</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="updateOrder">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Update Order Modal code remains the same as provided -->

  <DDM :temp-product="tempProduct" :delete-product="deleteOrder" ref="dModal"></DDM>
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';
import DDM from '../../components/dashboardDelModal.vue';

const { VITE_URL, VITE_API } = import.meta.env;
export default {
  data() {
    return {
      orders: [],
      modal: null,
      selectedOrder: { is_paid: false },
      tempProduct: {},
    };
  },
  components: {
    DDM,
  },
  methods: {
    prepareDeleteOrder(orderId) {
      console.log(orderId);
      this.tempProduct.id = orderId;
      this.$refs.dModal.openDeleteModal();
    },
    deleteOrder() {
      const api = `${VITE_URL}/api/${VITE_API}/admin/order/${this.tempProduct.id}`;
      axios
        .delete(api)
        .then(() => {
          this.getOrders(); // Refresh the orders list
          this.$refs.dModal.closeDeleteModal(); // Close the DDM modal after successful deletion
          this.modal.hide();
        })
        .catch((error) => {
          console.error('Error deleting order:', error);
        });
    },
    getOrders() {
      const api = `${VITE_URL}/api/${VITE_API}/admin/orders`;
      axios.get(api).then((res) => {
        this.orders = res.data.orders;
        console.log(this.orders);
      });
    },
    showOrderDetail(orderId) {
      this.selectedOrder = this.orders.find((order) => order.id === orderId);
      if (this.modal && this.selectedOrder) {
        this.modal.show();
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.updateOrderModal);
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    axios.defaults.headers.common.Authorization = token;
    this.getOrders();
  },
};
</script>
