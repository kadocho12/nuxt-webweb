<template>
  <div
    class="page-top"
    :class="[isActive ? 'is-active' : '']"
    id="js-page-top"
  >
    <nuxt-link
      v-scroll-to="'#top'"
      to
    >
      <span>Page Top</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    headerHeightFromDefault: {
      type: Number,
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.toggleClass);
  },
  methods: {
    toggleClass() {
      this.scroll = window.pageYOffset;
      this.target = this.$el.querySelector('#js-page-top');
      if (window.matchMedia('(min-width: 768px)').matches) {
        if (this.scroll > this.headerHeightFromDefault) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  @include engFont;
  & > a {
    display: block;
    overflow: hidden;
    text-align: center;

    &::before {
      @media #{$screenSize_M} {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translate(0, 100%);
        transition: transform .4s ease;
        opacity: .6;
        background-image: $gradationHover;
        content: "";
      }
    }

    &:hover {
      @media #{$screenSize_M} {
        &::before {
          transform: translate(0, 0);
        }

        & > span {
          &::before {
            transform: translate(-50%, calc(-50% - 5px)) rotate(45deg);
            transition: all .4s ease;
            opacity: 0;
            border-color: $white;
          }
          &::after {
            transform: translate(-50%, -50%) rotate(45deg);
            transition: all .4s ease;
            opacity: 1;
            border-color: $white;
          }
        }
      }
    }

    & > span {

      &::before {
        @include inlineArrow(8, 2, top, $white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: all .6s ease;
        margin-left: 0;
        @media #{$screenSize_underM} {
          position: relative;
          top: 0;
          left: 0;
          transform: translate(0, 0) rotate(45deg);
          border-color: $white;
        }
      }

      &::after {
        @include inlineArrow(8, 2, top, $white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% + 5px)) rotate(45deg);
        transition: all .6s ease;
        opacity: 0;
        margin-left: 0;
      }
      @media #{$screenSize_underM} {
        @include fontSize(12);
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      @media #{$screenSize_M} {
        @include fontSize(0);
      }
    }

    @media #{$screenSize_underM} {
      padding: 20px 0;
      width: 100%;
      color: $white;
      background: {
        color: $black;
      }
    }
    @media #{$screenSize_M} {
      @include fontSize(0);
      position: fixed;
      right: 40px;
      bottom: 40px;
      transform: translateY(-50%);
      transition: all .4s ease;
      visibility: hidden;

      opacity: 0;
      z-index: $zIndexLv5;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
      width: 54px;
      height: 54px;
      background: {
        image: $gradation;
      }
    }
  }

  &.is-active a {
    @media #{$screenSize_M} {
      transition: all .4s ease;
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>