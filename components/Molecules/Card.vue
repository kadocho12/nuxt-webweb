<template>
  <nuxt-link
    class="card"
    :to="link"
  >
    <div class="card__header">
      <h3 class="card__title">
        <slot name="title">default</slot>
      </h3>
      <div class="card__thumbnail">
        <img
          :src="src"
          :srcset="srcset"
          :alt="alt"
        >
      </div>
    </div>
    <div class="card__body">
      <p class="card__text">
        <slot name="text">defalut</slot>
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    srcset: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  flex: 1 1 auto;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .12);
}

a.card {
  transition: opacity .4s ease;

  &:hover {
    @media #{$screenSize_M} {
      opacity: .6;
    }
  }
}

.card__header {
  display: flex;
  flex-direction: column;
}

.card__title {
  order: 1;
  margin-top: 16px;
  color: $textColor;
  font-weight: $medium;
  @media #{$screenSize_XS} {
    @include fontSize(16);
    padding: 0 16px;
  }
  @media #{$screenSize_S} {
    @include fontSize(20);
    padding: 0 16px;
  }
}

.card__thumbnail {
  order: 0;
  overflow: hidden;

  & > img {
    max-width: 100%;
    vertical-align: bottom;
  }
}

.card__body {
  margin-top: 8px;
  @media #{$screenSize_XS} {
    padding: 0 16px 16px;
  }
  @media #{$screenSize_S} {
    padding: 0 16px 16px;
  }
}

.card__text {
  color: $textColor;
  @media #{$screenSize_XS} {
    @include fontSize(13);
  }
  @media #{$screenSize_S} {
    @include fontSize(14);
  }
}
</style>