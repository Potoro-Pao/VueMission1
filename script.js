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
  },
});
app.component("VForm", VeeValidate.Form);
app.component("VField", VeeValidate.Field);
app.component("ErrorMessage", VeeValidate.ErrorMessage);
app.mount("#app");
