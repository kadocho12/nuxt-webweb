<template>
  <div id="top" class="l-root-container">
    <div ref="header">
      <Header />
    </div>
    <Nuxt />
    <Contact />
    <PageTop :headerHeightFromDefault="this.headerHegiht" />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHegiht: 0,
    }
  },
  mounted() {
    this.headerHegiht = this.$refs.header.querySelector("#js-header").clientHeight;
  },
}
</script>