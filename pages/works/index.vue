<template>
  <div class="l-main">
    <Breadcrumbs onVisual :breadcrumbsLists="breadcrumbsLists" />
    <PageHeading works>
      <template v-slot:main>
        Works
      </template>
      <template v-slot:sub>
        実績
      </template>
    </PageHeading>
    <div class="l-spacer -large">
      <div class="l-container -small">
        <section class="l-spacer -h2">
          <Heading2>今までに制作してきたWebサイトです</Heading2>
          <div class="l-grid -gutter">
            <article
              class="l-grid__item -sp12Of12 -tab4Of12"
              v-for="imgList in imgLists"
              v-bind:key="imgList.id"
            >
              <Card
                :link="imgList.link"
                :src="imgList.src"
                :srcset="imgList.srcset"
                :alt="imgList.alt"
              >
                <template v-slot:title>
                  {{ imgList.title }}
                </template>
                <template v-slot:text>
                  {{ imgList.description }}
                </template>
              </Card>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '実績 | WEBWEB',
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
          item: "実績",
        },
      ],
      imgLists: [
        {
          id: 1,
          link: "works/detail/akairo",
          title: "あかいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。赤色を取り入れたデザインをしました。",
          src: "/images/akairo.jpg",
          srcset: "/images/akairo.jpg 1x,/images/akairo@2x.jpg 2x",
          alt: "あかいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 2,
          link: "works/detail/kiiro",
          title: "きいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。黄色を取り入れたデザインをしました。",
          src: "/images/kiiro.jpg",
          srcset: "/images/kiiro.jpg 1x,/images/kiiro@2x.jpg 2x",
          alt: "きいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 3,
          link: "works/detail/murasakiiro",
          title: "むらさきいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。紫色を取り入れたデザインをしました。",
          src: "/images/murasakiiro.jpg",
          srcset: "/images/murasakiiro.jpg 1x,/images/murasakiiro@2x.jpg 2x",
          alt: "むらさきいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 4,
          link: "works/detail/orenjiiro",
          title: "おれんじいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。オレンジ色を取り入れたデザインをしました。",
          src: "/images/orenjiiro.jpg",
          srcset: "/images/orenjiiro.jpg 1x,/images/orenjiiro@2x.jpg 2x",
          alt: "おれんじいろ株式会社のWebサイトのファーストビュー",
        },
        {
          id: 5,
          link: "works/detail/pinkuiro",
          title: "ぴんくいろ株式会社",
          description: "コーポレートサイトの制作を担当させていただきました。ピンク色を取り入れたデザインをしました。",
          src: "/images/pinkuiro.jpg",
          srcset: "/images/pinkuiro.jpg 1x,/images/pinkuiro@2x.jpg 2x",
          alt: "ぴんくいろ株式会社のWebサイトのファーストビュー",
        },
      ],
    }
  }
}
</script>

<style>

</style>