<template>
  <button
    type="button"
    class="hamburger"
    :class="{ 'is-active': isActive }"
    id="js-main-menu-trigger"
    :aria-expanded="[ariaExpanded ? 'true' : 'false']"
    aria-controls="js-main-menu-area"
    @click="toggleNav();toggleClass();toggleAriaExpanded()"
  >
    <span class="hamburger__line">
      <span class="u-visuallyHidden">メニューを開閉する</span>
    </span>
    <span class="hamburger__title">
      <span class="hamburger__title-menu1">メニュー</span>
      <span class="hamburger__title-menu2">閉じる</span>
    </span>
  </button>
</template>

<script>
export default {
  // props: {
  //   ariaExpanded: {
  //     type: Boolean,
  //     default: false,
  //   }
  // },
  data() {
    return {
      ariaExpanded: false,
      isActive: false,
    }
  },
  // mounted() {
  //   document.addEventListener("DOMContentLoaded", function(){
  //     document.querySelector('.hamburger').addEventListener('click', this.toggleAriaExpanded);
  //     document.querySelector('.hamburger').addEventListener('click', this.toggleClass);
  //   });
  // },
  methods: {
    toggleNav() {
      this.$emit('toggle');
    },
    toggleAriaExpanded() {
      this.ariaExpanded = !this.ariaExpanded;
    },
    toggleClass() {
      this.isActive = !this.isActive;
    },
    closeClass() {
      this.ariaExpanded = false;
      this.isActive = false;
    }
  }
}
</script>

<style lang="scss" scroped>
.hamburger {
  @media #{$screenSize_underM} {
    position: fixed;
    right: 32px;
    bottom: 40px;
    transition: all .3s ease-in-out;
    z-index: $zIndexMax;
    margin: auto;
    outline: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(32, 32, 32, .1);
    background-image: $gradation;
    width: 56px;
    height: 56px;
  }
  @media #{$screenSize_M} {
    display: none;
  }
}

.hamburger__line {
  position: absolute;
  top: -10px;
  right: 0;
  bottom: 0;
  left: 0;
  transition: inherit;
  margin: auto;
  background: $white;
  width: 24px;
  height: 2px;
}
.hamburger__line:before,
.hamburger__line:after {
  display: block;
  position: absolute;
  transition: inherit;
  background-color: $white;
  width: 100%;
  height: 100%;
  content: "";
}
.hamburger__line:before {
  top: -6px;
}
.hamburger__line:after {
  top: 6px;
}

.hamburger[aria-expanded="true"] .hamburger__line {
  transition: .3s ease;
  background-color: transparent;
}

.hamburger[aria-expanded="true"] .hamburger__line:before,
.hamburger[aria-expanded="true"] .hamburger__line:after {
  top: 0;
  transform: rotate(-45deg);
}
.hamburger[aria-expanded="true"] .hamburger__line:before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger__title {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
}
.hamburger__title-menu1,
.hamburger__title-menu2 {
  @include fontSize(10);
  position: absolute;
  right: 0;
  bottom: 8px;
  left: 0;
  transition: .3s ease;
  color: $white;
  font-weight: $medium;
}
.hamburger__title-menu2 {
  transform: translateY(5px);
  visibility: hidden;
  opacity: 0;

  .hamburger.is-active > .hamburger__title > & {
    transform: translateY(0);
    transition: .3s ease;
    visibility: visible;
    opacity: 1;
  }
}
.hamburger__title-menu1 {
  transform: translateY(0);
  transition: .3s ease;
  visibility: visible;
  opacity: 1;

  .hamburger.is-active > .hamburger__title > & {
    transform: translateY(-5px);
    visibility: hidden;
    opacity: 0;
  }
}

.u-visuallyHidden {
  position: absolute;
  margin: -1px;
  border: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
</style>