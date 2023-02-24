import user from './modules/user'

export default {
  user,
}

// bug:没有类型
// const modules = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })
// const api: { [key: string]: any } = {}
// Object.keys(modules).forEach((key: string) => {
//   api[key.split('/').splice(2).join('/').slice(0, -3)] = modules[key]
// })
// export default api