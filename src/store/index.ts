import { defineStore } from 'pinia'
import api from '@/services'
export const useStore = defineStore('main', {
  state: () => ({
    user: sessionStorage.getItem('user')
      ? JSON.parse(sessionStorage.getItem('user'))
      : {
        userId: '',
        userName: '',
        nickName: '',
      },
  }),
  actions: {
    // 获取用户信息
    queryUser() {
      return new Promise(async (resolve) => {
        // const res = await api.user.list()
        // const state = useStore().$state
        // state.user = res.data
        resolve('true')
      })
    },
  },
})