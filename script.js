import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const site = "https://vue3-course-api.hexschool.io/v2/";
const apiPath = "potoro";
const app = createApp({
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      modalProducts: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    getProduct() {
      const api = `${site}api/${apiPath}/admin/products`;
      axios.get(api).then((res) => {
        this.products = res.data.products;
        console.log(this.products);
      });
    },
    openModal(status, product) {
      if (status === "new") {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.modalProducts.show();
      } else if (status === "edit") {
        this.tempProduct = { ...product };
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = [];
        }
        this.isNew = false;
        this.modalProducts.show();
      } else if (status === "delete") {
        this.tempProduct = { ...product };
        this.modalDel.show();
      }
    },
    updateProduct() {
      let api = `${site}api/${apiPath}/admin/product`;
      let method = "post";
      if (!this.isNew) {
        api = `${site}api/${apiPath}/admin/product/${this.tempProduct.id}`;
        method = "put";
      }
      axios[method](api, { data: this.tempProduct })
        .then((res) => {
          this.products = res.data.products;
          this.getProduct();
          this.modalProducts.hide();
        })
        .catch((err) => console.log(err));
    },
    deleteProduct() {
      const api = `${site}api/${apiPath}/admin/product/${this.tempProduct.id}`;
      axios.delete(api, { data: this.tempProduct }).then((res) => {
        this.products = res.data.products;
        this.modalDel.hide();
        this.getProduct();
        this.tempProduct = {};
      });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;

    this.getProduct();
    console.log(this.$refs);

    this.modalProducts = new bootstrap.Modal(this.$refs.productModal);
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal);
  },
});
app.mount("#app");
