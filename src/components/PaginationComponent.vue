<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          :href="{
            path: basePath + '/products',
            query: { page: pages.current_page - 1 },
          }"
          @click.prevent="getProduct(pages.current_page - 1)"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :class="{ active: page === pages.current_page }"
        :key="page + 123"
      >
        <a
          class="page-link"
          :href="`${basePath}/products?page=${page}`"
          @click.prevent="getProduct(page)"
          >{{ page }}</a
        >
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          :href="{
            path: basePath + '/products',
            query: { page: pages.current_page + 1 },
          }"
          @click.prevent="getProduct(pages.current_page + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pages', 'getProduct', 'basePath'],
};
</script>
