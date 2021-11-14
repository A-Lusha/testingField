<template>

<div class="navContainer">
  <div class="navLinks" :style="navOpen ? 'width:150px;' : 'width:0;'">
    <router-link to="/" @click="toggleNav">Home</router-link>
    <router-link to="/About" @click="toggleNav">About</router-link>
  </div>
  <div class="navIcons">
    <a href="#" class="closebtn" @click.prevent="toggleNav">
      {{ navOpen ? '&times;' : '&#9776;' }}
    </a>
  </div>
</div>

</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },

};
</script>

<style lang="scss" scoped>

.navContainer {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $color-grey-dark-2;
  overflow-x: hidden;
  transition: all .3s;
  padding-top: 60px;

  a {
    padding: 8px 8px; // 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #f1f1f1;
    }
    @media screen and (max-height: 450px){
      font-size: 18px;
    }
  }
  .closebtn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 3rem;
    margin-left: 50px;
  }
  .navLinks {
    height: 100%;
    margin-left: 50px;
    transition: all .3s;
  }
}
</style>
