<template>
  <header
    class="header"
    id="js-header"
    ref="piyopiyo"
  >
    <div class="l-container">
      <div class="header__inner">
        <div class="header__logo">
          <nuxt-link class="header__logo-link" to="/"></nuxt-link>
        </div>
        <nav
          class="header__nav"
          :class="{ 'is-active': headerNavIsActive }"
          id="js-main-menu-area"
        >
          <ul
            class="header-menu"
            :class="{ 'is-active': headerMenuIsActive }"
          >
            <li
              v-for="menuList in menuLists"
              v-bind:key="menuList.id"
              class="header-menu__item"
            >
              <nuxt-link
                :to="menuList.link"
                class="header-menu__link"
                @click.native="headerNavIsActive = false; headerMenuIsActive = false; close();"
              >
                <span class="header-menu__text">
                  {{ menuList.title }}
                </span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <Hamburger
          ref="hamburger"
          @toggle="toggleClass"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerNavIsActive: false,
      headerMenuIsActive: false,
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
      ],
      headerHeight2: 0,
    }
  },
  mounted() {
    this.headerHeight2 = this.$refs.piyopiyo.clientHeight;
    console.log(this.headerHeight2);

    this.$emit('scrollPageTop', this.headerHeight2);
  },
  methods: {
    toggleClass() {
      this.headerNavIsActive = !this.headerNavIsActive;
      this.headerMenuIsActive = !this.headerMenuIsActive;
    },
    close() {
      this.$refs.hamburger.closeClass();
    }
    // scrollPageTop() {
    //   this.$emit('scrollPageTop', this.fugafuga);
    //   console.log('scroll');
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: $headerShadow;
  background-color: $white;

  @media #{$screenSize_M} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zIndexMax;
    width: 100%;
  }
}

.header__inner {
  display: flex;

  @media #{$screenSize_underM} {
    justify-content: center;
  }
}

.header__logo {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 160px;

  @media #{$screenSize_underM} {
    max-width: 96px;
  }
}

.header__logo-link {
  display: block;
  background-image: url("/images/logo.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  font-size: 0;

  @media #{$screenSize_underM} {
    padding: 20px 0;
  }
}

.header__nav {
  flex: 1;
  transition: $largeTransition;
  z-index: $zIndexMax;
  background-color: $white;

  &.is-active {
    transition: .2s ease;
    visibility: visible;
    opacity: 1;
  }

  @media #{$screenSize_underM} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: .3s ease;
    visibility: hidden;
    opacity: 0;
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  @media #{$screenSize_M} {
    display: flex;
    position: static;
    grid-column: 2/2;
    align-items: center;
    justify-content: flex-end;
    transform: none;
    width: auto;
    height: auto;
    overflow: visible;
  }
}

.header-menu {

  .header__nav.is-active & {
    transform: translateY(0);
    transition: .3s ease;
    visibility: visible;
    opacity: 1;
  }
  @media #{$screenSize_underM} {
    position: relative;
    transform: translateY(8px);
    transition: .2s ease;
    visibility: hidden;
    opacity: 0;
  }
  @media #{$screenSize_M} {
    display: flex;
  }
}

.header-menu__item {
  @media #{$screenSize_underM} {
    border-top: 1px solid #ddd;
    &:last-child {
      border-bottom: 1px solid #ddd;
    }
  }
}

.header-menu__link {
  display: block;
  position: relative;
  line-height: 1.4;
  color: $textColor;
  font-weight: $medium;

  @media #{$screenSize_underM} {
    @include fontSize(13);
    padding: 14px 0;
  }
  @media #{$screenSize_M} {
    padding: 29px 24px;
  }
  @media #{$screenSize_L} {
    @include fontSize(16);
    padding: 29px 28px;
  }
}
</style>