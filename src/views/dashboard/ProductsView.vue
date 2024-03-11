<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th>產品圖片</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-start">
            <img width="200px" :src="product.imageUrl" alt="" />
          </td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PagC :pages="pages" :getProduct="getProduct" basePath="/admin" />
  </div>
  <!-- Modal -->
  <DPM
    :temp-product="tempProduct"
    :update-product="updateProduct"
    ref="pModal"
  ></DPM>

  <DDM
    :temp-product="tempProduct"
    :delete-product="deleteProduct"
    ref="dModal"
  ></DDM>
</template>

<script>
import axios from 'axios';
import DDM from '../../components/dashboardDelModal.vue';
import PagC from '../../components/PaginationComponent.vue';
import DPM from '../../components/dashboardProModal.vue';

const { VITE_URL, VITE_API } = import.meta.env;

export default {
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
      const api = `${VITE_URL}/api/${VITE_API}/admin/products?page=${page}`;
      axios.get(api).then((res) => {
        this.products = res.data.products;
        this.pages = res.data.pagination;
      });
    },
    openModal(status, product) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.pModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = { ...product, imagesUrl: product.imagesUrl || [] };

        this.isNew = false;
        this.$refs.pModal.openModal();
      } else if (status === 'delete') {
        this.tempProduct = { ...product, imagesUrl: product.imagesUrl || [] };
        this.$refs.dModal.openDeleteModal();
      }
    },
    updateProduct() {
      let api = `${VITE_URL}/api/${VITE_API}/admin/product`;
      let method = 'post';
      if (!this.isNew) {
        api = `${VITE_URL}/api/${VITE_API}/admin/product/${this.tempProduct.id}`;
        method = 'put';
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
      const api = `${VITE_URL}/api/${VITE_API}/admin/product/${this.tempProduct.id}`;
      axios.delete(api, { data: this.tempProduct }).then((res) => {
        this.products = res.data.products;
        this.getProduct();
        this.$refs.dModal.closeDeleteModal();
        this.tempProduct = {
          imagesUrl: [],
        };
      });
    },
  },
  components: { PagC, DPM, DDM },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    axios.defaults.headers.common.Authorization = token;
    this.getProduct();
  },
};
</script>
