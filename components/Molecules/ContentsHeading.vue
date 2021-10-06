<template>
  <h2
    class="contents-heading"
    :class="{ '-center': center, '-spCenter': spCenter }"
  >
    <span
      class="contents-heading__main js-text-animation"
      :class="{ '-aboutus': aboutus }"
    >
      <slot name="main">default</slot>
    </span>
    <span class="contents-heading__sub">
      <slot name="sub">defalut</slot>
    </span>
  </h2>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    spCenter: {
      type: Boolean,
      default: false,
    },
    aboutus: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.resetAnimation();
      next();
    });

    this.handleScroll();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.targets = this.$el.querySelectorAll('.js-text-animation');
      this.timing = 100;
      this.scroll = window.scrollY;
      this.height = window.innerHeight;

      this.targets.forEach((target) => {
        this.pos = target.getBoundingClientRect().top + this.scroll;
        if (this.scroll > this.pos - this.height + this.timing) {
          target.classList.add('is-active');
        }
      });
    },
    resetAnimation() {
      this.targets = this.$el.querySelectorAll('.js-text-animation');
      this.targets.forEach((target) => {
        target.classList.remove('is-active');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-heading {
  grid-area: homeHeading;

  &.-center {
    @media #{$screenSize_S} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &.-spCenter {
    @media #{$screenSize_XS} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media #{$screenSize_XS} {
    @include fontSize(32);
  }
  @media #{$screenSize_S} {
    @include fontSize(40);
  }
}

.contents-heading__main {
  @include engFont;
  opacity: 0;
  font-weight: $medium;
  display: flex;

  & span {
    display: inline-block;
  }

  &.is-active {
    opacity: 1;

    & span {
      @include animation(
        $name: animateFadeIn,
        $duration: .6s,
        $timing-function: ease,
        $fill-mode: both
      );
      display: inline-block;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: $i * .04s;
        }
      }
    }

    &.-aboutus {
      & span {
        &:nth-child(6) {
          width: 10px;
        }
      }
    }
  }
}

.contents-heading__sub {
  display: block;
  font-weight: $medium;
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}
</style>