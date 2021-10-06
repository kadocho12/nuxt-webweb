import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b5baa8b = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _4d545ac4 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _7760c9ab = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _559516f6 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _d3a41780 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _6bd06bcb = () => interopDefault(import('../pages/news/detail/index.vue' /* webpackChunkName: "pages/news/detail/index" */))
const _67b0da0a = () => interopDefault(import('../pages/works/detail/akairo.vue' /* webpackChunkName: "pages/works/detail/akairo" */))
const _2321720c = () => interopDefault(import('../pages/works/detail/kiiro.vue' /* webpackChunkName: "pages/works/detail/kiiro" */))
const _0e83fc47 = () => interopDefault(import('../pages/works/detail/murasakiiro.vue' /* webpackChunkName: "pages/works/detail/murasakiiro" */))
const _23b724bf = () => interopDefault(import('../pages/works/detail/orenjiiro.vue' /* webpackChunkName: "pages/works/detail/orenjiiro" */))
const _af928e9a = () => interopDefault(import('../pages/works/detail/pinkuiro.vue' /* webpackChunkName: "pages/works/detail/pinkuiro" */))
const _cb56b666 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7b5baa8b,
    name: "about"
  }, {
    path: "/contact",
    component: _4d545ac4,
    name: "contact"
  }, {
    path: "/news",
    component: _7760c9ab,
    name: "news"
  }, {
    path: "/services",
    component: _559516f6,
    name: "services"
  }, {
    path: "/works",
    component: _d3a41780,
    name: "works"
  }, {
    path: "/news/detail",
    component: _6bd06bcb,
    name: "news-detail"
  }, {
    path: "/works/detail/akairo",
    component: _67b0da0a,
    name: "works-detail-akairo"
  }, {
    path: "/works/detail/kiiro",
    component: _2321720c,
    name: "works-detail-kiiro"
  }, {
    path: "/works/detail/murasakiiro",
    component: _0e83fc47,
    name: "works-detail-murasakiiro"
  }, {
    path: "/works/detail/orenjiiro",
    component: _23b724bf,
    name: "works-detail-orenjiiro"
  }, {
    path: "/works/detail/pinkuiro",
    component: _af928e9a,
    name: "works-detail-pinkuiro"
  }, {
    path: "/",
    component: _cb56b666,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
