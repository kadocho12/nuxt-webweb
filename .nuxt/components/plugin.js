import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  ButtonComponent: () => import('../../components/Atoms/ButtonComponent.vue' /* webpackChunkName: "components/button-component" */).then(c => wrapFunctional(c.default || c)),
  Hamburger: () => import('../../components/Atoms/Hamburger.vue' /* webpackChunkName: "components/hamburger" */).then(c => wrapFunctional(c.default || c)),
  Heading1: () => import('../../components/Atoms/Heading1.vue' /* webpackChunkName: "components/heading1" */).then(c => wrapFunctional(c.default || c)),
  Heading2: () => import('../../components/Atoms/Heading2.vue' /* webpackChunkName: "components/heading2" */).then(c => wrapFunctional(c.default || c)),
  Heading3: () => import('../../components/Atoms/Heading3.vue' /* webpackChunkName: "components/heading3" */).then(c => wrapFunctional(c.default || c)),
  ImageComponent: () => import('../../components/Atoms/ImageComponent.vue' /* webpackChunkName: "components/image-component" */).then(c => wrapFunctional(c.default || c)),
  PageTop: () => import('../../components/Atoms/PageTop.vue' /* webpackChunkName: "components/page-top" */).then(c => wrapFunctional(c.default || c)),
  Paragraph: () => import('../../components/Atoms/Paragraph.vue' /* webpackChunkName: "components/paragraph" */).then(c => wrapFunctional(c.default || c)),
  Breadcrumbs: () => import('../../components/Molecules/Breadcrumbs.vue' /* webpackChunkName: "components/breadcrumbs" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../components/Molecules/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  ContentsHeading: () => import('../../components/Molecules/ContentsHeading.vue' /* webpackChunkName: "components/contents-heading" */).then(c => wrapFunctional(c.default || c)),
  InputMail: () => import('../../components/Molecules/InputMail.vue' /* webpackChunkName: "components/input-mail" */).then(c => wrapFunctional(c.default || c)),
  InputName: () => import('../../components/Molecules/InputName.vue' /* webpackChunkName: "components/input-name" */).then(c => wrapFunctional(c.default || c)),
  InputNameKana: () => import('../../components/Molecules/InputNameKana.vue' /* webpackChunkName: "components/input-name-kana" */).then(c => wrapFunctional(c.default || c)),
  InputText: () => import('../../components/Molecules/InputText.vue' /* webpackChunkName: "components/input-text" */).then(c => wrapFunctional(c.default || c)),
  NewsList: () => import('../../components/Molecules/NewsList.vue' /* webpackChunkName: "components/news-list" */).then(c => wrapFunctional(c.default || c)),
  PageHeading: () => import('../../components/Molecules/PageHeading.vue' /* webpackChunkName: "components/page-heading" */).then(c => wrapFunctional(c.default || c)),
  SelectContactCategory: () => import('../../components/Molecules/SelectContactCategory.vue' /* webpackChunkName: "components/select-contact-category" */).then(c => wrapFunctional(c.default || c)),
  ServiceBlock: () => import('../../components/Molecules/ServiceBlock.vue' /* webpackChunkName: "components/service-block" */).then(c => wrapFunctional(c.default || c)),
  Slider: () => import('../../components/Molecules/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../../components/Organisms/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  ContactForm: () => import('../../components/Organisms/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Organisms/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Organisms/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
