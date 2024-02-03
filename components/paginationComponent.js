export default {
  props: {
    // 定义接收的 prop，例如 pages 对象
    pages: Object,
    getProducts: Function,
  },
  template: `        <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item" :class="{disabled:!pages.has_pre}">
        <span @click="getProducts(pages.current_page-1)" class="page-link"
          >Previous</span
        >
      </li>
      <li
        class="page-item"
        :class="{active:page === pages.current_page}"
        v-for="page in pages.total_pages"
        :key="page+123"
      >
        <a @click="getProducts(page)" class="page-link" href="#"
          >{{page}}</a
        >
      </li>

      <li class="page-item" :class="{disabled:!pages.has_next}">
        <a
          @click="getProducts(pages.current_page+1)"
          class="page-link"
          href="#"
          >Next</a
        >
      </li>
    </ul>
  </nav>`,
};
