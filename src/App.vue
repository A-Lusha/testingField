<template>
  <div>
    <h1>{{ messageContent }}</h1>
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      messageContent: 'testing',
    };
  },
};
</script>

<style lang="scss">

</style>
