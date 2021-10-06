<template>
  <p
    class="paragraph"
    :class="{ 'paragraph--center': center }"
  >
    <slot>default</slot>
  </p>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.paragraph {
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;

  &:first-child {
    margin-top: 0;
  }

  & > a {
    transition: color .6s ease;
    &:hover {
      @media #{$screenSize_M} {
        color: $linkColor;
      }
    }
  }

  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}

.paragraph--center {
  text-align: center;
}
</style>