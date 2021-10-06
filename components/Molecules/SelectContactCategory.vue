<template>
  <div class="f-input-block f-content-block__item">
    <div class="f-input-block__head">
      <label class="f-input-block__heading">お問い合わせの種類<span class="f-required">（必須）</span></label>
    </div>
    <div class="f-input-block__body">
      <div class="f-select">
        <select name="">
          <option class="f-option" value="お仕事のご依頼やご相談">お仕事のご依頼やご相談</option>
          <option class="f-option" value="協業やパートナーに関するお問い合わせ">協業やパートナーに関するお問い合わせ</option>
          <option class="f-option" value="その他のお問い合わせ">その他のお問い合わせ</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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

.f-content-block__item {
  & + .f-content-block__item {
    margin-top: 40px;
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

.f-required {
  @include fontSize(14);
  color: $requireColor;
  font-family: $headFont;
  font-weight: $medium;
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
</style>