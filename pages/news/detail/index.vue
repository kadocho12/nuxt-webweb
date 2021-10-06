<template>
  <div class="l-main">
    <Breadcrumbs :breadcrumbsLists="breadcrumbsLists" />
    <section class="l-spacer -large">
      <div class="l-container -small">
        <div class="p-detail-head">
          <h1 class="p-detail-head__heading">架空の記事の内容までは考えられませんでした！</h1>
          <ul class="p-detail-head__list">
            <li class="p-detail-head__item">
              <time datetime="2020-08-01">2020.08.01</time>
            </li>
            <li class="p-detail-head__item">お知らせ</li>
          </ul>
        </div>
        <div class="p-edit-area">
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。<a href="#" data-ol-has-click-handler="">ダミーテキストです。</a>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <h2>見出しが入ります。</h2>
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。<a href="#" data-ol-has-click-handler="">ダミーテキストです。</a>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <h3>見出しが入ります。</h3>
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <ul>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
          </ul>
          <p>
            ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。<a href="#" data-ol-has-click-handler="">ダミーテキストです。</a>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <ol>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
            <li>ダミーテキストです。</li>
          </ol>
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。<a href="#" data-ol-has-click-handler="">ダミーテキストです。</a>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
          <p><img src="/images/news/detail/img_01@2x.jpg" alt=""></p>
          <p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'お知らせ詳細（テンプレート） | WEBWEB',
  },
  data() {
    return {
      breadcrumbsLists: [
        {
          id: 1,
          href: "/",
          item: "ホーム",
        },
        {
          id: 2,
          href: "/news",
          item: "お知らせ",
        },
        {
          id: 3,
          href: "/news/detail",
          item: "お知らせ詳細ページ",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.p-detail-head {
  @media #{$screenSize_XS} {
    padding-bottom: 48px;
  }
  @media #{$screenSize_S} {
    padding-bottom: 64px;
  }
}

.p-detail-head__heading {
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

.p-detail-head__list {
  display: flex;
  @media #{$screenSize_XS} {
    margin-top: 16px;
  }
  @media #{$screenSize_S} {
    margin-top: 24px;
  }
}

.p-detail-head__item {

  &::before {
    content: "｜";
    @media #{$screenSize_XS} {
      margin-right: 2px;
      margin-left: 2px;
    }
    @media #{$screenSize_S} {
      margin-right: 4px;
      margin-left: 4px;
    }
  }

  &:first-child {
    &::before {
      display: none;
    }
  }
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}

.p-edit-area {
  /* 段落 */
  & p {
    @include lineHeightCrop(1.5);
    line-height: 1.5;

    &:first-child {
      margin-top: 0;
    }

    & > a {
      color: #0000ee;
      transition: color .6s ease;
      &:hover {
        @media #{$screenSize_M} {
          color: $linkColor;
        }
      }
    }

    & > img {
      &:first-child {
        @include lineHeightFixTop(1.5);
      }
      &:last-child {
        @include lineHeightFixBottom(1.5);
      }

      & + img {
        margin-top: 16px;
      }
    }
    @media #{$screenSize_XS} {
      @include fontSize(14);
      margin-top: 21px;
    }
    @media #{$screenSize_S} {
      @include fontSize(16);
      margin-top: 24px;
    }
  }

  /* 強調文字 */
  & strong {
    font-weight: $medium;
  }

  /* 見出し
  ----------------------------------------------------------------- */
  & h2 {
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

    &:first-child {
      margin-top: 0;
    }

    @media #{$screenSize_XS} {
      margin-top: 50px;
      margin-bottom: 40px;
    }
    @media #{$screenSize_S} {
      margin-top: 80px;
      margin-bottom: 48px;
    }
  }

  & h3 {
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

    &:first-child {
      margin-top: 0;
    }

    @media #{$screenSize_XS} {
      margin-top: 40px;
      margin-bottom: 32px;
    }
    @media #{$screenSize_S} {
      margin-top: 64px;
      margin-bottom: 40px;
    }
  }

  /* 丸リスト
  ----------------------------------------------------------------- */
  & ul {
    line-height: 1.75;

    & li {
      position: relative;
      margin-top: 6px;
      line-height: 1.5;
    }

    @media #{$screenSize_XS} {
      @include fontSize(16);
    }
    @media #{$screenSize_S} {
      @include fontSize(18);
    }

    @include lineHeightCrop(1.5);

    line-height: 1.5;

    &:first-child {
      margin-top: 0;
    }

    & > li {

      &:before {
        position: absolute;
        // @include lineHeightFixTop(1.5);

        top: .65em;
        left: 1px;
        border-radius: 50%;
        background-color: $mainColor;
        width: 5px;
        height: 5px;
        content: "";
        .browser-is-ie & {
          top: .5em;
        }
      }

      &:first-child {
        margin-top: 0;
      }
      @media #{$screenSize_XS} {
        margin-top: 4px;
        padding-left: 16px;
      }
      @media #{$screenSize_S} {
        margin-top: 8px;
        padding-left: 22px;
      }
    }

    @media #{$screenSize_XS} {
      @include fontSize(14);
      margin-top: 21px;
    }
    @media #{$screenSize_S} {
      @include fontSize(16);
      margin-top: 24px;
    }
  }

  /* 数字リスト
  ----------------------------------------------------------------- */
  & ol {
    line-height: 1.75;

    & li {
      position: relative;
      margin-top: 6px;
      line-height: 1.5;
    }

    @media #{$screenSize_XS} {
      @include fontSize(16);
    }
    @media #{$screenSize_S} {
      @include fontSize(18);
    }
    @include lineHeightCrop(1.5);
    line-height: 1.5;

    counter-reset: number;

    &:first-child {
      margin-top: 0;
    }

    & > li {
      position: relative;

      &:before {
        @include engFont;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        color: $mainColor;
        font-weight: $medium;
        content: counter(number) ".";
        counter-increment: number;
      }

      &:first-child {
        margin-top: 0;
      }
      @media #{$screenSize_XS} {
        margin-top: 4px;
        padding-left: 16px;
      }
      @media #{$screenSize_S} {
        margin-top: 8px;
        padding-left: 22px;
      }
    }

    @media #{$screenSize_XS} {
      @include fontSize(14);
      margin-top: 21px;
    }
    @media #{$screenSize_S} {
      @include fontSize(16);
      margin-top: 24px;
    }
  }

  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* リンク
  ----------------------------------------------------------------- */
  & > a {
    @include lineHeightCrop(1.5);
    display: inline;

    position: relative;
    transition: color .6s ease;
    text-decoration: none;
    line-height: 1.5;

    &::before {
      display: inline-block;
      position: absolute;
      right: 12px;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid $mainColor;
      content: "";
    }

    &:hover {
      @media #{$screenSize_M} {
        color: $linkColor;
      }
    }
  }
}

.p-edit-area__main-img {
  position: relative;

  & > img {
    // width: 100%;
    margin: {
      right: auto;
      left: auto;
    }
  }
}
</style>