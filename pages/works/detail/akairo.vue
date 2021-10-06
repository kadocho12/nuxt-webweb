<template>
  <div class="l-main">
    <Breadcrumbs :breadcrumbsLists="breadcrumbsLists" />
    <section class="l-spacer -large">
      <div class="l-container -small">
        <Heading2>
          あかいろ株式会社
        </Heading2>
        <Paragraph>
          コーポレートサイトの制作を担当させていただきました。赤色を取り入れたデザインをしました。
        </Paragraph>
        <ImageComponent
          :src="'/images/works/detail/img_akairo@2x.jpg'"
          :alt="'あかいろ株式会社のWebサイトのスクリーンショット'"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'あかいろ株式会社 | WEBWEB',
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
          href: "/works",
          item: "実績",
        },
        {
          id: 3,
          href: "/works/detail",
          item: "あかいろ株式会社",
        },
      ]
    }
  },
}
</script>

<style>

</style>