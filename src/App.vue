<template>
  <AppNav v-if="auth" />
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
import AppNav from '@/components/Nav.vue';

export default {
  name: 'Home',
  data() {
    return {
      auth: true,
    };
  },
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
.container {
  margin: 12rem 10rem 2rem 10rem;
  max-width: 970px;
}
</style>
