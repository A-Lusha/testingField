<template>
  <button
    class="btn"
    @click="action"
  >
    {{ label }}
  </button>
<!-- <div class="dropdown">
  <button class="btn" style="border-left:1px solid #0d8bf2">
    <i class="fa fa-caret-down"></i>V
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> -->
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    action: {
      type: Function,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  background-color: #2196F3;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  outline: none;
  z-index: 1;
}
</style>