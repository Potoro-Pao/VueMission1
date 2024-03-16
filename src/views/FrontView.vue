<template>
  <div class="position-relative" style="min-height: 100vh">
    <NavC :basePath="'#/'"></NavC>
    <BgC></BgC>
    <RouterView></RouterView>
  </div>
  <footer-c :basePath="'#/'" class="mt-6 w-100"></footer-c>
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
