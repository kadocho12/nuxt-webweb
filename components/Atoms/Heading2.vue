<template>
  <h2
    class="heading2"
    :class="{ 'heading2--center': center }"
  >
    <slot>default</slot>
  </h2>
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
.heading2 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;

  border-left: 6px solid $mainColor;
  padding-left: 16px;
  @media #{$screenSize_XS} {
    @include fontSize(22);
  }
  @media #{$screenSize_S} {
    @include fontSize(32);
  }
}

.heading2--center {
  text-align: center;
}
</style>