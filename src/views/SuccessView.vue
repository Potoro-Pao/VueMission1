<template>
  <loading v-model:active="isLoading"></loading>
  <div class="container">
    <div class="centered-content" style="font-size: 50px;">
      Payment Success
      <div v-if="countdown > 0">Redirecting in {{ countdown }} seconds...</div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      isLoading: false,
      countdown: 5, // 初始化倒數計時
    };
  },
  components: {
    Loading,
  },
  methods: {
    goBackToHomePage() {
      this.$router.push('/');
    },
    startCountdown() {
      const interval = setInterval(() => {
        this.countdown -= 1;
        if (this.countdown === 0) {
          clearInterval(interval);
          this.goBackToHomePage();
        }
      }, 1000);
    },
  },
  mounted() {
    this.isLoading = false;
    this.startCountdown();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered-content {
  text-align: center;
}
</style>
