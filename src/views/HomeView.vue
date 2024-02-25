<template>

  <SwiperC></SwiperC>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-3"><h2>See People also Buy</h2></div>
      <div class="col-md-7"><MapC></MapC></div>

    </div>
  </div>
</template>

<script>

import MapC from '../components/MapComponent.vue';
import SwiperC from '../components/SwiperComponent.vue';

export default {
  components: {
    MapC,
    SwiperC,
  },
};
</script>
