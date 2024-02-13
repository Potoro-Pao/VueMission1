const { createApp } = Vue;

Object.keys(VeeValidateRules).forEach((rule) => {
  if (rule !== "default") {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});
// 讀取外部的資源
VeeValidateI18n.loadLocaleFromURL("./zh_TW.json");

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize("zh_TW"),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});

const apiUrl = "https://vue3-course-api.hexschool.io/v2/";
const apiPath = "potoro";
const userModal = {
  props: ["tempProduct", "addToCart"],
  data() {
    return {
      productModal: null,
      qty: 1,
    };
  },
  template: "#userProductModal",
  methods: {
    open() {
      this.productModal.show();
    },
    close() {
      this.productModal.hide();
    },
  },
  watch: {
    tempProduct() {
      this.qty = 1;
    },
  },
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.modal);
  },
};

const app = createApp({
  data() {
    return {
      user: {
        email: "",
        name: "",
        phone: "",
        address: "",
        message: "",
      },
      carts: {},
      tempProduct: {},
      products: [],
      status: {
        addToCartLoading: "",
        cartQtyLoading: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      const result = phoneNumber.test(value) ? true : "電話為必填";
      if (result && value) {
        if (value.length < 8) {
          return "電話必須為8個數字";
        }
      }
      return result;
    },
    getProducts() {
      axios.get(`${apiUrl}api/${apiPath}/products/all`).then((res) => {
        this.products = res.data.products;
      });
    },
    openModal(product) {
      this.tempProduct = product;
      this.$refs.userModal.open();
    },
    addToCart(product_id, qty = 1) {
      const order = {
        product_id,
        qty,
      };
      this.status.addToCartLoading = product_id;

      axios
        .post(`${apiUrl}api/${apiPath}/cart`, { data: order })
        .then((res) => {
          console.log(res);
          this.status.addToCartLoading = "";
          this.getCart();
          this.$refs.userModal.close();
        });
    },
    changeCartQty(item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty,
      };
      this.status.cartQtyLoading = item.id;
      axios
        .put(`${apiUrl}api/${apiPath}/cart/${item.id}`, { data: order })
        .then((res) => {
          console.log(res);
          this.status.cartQtyLoading = "";
          this.getCart();
          this.$refs.userModal.close();
        });
    },
    removeCartItem(id) {
      this.status.cartQtyLoading = id;
      axios.delete(`${apiUrl}api/${apiPath}/cart/${id}`).then((res) => {
        console.log(res);
        this.status.cartQtyLoading = "";
        this.getCart();
        this.$refs.userModal.close();
      });
    },
    getCart() {
      axios.get(`${apiUrl}api/${apiPath}/cart`).then((res) => {
        this.carts = res.data.data.carts;
        console.log(this.carts);
      });
    },
  },
  components: { userModal },
  mounted() {
    this.getProducts();
    this.getCart();
  },
});

app.component("VForm", VeeValidate.Form);
app.component("VField", VeeValidate.Field);
app.component("ErrorMessage", VeeValidate.ErrorMessage);
app.mount("#app");
