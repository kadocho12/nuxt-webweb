<template>
  <div class="p-news">
    <div class="p-news__list">
      <article
        v-for="newsList in newsLists"
        v-bind:key="newsList.id"
        class="p-news__item"
      >
        <nuxt-link
          class="p-news__link"
          :to="newsList.link"
        >
          <div class="p-news__info">
            <time
              class="p-news__date"
              :datetime="newsList.datetime"
            >
              {{ newsList.time }}
            </time>
            <span
              v-if="newsList.category==='news'"
              class="p-news__category -news"
            >
              お知らせ
            </span>
            <span
              v-else-if="newsList.category==='blog'"
              class="p-news__category -blog"
            >
              ブログ
            </span>
          </div>
          <p class="p-news__text">
            {{ newsList.title }}
          </p>
        </nuxt-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsLists: [
        {
          id: 1,
          title: "WebメディアのMEDIAMEDIAに掲載されました。",
          link: "/news/detail",
          datetime: "2020-07-29",
          time: "2020.07.29",
          category: "news",
        },
        {
          id: 2,
          title: "新型コロナウイルス対策について",
          link: "/news/detail",
          datetime: "2020-03-05",
          time: "2020.03.05",
          category: "news",
        },
        {
          id: 3,
          title: "FLOCSSの考え方",
          link: "/news/detail",
          datetime: "2020-02-01",
          time: "2020.02.01",
          category: "blog",
        },
        {
          id: 4,
          title: "JavaScriptのES6で書いてみた",
          link: "/news/detail",
          datetime: "2020-01-18",
          time: "2020.01.18",
          category: "blog",
        },
        {
          id: 5,
          title: "年末年始の営業について",
          link: "/news/detail",
          datetime: "2019-12-20",
          time: "2019.12.20",
          category: "news",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.p-news {
  @include setNextSpace;
}

.p-news__item {

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
  border: {
    top: 1px solid #ccc;
  }
}

.p-news__link {
  display: block;
  transition: opacity .4s ease;
  padding: 12px 8px;

  &:hover {
    @media #{$screenSize_M} {
      opacity: .6;
    }
  }

  @media #{$screenSize_S} {
    display: flex;
    align-items: center;
    padding: 16px;
  }
}

.p-news__info {
  display: flex;
  align-items: center;
}

.p-news__date {
  color: $textColor;
  @media #{$screenSize_XS} {
    @include fontSize(14);
  }
  @media #{$screenSize_S} {
    @include fontSize(16);
  }
}

.p-news__category {
  display: inline-block;
  margin-left: 16px;
  padding: 4px;
  text-align: center;
  color: $white;

  &.-news {
    background: {
      color: $mainColor;
    }
  }
  &.-blog {
    background: {
      color: $orengeColor;
    }
  }
  @media #{$screenSize_XS} {
    @include fontSize(10);
    min-width: 56px;
  }
  @media #{$screenSize_S} {
    @include fontSize(12);
    min-width: 64px;
  }
}

.p-news__text {
  color: $textColor;
  @media #{$screenSize_XS} {
    @include fontSize(14);
    margin-top: 4px;
  }
  @media #{$screenSize_S} {
    margin-left: 16px;
  }
}
</style>