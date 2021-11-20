<template>
<div class="slideform">
  <div class="slideform__part">
    <input type="text" class="slideform__field" name="First Name" placeholder="First Name" id="" />
      <button
      class="slideform__btn slideform__btn--primary"
      @mouseup.prevent="moveToPrevious">
        Previous
      </button>
      <div class="spacer"></div>
      <button href="#"
      class="slideform__btn slideform__btn--secondary"
      @mouseup.prevent="moveToNext">
        Next
      </button>
  </div>
  <div class="slideform__part slideform__part--right">
    <input type="text" class="slideform__field" name="Last Name" placeholder="Last Name" id="" />
      <button href="#"
      class="slideform__btn slideform__btn--primary"
      @mouseup.prevent="moveToPrevious">
        Previous
      </button>
      <button href="#"
      class="slideform__btn slideform__btn--secondary"
      @mouseup.prevent="moveToNext">
        Next
      </button>
  </div>
  <div class="slideform__part slideform__part--right">
    <input type="email" class="slideform__field" name="Email" placeholder="Email" id="" />
      <button href="#"
      class="slideform__btn slideform__btn--primary"
      @mouseup.prevent="moveToPrevious">
        Previous
      </button>
      <button href="#"
      class="slideform__btn slideform__btn--secondary"
      @mouseup.prevent="moveToNext">
        Next
      </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    slides() {
      return document.querySelectorAll('.slideform__part');
    },
  },
  methods: {
    moveToNext() {
      this.slides[this.currentSlide].classList.add('slideform__part--left');
      this.slides[this.currentSlide + 1].classList.remove('slideform__part--right');
      console.log(this.currentSlide += 1);
    },
    moveToPrevious() {
      this.slides[this.currentSlide].classList.add('slideform__part--right');
      this.slides[this.currentSlide + -1].classList.remove('slideform__part--left');
      console.log(this.currentSlide -= 1);
    },
  },

};
</script>

<style lang="scss">
.slideform {
  position: relative;
  overflow: hidden;
  height: 50vh;
  min-height: 350px;
  background-color: $color-grey-dark-2;
  display: flex;
  justify-content: space-between;

  &__part {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    padding: 4rem 2rem;
    border: solid 2px $color-tertiary-dark;
    background-color: $color-grey-dark-1;
    transform: translate(-50%, -50%);
    transition: all .4s;

    &--left {
      transform: translate(-50%, -50%) translateX(-100rem);
    }

    &--right {
      transform: translate(-50%, -50%) translateX(100rem);
    }
  }

  &__field {
    display: block;
    margin: auto;
    width: 100%;
  }

  &__btn {
    display: inline-block;
    width: 10rem;
    padding: 1rem;
    text-align: center;
    border: none;

    &--primary{
      background-color: $color-primary;
    }
    &--secondary{
      background-color: $color-secondary-dark;
    }
  }
}

.spacer {
  display: inline-block;
  margin: 0 auto;
}
</style>
