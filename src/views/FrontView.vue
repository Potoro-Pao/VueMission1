<template>
  <div class="position-relative" style="min-height: 100vh">
    <NavC></NavC>
    <BgC></BgC>
    <RouterView></RouterView>
  </div>
  <FooterC class="mt-6 w-100" style="bottom: 0"></FooterC>
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
