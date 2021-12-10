<template>
  <h1><span>Form.vue</span></h1>
  <SlideForm />
</template>

<script>
import SlideForm from '@/components/SlideForm.vue';

export default {
  name: 'Home',
  components: {
    SlideForm,
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    // display: inline-block;
    position: relative;
    z-index: 10;
    margin-bottom: -1.5rem;
    text-align: center;
  }
  span {
    padding: .5rem 2rem;
    border: solid 2px $color-primary;
    border-radius: 25%;
    background-color: $color-grey-dark-1;
  }
</style>
