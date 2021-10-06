<template>
  <footer class="l-footer footer">
    <div class="l-spacer -footerBody">
      <div class="l-container">
        <div class="footer__body">
          <div class="footer__company">
            <div class="footer__logo">
              <nuxt-link class="footer__logo-link" to="/"></nuxt-link>
            </div>
            <ul class="footer__address">
              <li class="footer__address-item">〒000-0000</li>
              <li class="footer__address-item">北海道札幌市無無市無無区0-00</li>
            </ul>
          </div>
          <div class="footer__info">
            <ul class="l-grid -gutter footer__info-list">
              <li
                v-for="menuList in menuLists"
                v-bind:key="menuList.id"
                class="l-grid__item -sp12Of12 -tab6Of12 footer__info-item"
              >
                <nuxt-link
                  :to="menuList.link"
                >
                  {{ menuList.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="l-spacer">
      <div class="footer__bottom">
        <div class="l-container">
          <div class="footer__copy"><small>copyright@webweb</small></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        {
          id: 1,
          title: "ホーム",
          link: "/",
        },
        {
          id: 2,
          title: "私たちについて",
          link: "/about",
        },
        {
          id: 3,
          title: "実績",
          link: "/works",
        },
        {
          id: 4,
          title: "サービス",
          link: "/services",
        },
        {
          id: 5,
          title: "お知らせ",
          link: "/news",
        },
        {
          id: 6,
          title: "お問い合わせ",
          link: "/contact",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
.footer {
  color: $white;
  background: {
    color: $footerColor;
  }
}

.footer__body {
  @media #{$screenSize_S} {
    display: flex;
    justify-content: space-between;
  }
}

.footer__logo {
  width: 100%;
  @media #{$screenSize_XS} {
    max-width: 92px;
    height: 16px;
  }
  @media #{$screenSize_S} {
    max-width: 160px;
    height: 28px;
  }
}

.footer__logo-link {
  display: block;
  background-image: url("/images/footer-logo.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  font-size: 0;
}

.footer__address {
  @media #{$screenSize_XS} {
    @include fontSize(12);
    margin-top: 16px;
  }
  @media #{$screenSize_S} {
    @include fontSize(14);
    margin-top: 24px;
  }
}

.footer__info {
  @media #{$screenSize_XS} {
    margin-top: 24px;
  }
}

.footer__info-list {
  color: $white;
  @media #{$screenSize_S} {
    max-width: 320px;
  }
}

.footer__info-item {
  flex-direction: row;

  & > a {
    @include fontSize(12);
    display: inline-block;
    color: $white;
  }
  @media #{$screenSize_M} {
    width: auto;
  }
}

.footer__info-title {
  &::before {
    display: inline-block;
    content: "-";
    @media #{$screenSize_XS} {
      margin-right: 12px;
    }
    @media #{$screenSize_S} {
      margin-right: 8px;
    }
  }
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}

.footer__info-body {
  @media #{$screenSize_XS} {
    margin-top: 8px;
  }
  @media #{$screenSize_S} {
    margin-top: 12px;
  }
}

.footer__bottom {
  background: $gradation 0 0/200% 3px no-repeat;
  padding: 27px 0 24px;
}

.footer__copy {
  text-align: center;
  @media #{$screenSize_XS} {
    @include fontSize(12);
  }
}
</style>