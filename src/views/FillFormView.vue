<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Complete Your Information</h1>
        <VForm @submit.prevent="onSubmit" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email">Email</label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="Your Email"
              rules="email|required"
              v-model="user.email"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="name">Name</label>
            <VField
              id="name"
              name="name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['name'] }"
              placeholder="Your Name"
              rules="required"
              v-model="user.name"
            />
            <ErrorMessage name="name" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="phone">Telephone</label>
            <VField
              id="phone"
              name="phone"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['phone'] }"
              placeholder="Telephone"
              :rules="isPhone"
              v-model="user.phone"
            />
            <ErrorMessage name="phone" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="country">Country</label>
            <VField
              id="country"
              name="country"
              class="form-control"
              :class="{ 'is-invalid': errors['country'] }"
              placeholder="Your Country"
              :rules="isCountry"
              v-model="user.country"
            />
            <ErrorMessage name="country" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="city">City</label>
            <VField
              id="city"
              name="city"
              class="form-control"
              :class="{ 'is-invalid': errors['city'] }"
              placeholder="Your City"
              :rules="isCity"
              v-model="user.city"
            />
            <ErrorMessage name="city" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <VField
              id="address"
              name="address"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['address'] }"
              placeholder="Address"
              rules="required"
              v-model="user.address"
            />
            <ErrorMessage name="address" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="message">Message</label>
            <textarea
              id="message"
              class="form-control"
              rows="10"
              placeholder="Write something"
              v-model="user.message"
            ></textarea>
          </div>

          <div class="text-end">
            <router-link class="btn btn-danger text-white" @click="onSubmit" :to="`/order`"
              >Review Order</router-link
            >
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
import en from '../en.json';

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
        country: '',
        city: '',
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
      const result = phoneNumber.test(value) ? true : 'Telephone is required.';
      if (result && value) {
        if (value.length < 8) {
          return 'The length must be at least 8 digits.';
        }
      }
      return result;
    },
    isCity(value) {
      const cityName = /^[A-Z][a-z]*$/;
      return cityName.test(value)
        ? true
        : 'City is required and start with Uppercase.';
    },
    isCountry(value) {
      const countryName = /^[A-Z][a-z]*$/;
      return countryName.test(value)
        ? true
        : 'Country is required and start with Uppercase.';
    },
  },
};
</script>
