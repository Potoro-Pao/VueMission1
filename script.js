import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
const app = {
  data() {
    return {
      myModal: null,
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "potoro",
      products: [],
      tempProduct: {},
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
    showAddProductModal() {
      this.myModal.show();
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
        console.log("Product information is incomplete");
        this.myModal.hide();
        return;
      } else {
        axios
          .post(url, this.newProducts)
          .then((res) => {
            console.log(res.data.message);
            this.products.push(this.newProducts.data);
            this.myModal.hide();
            this.resetNewProduct();
            this.getProducts();
          })
          .catch((err) => console.log(err));
      }
    },
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
    this.myModal = new bootstrap.Modal(document.getElementById("productModal"));
  },
};

createApp(app).mount("#app");
