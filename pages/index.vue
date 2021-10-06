<template>
  <div>
    <Slider />
    <div class="l-spacer -large">
      <section class="l-spacer -medium -pt0">
        <div class="l-container">
          <div class="p-home-section">
            <div class="p-home-section__content">
              <ContentsHeading aboutus>
                <template v-slot:main>
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                  <span> </span>
                  <span>u</span>
                  <span>s</span>
                </template>
                <template v-slot:sub>
                  私たちについて
                </template>
              </ContentsHeading>
              <div class="p-home-section__image"><img src="/images/img_about.jpg" alt="テーブルの上に置いたパソコンを操作する様子"></div>
              <p class="p-home-section__paragraph">私たちはWeb制作会社です。お客様のビジネスをより成功させるために、Webサイトを作らせていただきます。わかりやすいデザインで、伝えたいことをちゃんと伝えられるサイトを作ります。</p>
              <div class="p-home-section__button">
                <ButtonComponent link="about">
                  私たちについて見る
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-spacer -medium">
        <div class="l-container">
          <div class="p-home-section">
            <div class="p-home-section__content -reverse">
              <ContentsHeading>
                <template v-slot:main>
                  <span>S</span>
                  <span>e</span>
                  <span>r</span>
                  <span>v</span>
                  <span>i</span>
                  <span>c</span>
                  <span>e</span>
                  <span>s</span>
                </template>
                <template v-slot:sub>
                  サービス
                </template>
              </ContentsHeading>
              <div class="p-home-section__image"><img src="/images/img_services.jpg" alt="2人でアイデアを出し合う様子"></div>
              <p class="p-home-section__paragraph">Webサイトの戦略から策定いたします。どんな人をターゲットにするかはデザインの土台になります。制作フローを明確にして、クオリティを安定させています。Webサイトを公開してからの運用もいたします。</p>
              <div class="p-home-section__button">
                <ButtonComponent link="services">
                  サービスについて見る
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-spacer -medium">
        <div class="l-container">
          <div class="p-home-section">
            <ContentsHeading center>
              <template v-slot:main>
                <span>W</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
                <span>s</span>
              </template>
              <template v-slot:sub>
                実績
              </template>
            </ContentsHeading>
            <div class="l-spacer -mtMedium">
              <div class="l-grid -gutter">
                <article
                  class="l-grid__item -sp12Of12 -tab4Of12"
                  v-for="imgList in imgLists"
                  v-bind:key="imgList.id"
                >
                  <Card
                    :link="imgList.link"
                    :src="imgList.src"
                    :srcset="imgList.srcset"
                    :alt="imgList.alt"
                  >
                    <template v-slot:title>
                      {{ imgList.title }}
                    </template>
                    <template v-slot:text>
                      {{ imgList.description }}
                    </template>
                  </Card>
                </article>
              </div>
              <div class="p-home-section__button">
                <ButtonComponent center link="works">実績をもっと見る</ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-spacer -medium -pb0">
        <div class="l-container">
          <div class="p-home-section">
            <ContentsHeading>
              <template v-slot:main>
                <span>N</span>
                <span>e</span>
                <span>w</span>
                <span>s</span>
              </template>
              <template v-slot:sub>
                お知らせ
              </template>
            </ContentsHeading>
            <div class="l-spacer -mtMedium">
              <news-list />
              <div class="p-home-section__button">
                <ButtonComponent center link="news">
                  お知らせをもっと見る
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'ホーム | WEBWEB',
  },
  layout: 'default',
  data() {
    return {
      imgLists: [
        {
          id: 1,
          link: "works/detail/akairo",
          title: "あかいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。赤色を取り入れたデザインをしました。",
          src: "/images/akairo.jpg",
          srcset: "/images/akairo.jpg 1x,/images/akairo@2x.jpg 2x",
          alt: "あかいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 2,
          link: "works/detail/kiiro",
          title: "きいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。黄色を取り入れたデザインをしました。",
          src: "/images/kiiro.jpg",
          srcset: "/images/kiiro.jpg 1x,/images/kiiro@2x.jpg 2x",
          alt: "きいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 3,
          link: "works/detail/murasakiiro",
          title: "むらさきいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。紫色を取り入れたデザインをしました。",
          src: "/images/murasakiiro.jpg",
          srcset: "/images/murasakiiro.jpg 1x,/images/murasakiiro@2x.jpg 2x",
          alt: "むらさきいろ株式会社のWebサイトのファーストビュー",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.p-home-section {
  position: relative;
}

.p-home-section__content {
  position: relative;
  z-index: $zIndexLv0;

  @media #{$screenSize_S} {
    display: grid;
    grid-template:
      "homeHeading homeImg" auto
      "homeParagraph homeImg" auto
      "homeButton homeImg" 1fr
      / 50% 46%;
    grid-gap: 0 4%;
  }

  &.-reverse {
    @media #{$screenSize_S} {
      grid-template:
        "homeImg homeHeading" auto
        "homeImg homeParagraph" auto
        "homeImg homeButton" 1fr
        / 46% 50%;
      grid-gap: 0 4%;
    }
  }
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

.p-home-section__head {
  @include engFont;
  opacity: 0;
  font-weight: $medium;
  display: block;

  &.is-active {
    opacity: 1;

    & span {
      @include animation(
        $name: animateFadeIn,
        $duration: .6s,
        $timing-function: ease,
        $fill-mode: both
      );
      display: inline-block;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: $i * .04s;
        }
      }
    }

    &.-aboutus {
      & span {
        &:nth-child(6) {
          width: 10px;
        }
      }
    }
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

.p-home-section__image {
  display: flex;
  grid-area: homeImg;
  align-items: center;

  & > img {
    width: 100%;
    vertical-align: bottom;
  }
  @media #{$screenSize_XS} {
    margin-top: 24px;
  }
}

.p-home-section__button {
  grid-area: homeButton;
  margin-top: 32px;
}
</style>
