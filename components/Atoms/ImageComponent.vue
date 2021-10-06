<template>
  <p class="image">
    <!-- <img src="/images/about/img_about_01@2x.jpg" alt="窓際でノートパソコンを操作している人の画像"> -->
    <img
      :src="src"
      :alt="alt"
    >
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  }
}
</script>

<style lang="scss" scoped>
.image {
  @include setNextSpace;

  & > img {
    width: 100%;
  }
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}
</style>