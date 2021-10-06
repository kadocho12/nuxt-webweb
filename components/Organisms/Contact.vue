<template>
  <section class="l-spacer -medium -gradient">
    <div class="l-container">
      <div class="l-grid -justify p-contact">
        <div class="l-grid__item -sp12Of12">
          <ContentsHeading spCenter>
            <template v-slot:main>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </template>
            <template v-slot:sub>
              お問い合わせ
            </template>
          </ContentsHeading>
          <p class="p-home-section__paragraph -spCenter">お仕事の連絡はこちらからお気軽に<br class="u-show-XS">お問い合わせください。</p>
        </div>
        <div class="l-grid__item -middle -row -sp12Of12">
          <div class="p-contact__info">
            <div class="p-contact__tel">
              <a class="p-tel" href="tel:000-0000-0000">000-0000-0000</a>
            </div>
            <div class="p-contact__button">
              <ButtonComponent white link="/contact">お問い合わせはこちら</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.p-contact {
  flex-wrap: nowrap;
  color: $white;
  @media #{$screenSize_XS} {
    display: block;
  }
}

.p-contact__info {
  @media #{$screenSize_XS} {
    margin-top: 8px;
    width: 100%;
  }
  @media #{$screenSize_S} {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-left: 40px;
  }
}

.p-contact__tel {
  @media #{$screenSize_XS} {
    text-align: center;
  }
  @media #{$screenSize_S} {
    margin-right: 40px;
  }
}

.p-contact__button {
  @media #{$screenSize_XS} {
    margin: 8px auto 0;
  }
}

.p-tel {
  @include engFont;
  @include fontSize(32);
  display: inline-block;
  color: $white;
  font-weight: $medium;
}

.p-home-section {
  position: relative;
}

.p-home-section__heading {
  grid-area: homeHeading;

  &.-center {
    @media #{$screenSize_S} {
      text-align: center;
    }
  }

  &.-spCenter {
    @media #{$screenSize_XS} {
      text-align: center;
    }
  }

  @media #{$screenSize_XS} {
    @include fontSize(32);
  }
  @media #{$screenSize_S} {
    @include fontSize(40);
  }
}

.p-home-section__heading-sub {
  display: block;
  font-weight: $medium;
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}

.p-home-section__paragraph {
  grid-area: homeParagraph;
  margin-top: 24px;

  &.-spCenter {
    @media #{$screenSize_XS} {
      text-align: center;
    }
  }
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
}
</style>