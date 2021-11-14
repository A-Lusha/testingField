<template>
  <div class="container">
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
.container {
  margin: 6.5rem;
}
</style>
