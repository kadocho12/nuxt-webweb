<template>
  <h2
    class="heading1"
    :class="{ 'heading1--center': center }"
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
.heading1 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;

  @media #{$screenSize_XS} {
    @include fontSize(28);
  }
  @media #{$screenSize_S} {
    @include fontSize(44);
  }
}

.heading1--center {
  text-align: center;
}
</style>