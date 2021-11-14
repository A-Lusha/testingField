<template>

<nav class="sidenav" :class="{ 'sidenav--closed': !navOpen }">
  <div class="sidenav-btn" @click="toggleNav">
    <span class="sidenav-btn__icon" :class="{ 'sidenav-btn__icon--opened': navOpen }">&nbsp;</span>
  </div>
  <span class="sidenav__spacer"></span>
  <div class="sidenav-content" :class="{ 'sidenav-content--closed': !navOpen }">
    <div class="sidenav-content__logo">
      &nbsp;
      <!--
        section for a logo or tagline maybe? may change just to header.
        felt like something should be here
      -->
    </div>
    <div class="sidenav-content__body">
      <router-link
        class="sidenav-content__link"
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        @click="toggleNav"
      >
        {{ link.name }}
      </router-link>
    </div>
    <!-- <div class="sidenav-content__footer">
      &nbsp;
      some sort of copyright, info, or profile info?
    </div> -->
  </div>
</nav>

</template>

<script>

export default {
  name: 'AppNav',
  data() {
    return {
      navOpen: true,
      navLinks: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About',
          to: '/about',
        },
        {
          name: 'Projects',
          to: '/projects',
        },
        {
          name: 'Contact',
          to: '/contact',
        },
        {
          name: 'FAQs',
          to: '/faqs',
        },
      ],
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  z-index: 10;
  overflow: hidden;
  background-color: $color-grey-dark-2;
  box-shadow: 0 1rem 2rem rgba($color-black,.2);
  font-weight: 300;
  transition: all .4s ease-in-out;

  &--closed{
    transform: translate(-210px, 0);
    background-color: inherit;
    box-shadow: none;
    overflow-y: hidden;
  }

  &-content {
    display: flex;
    flex-direction: column;
    height: 100%;

    &--closed{
      width: 0;
      opacity: 0;
    }

    &__logo {
        height: 125px;
        margin: 5px;
        padding-top: 25px;
        background-color: $color-grey-dark-1;
        border: dashed 3px $color-grey-dark-3;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: $color-grey-light-2;
        }
    }

    &__body {
      // links container for organazation purposes
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

    // &__footer {
    //   padding: 10px 5px;
    //   background-color: $color-black;
    //   color: $color-grey-light-2;
    //   font-size: 1.2rem;
    // }
  }

  &-btn {
    position: absolute;
    bottom: 15px;
    right: 10px;
    height: 65px;
    width: 65px;
    background-color: $color-tertiary-dark;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background-color: $color-tertiary-light;
      box-shadow: 0 1rem 2rem rgba($color-black,.2);
      transform: translateY(-3px);
    }

    &:active,
    &:focus {
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);
        transform: translateY(-1px);
    }

    &__icon {
      position: relative;
      margin-top: 3rem;
      margin-left: 2rem;

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
