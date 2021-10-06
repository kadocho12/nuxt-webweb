<template>
  <form action="" method="" name="">
    <SelectContactCategory />
    <InputName />
    <InputNameKana />
    <InputMail />
    <InputText />
    <div class="f-continue-block">
      <div class="f-continue-block__button">
        <ButtonComponent center>確認画面へ進むことはできない</ButtonComponent>
      </div>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>