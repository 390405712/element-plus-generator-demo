import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "vue"
import { getQueryString } from '@/utils'

// const VNode = {
//   render: () => (_openBlock(), _createBlock(_resolveComponent("router-view")))
// }
export function getRouter() {
  function arrToTree(arr: Record<string, any>[]) {
    let newArr: Record<string, any>[] = []
    const childrenList: string[] = []
    arr.forEach(item => {
      let children = arr.filter(i => {
        return i.path.indexOf(`${item.path}/`) > -1
      })
      if (children.length > 0) {
        children.forEach(childItem => {
          childrenList.push(childItem.path)
          childItem.name = `${childItem.name}&parent=${item.name}`
        })
        item.name = item.name.replace('&', '?')
        newArr.push({
          ...item,
          children,
        })
      } else {
        item.name = item.name.replace('&', '?')
        newArr.push(item)
      }
    })
    newArr = newArr.filter(i => {
      return !childrenList.includes(i.path)
    })
    return newArr as RouteRecordRaw[]
  }
  const $store = useStore()
  let routes = <RouteRecordRaw[]>[]
  const views: Record<string, any> = import.meta.glob('../views/**/index.vue', { eager: true, import: 'default' })

  Object.keys(views).forEach((key) => {
    const path = '/' + key.split('/').splice(2).join('/').slice(0, -10)
    if (views[key]?.name) {
      const route = { name: views[key].name ?? path, path, component: () => views[key] }
      routes.push(route)
    }
  })
  routes = arrToTree(routes)
  routes.sort((a, b) => getQueryString(a.name as string, 'sort') - getQueryString(b.name as string, 'sort'))
  routes.forEach((item) => {
    if (item.children) item.children.sort((a, b) => getQueryString(a.name as string, 'sort') - getQueryString(b.name as string, 'sort'))
  })
  return routes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/Regexp',
    },
    // {
    //   path: '/Login',
    //   name: '登录',
    //   component: () => import('@/views/Login/index.vue')
    // }
  ]
})

export function addRoute(callback?: Function) {
  const list = <RouteRecordRaw[]>[]
  const notfind = {
    path: '/:catchAll(.*)',
    name: '',
    component: {
      render: () => (_openBlock(), _createBlock(_resolveComponent("div"), {}, '功能正在开发中'))
    }
  }
  // const notfind = {
  //   path: '/:catchAll(.*)',
  //   name: '404',
  //   component: () => import('@/components/404.vue')
  // }
  getRouter().forEach((i) => {
    if (!router.hasRoute(i.name)) {
      router.addRoute(i);
      list.push(i)
      if (i.children) {
        i.children.forEach((j) => {
          router.addRoute(j);
          list.push(j)
        })
      }
    }
  })
  router.addRoute(notfind)
  router.options.routes = [...router.options.routes, ...list, notfind]
  callback && callback()
}
export function removeRoute(callback?: Function) {
  getRouter().forEach((i) => {
    router.removeRoute(i.name);
  })
  router.removeRoute('404');
  callback && callback()
}

const whiteList: string[] = []

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (whiteList.includes(to.path)) next()
  // if (!sessionStorage.getItem('access_token')) removeRoute(() => next('/Login'))
  if (router.options.routes.filter(i => i.component).length === whiteList.length) addRoute(() => {
    const $store = useStore()
    // $store.queryUser()
    next({ ...to, replace: true, path: decodeURI(to.path) })
  })
  next()
  NProgress.done()
})

export default router
