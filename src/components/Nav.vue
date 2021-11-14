<template>

<nav class="sidenav" :class="{ 'sidenav--closed': !navOpen }">
  <!-- animate this icon later -->
  <a href="#" class="sidenav__btn" @click.prevent="toggleNav">
    {{ navOpen ? '&times;' : '&#9776;' }}
  </a>
  <div class="sidenav__link-group" :class="{ 'sidenav__link-group--closed': !navOpen }">
    <router-link class="sidenav__link" to="/" @click="toggleNav">Home</router-link>
    <router-link class="sidenav__link" to="/About" @click="toggleNav">About</router-link>
  </div>
</nav>

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

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: $color-grey-dark-2;
  overflow-x: hidden;
  transition: all .3s ease-in-out;
  padding-top: 60px;

  &--closed{
    transform: translate(-150px, 0);
  }

  &__btn {
    position: absolute;
    top: 5px;
    right: 12.5px;
    text-decoration: none;
    font-size: 3rem;
  }

  &__link-group {

    &--closed{
      width: 0;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    font-size: 25px;
    color: $color-primary-light;
    padding: 1.5rem 3rem;
    transition: .4s;

    &:hover {
      color: #f1f1f1;
      background-color: $color-tertiary-dark;
    }
  }
}

</style>
