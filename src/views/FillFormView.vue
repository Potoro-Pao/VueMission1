<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <VForm @submit.prevent="onSubmit" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email">Email</label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="user.email"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="name">收件人姓名</label>
            <VField
              id="name"
              name="name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['name'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="user.name"
            />
            <ErrorMessage name="name" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="phone">電話</label>
            <VField
              id="phone"
              name="phone"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['phone'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="user.phone"
            />
            <ErrorMessage name="phone" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="address">收件人地址</label>
            <VField
              id="address"
              name="address"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['address'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="user.address"
            />
            <ErrorMessage name="address" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="message">留言</label>
            <textarea
              id="message"
              class="form-control"
              rows="10"
              placeholder="留下您的訊息"
              v-model="user.message"
            ></textarea>
          </div>

          <div class="text-end">
            <button class="btn btn-danger text-white" type="submit">
              送出訂單
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Form as VForm,
  Field as VField,
  ErrorMessage,
  defineRule,
  configure,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '../en.json'; // 根据你的文件结构调整路径

// 定义验证规则
defineRule('required', required);
defineRule('email', email);

configure({
  generateMessage: localize({
    en: en.messages,
  }),
  validateOnInput: true, // 输入时验证
});

export default {
  components: {
    VForm,
    VField,
    ErrorMessage,
  },
  data() {
    return {
      user: {
        email: '',
        name: '',
        phone: '',
        address: '',
        message: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      // 表单提交逻辑
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value)
        ? true
        : 'phoneNumber is required.';
    },
  },
};
</script>
