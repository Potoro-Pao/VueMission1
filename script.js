import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import pagi from "./components/paginationComponent.js";
const app = {
  data() {
    return {
      pages: {},
      delModal: null,
      productModal: null,
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "potoro",
      products: [],
      isEditing: false,
      editingId: null,
      deleteId: null,
      selectedProduct: null,
      newProducts: {
        data: {
          title: null,
          category: null,
          origin_price: 0,
          price: 0,
          unit: null,
          description: null,
          content: null,
          is_enabled: 0,
          imageUrl: null,
          imagesUrl: [],
        },
      },
    };
  },
  components: {
    pagi,
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios
        .post(url)
        .then(() => {
          console.log("驗證成功！");
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
          window.location = "login.html";
        });
    },
    showAddProductModal() {
      this.resetNewProduct();
      this.isEditing = false;
      // this.newProducts.data.imagesUrl = [""];
      this.productModal.show();
    },
    resetNewProduct() {
      this.newProducts.data = {
        title: null,
        category: null,
        origin_price: 0,
        price: 0,
        unit: null,
        description: null,
        content: null,
        is_enabled: 0,
        imageUrl: null,
        imagesUrl: [],
      };
    },
    addProduct() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      const hasNoProduct =
        !this.newProducts.data.category &&
        !this.newProducts.data.title &&
        !this.newProducts.data.price;

      if (hasNoProduct) {
        alert("Product information is incomplete");
        this.productModal.hide();
        return;
      } else {
        axios
          .post(url, this.newProducts)
          .then((res) => {
            console.log(res.data.message);
            this.products.push(this.newProducts.data);
            this.productModal.hide();
            this.resetNewProduct();
            this.getProducts();
          })
          .catch((err) => console.log(err));
      }
    },
    getProducts(page = 1) {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pages = res.data.pagination;
          console.log(this.pages);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    showDelModal(id) {
      console.log(id);
      this.delModal.show();
      console.log(id);
      this.deleteId = id;
    },
    deleteProduct() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.deleteId}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(
            res.data.message,
            "id:",
            this.deleteId,
            this.getProducts()
          );
          this.deleteId = null;
          this.delModal.hide();
        })
        .catch((err) => console.log(err));
    },
    showEditModal(product) {
      this.isEditing = true;
      this.productModal.show();
      this.newProducts.data = { ...product };
      if (!this.newProducts.data.imagesUrl) {
        this.newProducts.data.imagesUrl = [""];
      }
      this.editingId = product.id;
    },
    editProduct() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.editingId}`;
      axios
        .put(url, this.newProducts)
        .then((res) => {
          this.editingId = null;
          this.getProducts();
          this.productModal.hide();
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    addImages() {
      if (this.newProducts.data.imagesUrl.includes("")) {
        return;
      }
      console.log(1234);
      this.newProducts.data.imagesUrl.push("");
    },
    deleteImages() {
      this.newProducts.data.imagesUrl.pop();
    },
  },
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.productModal);
    this.delModal = new bootstrap.Modal(this.$refs.delProductModal);
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
};

createApp(app).mount("#app");
