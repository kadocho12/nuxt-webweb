import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ButtonComponent } from '../../components/Atoms/ButtonComponent.vue'
export { default as Hamburger } from '../../components/Atoms/Hamburger.vue'
export { default as Heading1 } from '../../components/Atoms/Heading1.vue'
export { default as Heading2 } from '../../components/Atoms/Heading2.vue'
export { default as Heading3 } from '../../components/Atoms/Heading3.vue'
export { default as ImageComponent } from '../../components/Atoms/ImageComponent.vue'
export { default as PageTop } from '../../components/Atoms/PageTop.vue'
export { default as Paragraph } from '../../components/Atoms/Paragraph.vue'
export { default as Breadcrumbs } from '../../components/Molecules/Breadcrumbs.vue'
export { default as Card } from '../../components/Molecules/Card.vue'
export { default as ContentsHeading } from '../../components/Molecules/ContentsHeading.vue'
export { default as InputMail } from '../../components/Molecules/InputMail.vue'
export { default as InputName } from '../../components/Molecules/InputName.vue'
export { default as InputNameKana } from '../../components/Molecules/InputNameKana.vue'
export { default as InputText } from '../../components/Molecules/InputText.vue'
export { default as NewsList } from '../../components/Molecules/NewsList.vue'
export { default as PageHeading } from '../../components/Molecules/PageHeading.vue'
export { default as SelectContactCategory } from '../../components/Molecules/SelectContactCategory.vue'
export { default as ServiceBlock } from '../../components/Molecules/ServiceBlock.vue'
export { default as Slider } from '../../components/Molecules/Slider.vue'
export { default as Contact } from '../../components/Organisms/Contact.vue'
export { default as ContactForm } from '../../components/Organisms/ContactForm.vue'
export { default as Footer } from '../../components/Organisms/Footer.vue'
export { default as Header } from '../../components/Organisms/Header.vue'

export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonComponent = import('../../components/Atoms/ButtonComponent.vue' /* webpackChunkName: "components/button-component" */).then(c => wrapFunctional(c.default || c))
export const LazyHamburger = import('../../components/Atoms/Hamburger.vue' /* webpackChunkName: "components/hamburger" */).then(c => wrapFunctional(c.default || c))
export const LazyHeading1 = import('../../components/Atoms/Heading1.vue' /* webpackChunkName: "components/heading1" */).then(c => wrapFunctional(c.default || c))
export const LazyHeading2 = import('../../components/Atoms/Heading2.vue' /* webpackChunkName: "components/heading2" */).then(c => wrapFunctional(c.default || c))
export const LazyHeading3 = import('../../components/Atoms/Heading3.vue' /* webpackChunkName: "components/heading3" */).then(c => wrapFunctional(c.default || c))
export const LazyImageComponent = import('../../components/Atoms/ImageComponent.vue' /* webpackChunkName: "components/image-component" */).then(c => wrapFunctional(c.default || c))
export const LazyPageTop = import('../../components/Atoms/PageTop.vue' /* webpackChunkName: "components/page-top" */).then(c => wrapFunctional(c.default || c))
export const LazyParagraph = import('../../components/Atoms/Paragraph.vue' /* webpackChunkName: "components/paragraph" */).then(c => wrapFunctional(c.default || c))
export const LazyBreadcrumbs = import('../../components/Molecules/Breadcrumbs.vue' /* webpackChunkName: "components/breadcrumbs" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../components/Molecules/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyContentsHeading = import('../../components/Molecules/ContentsHeading.vue' /* webpackChunkName: "components/contents-heading" */).then(c => wrapFunctional(c.default || c))
export const LazyInputMail = import('../../components/Molecules/InputMail.vue' /* webpackChunkName: "components/input-mail" */).then(c => wrapFunctional(c.default || c))
export const LazyInputName = import('../../components/Molecules/InputName.vue' /* webpackChunkName: "components/input-name" */).then(c => wrapFunctional(c.default || c))
export const LazyInputNameKana = import('../../components/Molecules/InputNameKana.vue' /* webpackChunkName: "components/input-name-kana" */).then(c => wrapFunctional(c.default || c))
export const LazyInputText = import('../../components/Molecules/InputText.vue' /* webpackChunkName: "components/input-text" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsList = import('../../components/Molecules/NewsList.vue' /* webpackChunkName: "components/news-list" */).then(c => wrapFunctional(c.default || c))
export const LazyPageHeading = import('../../components/Molecules/PageHeading.vue' /* webpackChunkName: "components/page-heading" */).then(c => wrapFunctional(c.default || c))
export const LazySelectContactCategory = import('../../components/Molecules/SelectContactCategory.vue' /* webpackChunkName: "components/select-contact-category" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceBlock = import('../../components/Molecules/ServiceBlock.vue' /* webpackChunkName: "components/service-block" */).then(c => wrapFunctional(c.default || c))
export const LazySlider = import('../../components/Molecules/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const LazyContact = import('../../components/Organisms/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyContactForm = import('../../components/Organisms/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Organisms/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Organisms/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
