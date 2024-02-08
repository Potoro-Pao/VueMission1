export default {
  props: ["pages", "getProduct"],
  template: ` <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item" :class="{disabled:!pages.has_pre}">
            <a class="page-link" :href="pages.has_pre ? '#' : null"
              @click="getProduct(pages.current_page - 1)">Previous</a>
          </li>
          <li class="page-item" :class="{active: page===pages.current_page}"
            v-for="page in pages.total_pages" :key="page+123"><a @click="getProduct(page)" class="page-link"
              href="#">{{page}}</a></li>
          <li class="page-item" :class="{disabled:!pages.has_next}">
            <a @click="getProduct(pages.current_page + 1)" class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>`,
};
