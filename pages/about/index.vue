<template>
  <div class="l-main">
    <Breadcrumbs onVisual :breadcrumbsLists="breadcrumbsLists" />
    <PageHeading about>
      <template v-slot:main>
        About us
      </template>
      <template v-slot:sub>
        私たちについて
      </template>
    </PageHeading>
    <div class="l-spacer -large">
      <div class="l-container -small">
        <section class="l-spacer -h2">
          <Heading2>Web制作でお客様のビジネスに貢献します</Heading2>
          <ImageComponent
            src="/images/about/img_about_01@2x.jpg"
            alt="窓際でノートパソコンを操作している人の画像"
          />
          <Paragraph>Webサイトは、うまく活用できればビジネスに大きな効果をもたらします。そのためには、専門的な知識が必要です。私たちは、専門的な知識を持ったメンバーが揃っています。今まで培ったノウハウを用い、質の高いWebサイトを制作いたします。</Paragraph>
        </section>
        <section class="l-spacer -h2">
          <Heading2>わかりやすいデザインを心がけています</Heading2>
          <Paragraph>かっこいいWebサイトはたくさんありますが、重すぎて読み込みに時間がかかり離脱してしまったり、情報設計が十分でなかったりします。制作時は、ユーザー目線を忘れずに、わかりやすい、読みやすいWebサイトを目指します。</Paragraph>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '私たちについて | WEBWEB',
  },
  layout: 'default',
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
          item: "私たちについて",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>