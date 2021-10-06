<template>
  <div class="l-main">
    <Breadcrumbs :breadcrumbsLists="breadcrumbsLists" />
    <div class="l-spacer -large">
      <div class="l-container -small">
        <Heading1>お問い合わせ</Heading1>
        <Paragraph>
          <span class="f-required">（必須）</span>が付いている項目は必須です。
        </Paragraph>
        <div class="l-spacer -h3">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'お問い合わせ | WEBWEB',
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
          href: "/services",
          item: "お問い合わせ",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.f-content-block__head {
  @media #{$screenSize_XS} {
    margin: {
      bottom: 18px;
    }
  }

  @media #{$screenSize_S} {
    margin: {
      bottom: 32px;
    }
  }
}

.f-content-block__item {
  & + .f-content-block__item {
    margin-top: 40px;
  }
}

.f-content-block__item--column_2 {

  & > * {
    @media #{$screenSize_XS} {
      margin-top: 22px;
    }

    @media #{$screenSize_S} {
      width: calc(50% - 20px);
    }
  }
  @media #{$screenSize_S} {
    display: flex;
    justify-content: space-between;
  }
}

.f-continue-block {
  border-top: 1px solid $borderColor;

  @media #{$screenSize_XS} {
    padding-top: 20px;
    margin: {
      top: 35px;
    }
  }

  @media #{$screenSize_S} {
    padding: 80px 40px 0 40px;
    margin: {
      top: 80px;
    }
  }
}

.f-continue-block__button {

  &:not(:first-child) {
    margin: {
      top: 40px;
    }
  }
  margin: {
    right: auto;
    left: auto;
  }
}

.f-input-block {
  border: none;

  &.-input {
    .f-input-block__head {
      @media #{$screenSize_M} {
        padding-top: .4em;
      }
    }
  }

  @media #{$screenSize_S} {
    min-height: 25px;
  }

  @media #{$screenSize_M} {
    display: flex;
  }
}

.f-input-block__head {

  .f-content-block--type_check & {
    margin: {
      bottom: 27px;
    }

    @media #{$screenSize_XS} {
      margin: {
        bottom: 14px;
      }
    }
  }
  @media #{$screenSize_XS} {
    margin: {
      bottom: 15px;
    }
  }

  @media #{$screenSize_S} {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    margin: {
      bottom: 15px;
    }
  }

  @media #{$screenSize_M} {
    box-sizing: border-box;
    margin-bottom: 0;
    padding-right: 30px;
    width: 310px;
  }
}

.f-input-block__heading {
  font: {
    family: $headFont;
    weight: $medium;
  }

  .f-required {
    margin-left: 5px;
  }

  @media #{$screenSize_XS} {
    display: inline-block;
  }

  @media #{$screenSize_S} {
    @include fontSize(16);
    // margin-right: 20px;
  }
}

.f-input-block__sub-heading {
  font: {
    family: $headFont;
    weight: $medium;
  }

  @media #{$screenSize_XS} {
    display: inline-block;
  }

  @media #{$screenSize_S} {
    @include fontSize(14);
  }
}

.f-input-block__body {
  flex: 1;
}

.f-input-block__body--type_postal-code {
  width: 200px;
}

.f-input-block__body-item {
  display: flex;
  display: -webkit-flex;
  width: 100%;

  &:first-child {
    margin: {
      left: 0;
    }
  }

  &:last-child {
    @media #{$screenSize_XS} {
      margin: {
        bottom: 0;
      }
    }
  }

  margin: {
    left: 10px;
  }

  & > .f-input-inner-text {
    line-height: 2.5;

    @media #{$screenSize_XS} {
    }
  }

  @media #{$screenSize_XS} {
    margin: {
      bottom: 10px;
      left: 0;
    }
  }
}

.f-input-block--lv_2 {
  @media #{$screenSize_S} {
    margin-top: 10px;
  }
}

.f-input-text {
  @include fontSize(16);
  -webkit-appearance: none;

  box-sizing: border-box;
  -webkit-transition: background-color .3s 0s
    cubic-bezier(.215, .61, .355, 1);
  transition: background-color .3s 0s cubic-bezier(.215, .61, .355, 1);

  background: $formBgDefaultColor;
  width: 100%;
  // -webkit-border-radius: 0;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    @media #{$screenSize_XS} {
      cursor: default;
    }

    @media #{$screenSize_S} {
      background: {
        color: #fff;
      }
    }
  }
  font: {
    family: $baseFont;
  }

  border: {
    width: $formBorderWidth;
    color: $formBorderDefaultColor;
    style: solid;
    radius: $inputElementRadius;
  }

  padding: {
    top: 9px;
    right: 14px;
    bottom: 9px;
    left: 14px;
  }

  // type="number" の▲▼ボタンを非表示
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
}

.f-input-text--type_calendar {

  background: {
    image: url("/inquiry/img/icon_calendar.svg");
    repeat: no-repeat;
    position: right 14px top 11px;
  }
  @media #{$screenSize_S} {
    width: 339px;
  }
}

.f-required {
  @include fontSize(14);
  color: $requireColor;
  font-family: $headFont;
  font-weight: $medium;
}

.f-select {
  display: block;
  position: relative;
  background: $formBgDefaultColor;
  width: 100%;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    z-index: $zIndexLv2;
    border-radius: 0 $inputElementRadius $inputElementRadius 0;
    background-image: $gradation;
    width: 40px;
    height: calc(100%);
    content: "";
    pointer-events: none;
  }

  &:after {
    background-image: url(/images/arrow-bottom.svg);
    background: {
      repeat: no-repeat;
      position: 50% 50%;
    }
    position: absolute;
    top: calc(50% - 2px);
    right: 17px;
    transform: rotate(90deg);
    z-index: $zIndexLv3;
    width: 8px;
    height: 8px;
    content: "";
    pointer-events: none;
    background: {
      repeat: no-repeat;
      size: contain;
    }
  }

  & > select {

    @include fontSize(16);
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    z-index: $zIndexLv1;

    background: transparent;
    cursor: pointer;
    cursor: pointer;
    width: 100%;
    line-height: 1.5;

    &::-ms-expand {
      display: none;
    }

    padding: {
      top: 9px;
      right: 50px;
      bottom: 10px;
      left: 14px;
    }

    border: {
      width: $formBorderWidth;
      color: $formBorderDefaultColor;
      style: solid;
      radius: $inputElementRadius;
    }

    font: {
      family: $baseFont;
    }

    @media #{$screenSize_XS} {
      height: 44px;
    }

    @media #{$screenSize_S} {
    }
  }
}

.f-select--size_50per {
  @media #{$screenSize_S} {
    width: 50%;
  }
}

.f-textarea {
  @include fontSize(16);
  -webkit-appearance: none;

  box-sizing: border-box;
  -webkit-transition: all .3s 0s cubic-bezier(.215, .61, .355, 1);
  transition: all .3s 0s cubic-bezier(.215, .61, .355, 1);
  background: $formBgDefaultColor;
  width: 100%;
  font-family: $headFont;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    @media #{$screenSize_XS} {
      cursor: default;
    }

    @media #{$screenSize_S} {
      background: {
        color: $white;
      }
    }
  }

  border: {
    width: $formBorderWidth;
    color: $formBorderDefaultColor;
    style: solid;
    radius: $inputElementRadius;
  }

  padding: {
    top: 9px;
    right: 14px;
    bottom: 9px;
    left: 14px;
  }

  .browser-is-ie & {
    overflow: auto;
  }

  @media #{$screenSize_XS} {
    height: 180px;
  }

  @media #{$screenSize_S} {
    width: 100%;
    height: 200px;
    // max-width: 680px;
  }
}
</style>