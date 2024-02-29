<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <router-link
          class="page-link"
          :to="{ path: '/products', query: { page: pages.current_page - 1 } }"
          @click.prevent="getProduct(pages.current_page - 1)"
          >Previous</router-link
        >
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :class="{ active: page === pages.current_page }"
        :key="page + 123"
      >
        <router-link
          class="page-link"
          :key="page"
          :to="{ path: '/products', query: { page: page } }"
          >{{ page }}</router-link
        >
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <router-link
          class="page-link"
          :to="{ path: '/products', query: { page: pages.current_page + 1 } }"
          @click.prevent="getProduct(pages.current_page + 1)"
          >Next</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pages', 'getProduct'],
};
</script>
