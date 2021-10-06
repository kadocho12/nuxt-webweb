<template>
  <div class="service-block">
    <p class="service-block__img">
      <img
        :src="src"
        :alt="alt"
      >
    </p>
    <div class="service-block__text">
      <Paragraph>
        <slot>default</slot>
      </Paragraph>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      require: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.service-block {
  @include setNextSpace;
  @media #{$screenSize_XS} {
    margin-top: 18px;
  }
  @media #{$screenSize_S} {
    margin-top: 26px;
  }
  @media #{$screenSize_S} {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.service-block__text {
  @media #{$screenSize_XS} {
    @include fontSize(15);
    margin-top: 18px;
    line-height: 1.85;
  }
  @media #{$screenSize_S} {
    order: 1;
    width: 60%;
  }
}

.service-block__img {
  @media #{$screenSize_S} {
    order: 2;
    margin-left: 60px;
    width: 40%;
  }
}
</style>