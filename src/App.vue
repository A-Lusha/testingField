<template>
<AppNav />
  <div class="container">
    <RouterView />
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
  margin: 12rem 2rem 2rem 2rem;
  max-width: 970px;
}
</style>
