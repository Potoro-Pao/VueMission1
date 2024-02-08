import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import pagination from "./components/Pagination.js";
import deleteModal from "./components/DelModal.js";
import proModal from "./components/ProModal.js";
const site = "https://vue3-course-api.hexschool.io/v2/";
const apiPath = "potoro";
const app = createApp({
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      pages: {},
      modalProducts: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    getProduct(page = 1) {
      const api = `${site}api/${apiPath}/admin/products?page=${page}`;
      axios.get(api).then((res) => {
        this.products = res.data.products;
        this.pages = res.data.pagination;
      });
    },
    openModal(status, product) {
      if (status === "new") {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.pModal.openModal();
      } else if (status === "edit") {
        this.tempProduct = { ...product, imagesUrl: product.imagesUrl || [] };

        this.isNew = false;
        this.$refs.pModal.openModal();
      } else if (status === "delete") {
        this.tempProduct = { ...product };
        this.$refs.dModal.openDeleteModal();
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
          this.$refs.pModal.closeModal();
        })
        .catch((err) => console.log(err));
    },
    deleteProduct() {
      const api = `${site}api/${apiPath}/admin/product/${this.tempProduct.id}`;
      axios.delete(api, { data: this.tempProduct }).then((res) => {
        this.products = res.data.products;
        this.getProduct();
        this.$refs.dModal.closeDeleteModal();
        this.tempProduct = {};
      });
    },
  },
  components: { pagination, deleteModal, proModal },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;
    this.getProduct();
  },
});
app.mount("#app");
