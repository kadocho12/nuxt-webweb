<template>
  <div class="home-visual">
    <h1 class="home-visual__heading">
      <span>北海道札幌市にない</span>
      <br class="u-show-underM">
      <span>Web制作会社</span>
    </h1>
    <div class="home-visual__inner">
      <client-only>
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="home-visual__img -first"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-visual__img -second"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-visual__img -third"></div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1200,
        allowTouchMove: false
      },
    }
  },
  mounted() {
    window.addEventListener("load", this.fadeIn);
  },
  updated() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      this.target = this.$el.querySelector('.home-visual__inner');
      this.target.classList.add('fadeIn');
    }
  }
}
</script>

<style lang="scss" scoped>
.home-visual {
  height: 72vh;
  min-height: 640px;
  position: relative;
  overflow: hidden;

  &::before {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 40000;
    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), transparent);
    width: 100%;
    height: 40%;
    max-height: 360px;
    content: "";
  }

  @media #{$screenSize_XS} {
    height: 320px;
    min-height: auto;
  }
}

.home-visual__inner {
  height: 100%;
  opacity: 0;
  transition: all 1s;

  &.fadeIn {
    opacity: 1;
  }
}

.home-visual__heading {
  position: absolute;
  z-index: 50000;
  color: #fff;
  font-weight: 500;
  bottom: 64px;
  left: 40px;
  @include fontSize(48);

  @media #{$screenSize_XS} {
    @include fontSize(28);
    bottom: 24px;
    left: 5%;
  }

  @media #{$screenSize_M} {
    display: flex;
    flex-wrap: wrap;
  }
}

.swiper-container {
  height: 100%;
}

.swiper-pagination {
  bottom: 74px !important;
  z-index: 50000;
  text-align: right;
  padding-right: 5%;

  @media #{$screenSize_underM} {
    bottom: 30px !important;
  }

  &::v-deep .swiper-pagination-bullet {
    margin-right: 12px !important;
    margin-left: 12px !important;
    width: 16px;
    height: 16px;
    background-color: #ddd;
    opacity: 1;

    @media #{$screenSize_underM} {
      width: 12px;
      height: 12px;
      margin-right: 4px !important;
      margin-left: 4px !important;
    }
  }

  &::v-deep .swiper-pagination-bullet-active {
    background-color: #ddd;
    background-image: linear-gradient(90deg,#187ddd 0,#0ba2ce);
  }
}

.home-visual__img {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &.-first {
    background-image: url(/images/img_home_visual_1@2x.jpg);

    @media #{$screenSize_XS} {
      background-image: url(/images/img_home_visual_1_sp@2x.jpg);
    }
  }

  &.-second {
    background-image: url(/images/img_home_visual_2@2x.jpg);

    @media #{$screenSize_XS} {
      background-image: url(/images/img_home_visual_2_sp@2x.jpg);
    }
  }

  &.-third {
    background-image: url(/images/img_home_visual_3@2x.jpg);

    @media #{$screenSize_XS} {
      background-image: url(/images/img_home_visual_3_sp@2x.jpg);
    }
  }
}

</style>