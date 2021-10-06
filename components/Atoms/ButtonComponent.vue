<template>
  <nuxt-link
    class="button"
    :class="{ '-white': white, '-center': center }"
    :to="link"
  >
    <span>
      <slot>default</slot>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      defalt: false,
    },
    center: {
      type: Boolean,
      defalt: false,
    },
    link: {
      type: String,
      default: '#',
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include fontSize(14);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-image: $gradation;
  overflow: hidden;
  font-weight: $medium;

  &::before {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0);
    transition: transform .4s ease;
    background-image: $gradationHover;
    content: "";
  }

  &:hover {
    @media #{$screenSize_M} {
      &::before {
        transform: translate(0, 0);
      }

      & > span {
        &:after {
          transform: translate(5px, -50%) rotate(45deg);
          transition: all .4s ease;
          opacity: 0;

          .browser-is-ie & {
            transform: translate(5px, -40%) rotate(45deg);
          }
        }
        &:before {
          transform: translate(0, -50%) rotate(45deg);
          transition: all .4s ease;
          opacity: 1;

          .browser-is-ie & {
            transform: translate(0, -40%) rotate(45deg);
          }
        }
      }
    }
  }

  .browser-is-safari & {
    z-index: $zIndexLv1;
  }

  & > span {
    position: relative;
    padding-right: 15px;
    color: $baseColor;
    line-height: $lhButton;

    &:after {
      @include arrow(8, 2, right, $white);
      right: 0;
      transition: all .6s ease;
      .browser-is-ie & {
        transform: translate(0, -40%) rotate(45deg);
      }
    }
    &:before {
      @include arrow(8, 2, right, $white);
      right: 0;
      transform: translate(-5px, -50%) rotate(45deg);
      transition: all .6s ease;
      opacity: 0;
      .browser-is-ie & {
        transform: translate(-5px, -40%) rotate(45deg);
      }
    }
    @media #{$screenSize_M} {
      transition: color $outTransition;
    }
  }

  @media #{$screenSize_XS} {
    margin: 0 auto;
    width: 100%;
    max-width: 320px;
    padding: {
      top: 12px;
      right: 16px;
      bottom: 12px;
      left: 16px;
    }
  }

  @media #{$screenSize_S} {
    width: 320px;
    padding: {
      top: 13px;
      right: 12px;
      bottom: 13px;
      left: 12px;
    }
  }
}

/* 中央寄せ */
.button.-center {
  margin: {
    right: auto;
    left: auto;
  }
}

.button.-white {
  background-color: $white;
  background-image: none;
  &::before {
    opacity: .6;
    background-image: $gradationHover;
  }

  &:hover {
    @media #{$screenSize_M} {
      & > span {
        color: $white;
        &:after,
        &:before {
          border-color: $white;
        }
      }
    }
  }
  & > span {
    color: $linkColor;
    &:after,
    &:before {
      border-color: $linkColor;
    }
  }
}
</style>