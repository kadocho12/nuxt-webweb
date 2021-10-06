<template>
  <section
    class="page-heading"
    :class="{
      '-about': about,
      '-works': works,
      '-services': services,
      '-news': news,
    }"
  >
    <div class="l-container -small">
      <h1 class="page-heading__main">
        <slot
          name="main"
        >
          default
        </slot>
        <span class="page-heading__sub">
          <slot
            name="sub"
          >
            defalut
          </slot>
        </span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Boolean,
      default: false,
    },
    works: {
      type: Boolean,
      default: false,
    },
    services: {
      type: Boolean,
      default: false,
    },
    news: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.page-heading {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media #{$screenSize_XS} {
    padding: 32px 0;
  }
  @media #{$screenSize_S} {
    padding: 64px 0;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .2);
    content: "";
  }

  &.-about {
    background-image: url("/images/about/top@2x.jpg");
  }

  &.-news {
    background-image: url("/images/news/top@2x.jpg");
  }

  &.-services {
    background-image: url("/images/services/top@2x.jpg");
  }

  &.-works {
    background-image: url("/images/works/top@2x.jpg");
  }
}

.page-heading__main {
  @include engFont;
  position: relative;
  text-align: center;
  color: $white;
  font-weight: $medium;
  @media #{$screenSize_XS} {
    @include fontSize(32);
  }
  @media #{$screenSize_S} {
    @include fontSize(40);
  }
}

.page-heading__sub {
  @include headFont;
  display: block;
  font-weight: $medium;
  @media #{$screenSize_XS} {
    @include fontSize(16);
  }
  @media #{$screenSize_S} {
    @include fontSize(20);
  }
}
</style>