import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
const app = {
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "potoro",
      products: [],
      tempProduct: {},
      selectedProduct: null,
    };
  },
  methods: {
    showDetail(details) {
      this.selectedProduct = details;
    },
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios
        .post(url)
        .then(() => {
          console.log("驗證成功！");
          this.getProducts();
        })
        .catch((err) => {
          alert(err.response.data.message);
          debugger;

          window.location = "login.html";
        });
    },
    addProducts() {},
    getProducts() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    deleteProduct(id) {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
      // const targetDeleteIndex = this.products.findIndex(
      //   (product) => product.id === id
      // );
      // this.products.splice(targetDeleteIndex, 1);
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data.message, "id:", id, this.getProducts());
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;
    console.log(token);

    this.checkAdmin();
  },
};

createApp(app).mount("#app");
