<template>
  <div class="position-relative" style="min-height: 100vh">
    <NavC></NavC>
    <BgC></BgC>
  </div>
  <div class="cotainer">
    <div class="row">
      <div class="col"><MapC v-if="isHome"></MapC></div>
    </div>
  </div>
  <!--footer!-->
  <FooterC></FooterC>
</template>

<script>
import MapC from '../components/MapComponent.vue';
import BgC from '../components/BgComponent.vue';
import NavC from '../components/NavbarComponent.vue';
import FooterC from '../components/FooterComponent.vue';

export default {
  data() {
    return {
      isHome: false,
    };
  },
  components: {
    MapC,
    BgC,
    NavC,
    FooterC,
  },
  watch: {
    $route(to) {
      this.isHome = to.path === '/';
    },
  },
  mounted() {
    this.isHome = this.$route.path === '/';
  },
};
</script>
