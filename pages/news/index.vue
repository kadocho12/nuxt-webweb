<template>
  <div class="l-main">
    <Breadcrumbs onVisual :breadcrumbsLists="breadcrumbsLists" />
    <PageHeading news>
      <template v-slot:main>
        News
      </template>
      <template v-slot:sub>
        お知らせ
      </template>
    </PageHeading>
    <div class="l-spacer -large">
      <div class="l-container -small">
        <section class="l-spacer -h2">
          <Heading2>お知らせ一覧</Heading2>
          <NewsList />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'お知らせ | WEBWEB',
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
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>