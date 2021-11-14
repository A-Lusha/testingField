<template>
  <div class="container">
    <h1>Welcome</h1>
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
  padding: 100px;
}
</style>
