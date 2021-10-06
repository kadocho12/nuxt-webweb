<template>
  <h2
    class="heading3"
    :class="{ 'heading3--center': center }"
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
.heading3 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;

  @media #{$screenSize_XS} {
    @include fontSize(18);
  }
  @media #{$screenSize_S} {
    @include fontSize(22);
  }
}

.heading3--center {
  text-align: center;
}
</style>