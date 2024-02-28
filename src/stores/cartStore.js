import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_API } = import.meta.env;
export default defineStore('cartStore', {
  state: () => ({ cart: [], final_total: 0, total: 0 }),
  actions: {
    getCart() {
      const api = `${VITE_URL}/api/${VITE_API}/cart`;
      axios.get(api).then((res) => {
        this.cart = res.data.data.carts;
        this.final_total = res.data.data.final_total;
        this.total = res.data.data.total;
        console.log('pineapple', this.cart);
      });
    },
    addToCart(id) {
      const api = `${VITE_URL}/api/${VITE_API}/cart`;
      const order = {
        product_id: id,
        qty: 1,
      };
      axios.post(api, { data: order }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
  },
});
