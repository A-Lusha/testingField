<template>
  <button
    class="btn margin-top-s"
    @click="action"
  >
    {{ label }}
  </button>
<div class="dropdown">
  <button class="btn">
    <i class="fa fa-caret-down"></i>•
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
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
  background-color: $color-primary-dark;
  color: $color-grey-dark-1;
  padding: 1rem 1.2rem;
  font-size: $small-font-size;
  border: none;
  outline: none;
  z-index: 1;
}
.btn:hover, .btn:active {
  background-color: $color-primary-light;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba($color-black,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: $color-black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}
</style>