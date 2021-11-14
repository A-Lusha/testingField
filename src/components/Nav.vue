<template>

<nav class="sidenav" :class="{ 'sidenav--closed': !navOpen }">

  <div class="sidenav-btn" @click="toggleNav">
    <span class="sidenav-btn__icon" >&nbsp;</span>
  </div>

  <div class="sidenav-content" :class="{ 'sidenav-content--closed': !navOpen }">
    <div class="sidenav-content__logo">
      &nbsp;
    </div>
    <div class="sidenav-content__body" >
      <router-link class="sidenav-content__link" to="/" @click="toggleNav">Home</router-link>
      <router-link class="sidenav-content__link" to="/About" @click="toggleNav">About</router-link>
    </div>
    <div class="sidenav-content__footer">
      &nbsp;
    </div>
  </div>

</nav>

</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      navOpen: true,
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
  width: 250px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: $color-grey-dark-2;
  overflow-x: hidden;
  transition: all .3s ease-in-out;
  box-shadow: 0 1rem 2rem rgba($color-black,.2);

  &--closed{
    transform: translate(-180px, 0);
    background-color: inherit;
    box-shadow: none;
  }

  &-content {

    &--closed{
      width: 0;
      opacity: 0;
    }

    &__logo {
        display: inline-block;
        height: 100px;
        width: 175px;
        margin: 5px;
        background-color: $color-grey-dark-1;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: $color-grey-light-2;
        }
    }

    &__body {

    }

    &__link {
      display: block;
      text-decoration: none;
      font-size: 25px;
      color: $color-tertiary-light;
      padding: 1.5rem 3rem;
      transition: .4s;
      border-left: solid 1rem $color-tertiary-dark;

      &:hover {
        color: #f1f1f1;
        background-color: $color-primary-dark;
        border-left: solid 1rem $color-primary-light;
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      height: px;
      width: 100%;
      background-color: $color-black;
    }
  }

  &-btn {
      float: right;
      height: 45px;
      width: 45px;
      /* top | right | bottom | left */
      margin: 15px 15px 15px 0;
      background-color: $color-tertiary-dark;
      cursor: pointer;
      border-radius: 50%;
      transition: all .3s;

      &:hover {
        background-color: $color-tertiary-light;
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
      }

      &__icon {
        position: relative;
        margin-top: 2.1rem;
        margin-left: 1rem;

        &,
        &::before,
        &::after {
            width: 2.5rem;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }
  }
}
</style>
