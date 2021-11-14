<template>

<nav class="sidenav" :class="{ 'sidenav--closed': !navOpen }">
  <div class="sidenav-btn" @click="toggleNav">
    <span class="sidenav-btn__icon" :class="{ 'sidenav-btn__icon--opened': navOpen }">&nbsp;</span>
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
      <p>Alex</p>
    </div>
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
  width: 250px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: $color-grey-dark-2;
  overflow-x: hidden;
  transition: all .4s ease-in-out;
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
      display: block;
      /* placeholder for future editing */
    }

    &__link {
      display: block;
      text-decoration: none;
      font-size: 25px;
      color: $color-tertiary-light;
      padding: 1.5rem 3rem;
      transition: .2s;
      border-left: solid 1rem $color-tertiary-dark;

      &.router-link-active{
        /* style for active class */
        background-color: $color-grey-dark-1;
        border-left: solid 2rem $color-tertiary-dark;
      }

      &:hover {
        color: #f1f1f1;
        background-color: $color-primary-dark;
        border-left: solid 2rem $color-primary-light;
      }
      &:focus{
        border-left: solid 30rem $color-primary-light;
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px 5px;
      background-color: $color-black;
      color: $color-grey-light-2;
      font-size: 1.2rem;
    }
  }

  &-btn {
    float: right;
    height: 45px;
    width: 45px;
    margin: 15px 10px 15px 0;
    /* ^ top | right | bottom | left - because I keep fucking forgetting */
    background-color: $color-tertiary-dark;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s;

    &:hover {
      background-color: $color-tertiary-light;
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba($color-black,.2);
    }

    &:active,
    &:focus {
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);
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

      &--opened {
        background-color: transparent;
      }
      &--opened::before {
        top: 0;
        transform: rotate(135deg);
      }
      &--opened::after {
          top: 0;
          transform: rotate(-135deg);
      }

    }
  }
}

</style>
