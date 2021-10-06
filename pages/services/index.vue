<template>
  <div class="l-main">
    <Breadcrumbs onVisual :breadcrumbsLists="breadcrumbsLists" />
    <PageHeading services>
      <template v-slot:main>
        Services
      </template>
      <template v-slot:sub>
        サービス
      </template>
    </PageHeading>
    <div class="l-spacer -large">
      <div class="l-container -small">
        <section class="l-spacer -h2">
          <Heading2>サービスの流れ</Heading2>
          <Paragraph>Webサイトは、うまく活用できればビジネスに大きな効果をもたらします。そのためには、専門的な知識が必要です。私たちは、専門的な知識を持ったメンバーが揃っています。今まで培ったノウハウを用い、質の高いWebサイトを制作いたします。</Paragraph>
          <section class="l-spacer -h3">
            <Heading3>戦略</Heading3>
            <ServiceBlock
              src="/images/services/img_services_01@2x.jpg"
              alt="テーブルを囲む8人分の椅子がある会議室の画像"
            >
              ターゲットの選定や競合サイトの調査から、どのような狙いを持たせるかといった各種設計など、Webサイトの効果を最大限発揮できるように、戦略を立てます。
            </ServiceBlock>
          </section>
          <section class="l-spacer -h3">
            <Heading3>企画や設計</Heading3>
            <ServiceBlock
              src="/images/services/img_services_02@2x.jpg"
              alt="ホワイトボードに付箋を貼りながら5人でアイデアを出し合う様子"
            >
              戦略に沿って、コンテンツの企画やコピーを制作し、情報設計、プロトタイプ作成、制作ルール決め、要件定義など、見える化します。
            </ServiceBlock>
          </section>
          <section class="l-spacer -h3">
            <Heading3>制作・実装</Heading3>
            <ServiceBlock
              src="/images/services/img_services_03@2x.jpg"
              alt="ホワイトボードに付箋を貼りながら5人でアイデアを出し合う様子"
            >
              戦略に沿って、コンテンツの企画やコピーを制作し、情報設計、プロトタイプ作成、制作ルール決め、要件定義など、見える化します。
            </ServiceBlock>
          </section>
          <section class="l-spacer -h3">
            <Heading3>制作・実装</Heading3>
            <ServiceBlock
              src="/images/services/img_services_04@2x.jpg"
              alt="ホワイトボードに付箋を貼りながら5人でアイデアを出し合う様子"
            >
              デザイン、HTML/CSS/JavaScriptを用いた静的コーディング、その後必要ならばCMSの実装を行います。
            </ServiceBlock>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'サービス | WEBWEB',
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
          href: "/services",
          item: "サービス",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>