<template>
  <div
    class="breadcrumbs"
    :class="{ '-onVisual': onVisual }"
  >
    <ul class="breadcrumbs__inner">
      <li
        v-for="(breadcrumbsList, index) in breadcrumbsLists"
        v-bind:key="breadcrumbsList.id"
        class="breadcrumbs__item"
      >
        <template
          v-if="index === breadcrumbsLists.length - 1"
        >{{ breadcrumbsList.item }}</template>
        <nuxt-link
          v-else
          :to="breadcrumbsList.href"
          v-text="breadcrumbsList.item"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    onVisual: {
      type: Boolean,
      require: false,
      default: false,
    },
    breadcrumbsLists: {
      type: Array,
      require: true,
    },
    href: {
      type: String,
      require: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: $zIndexLv1;
  width: 100%;
  @media #{$screenSize_XS} {
    display: none;
  }
}

.breadcrumbs__inner {
  display: flex;
  padding-top: 15px;
  width: 90%;
  overflow: hidden;
  margin: {
    right: auto;
    left: auto;
  }
}

.breadcrumbs__item {
  @include fontSize(13);
  position: relative;
  padding-left: 12px;
  white-space: nowrap;
  color: $textColor;

  &:first-child {
    padding-left: 0;

    &:before {
      display: none;
    }
  }

  &:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:before {
    display: inline;
    margin-right: 12px;
    content: "/";
  }

  & > a {
    text-decoration: underline;
    color: $textColor;
  }

  & > span {
    margin: {
      right: 15px;
      left: 10px;
    }
  }
}

/* モディファイア
---------------------------------------------------- */

.breadcrumbs.-onVisual {
  .breadcrumbs__item {
    color: $white;
    & > a {
      color: $white;
    }
  }
}
</style>