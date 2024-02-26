<template>
  <div class="position-relative" style="min-height: 100vh">
    <NavC></NavC>
    <BgC></BgC>
  </div>
  <div class="cotainer">
    <div class="row">
    </div>
  </div>
  <!--footer!-->
  <FooterC></FooterC>
</template>

<script>
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
    BgC,
    NavC,
    FooterC,
  },
};
</script>
