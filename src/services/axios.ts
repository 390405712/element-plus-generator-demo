import axios, { AxiosRequestConfig, Canceler } from 'axios'
import { useStore } from '@/store'

const { CancelToken } = axios
let cancel: Canceler

const promiseArr: Record<string,Canceler> = {}
axios.defaults.baseURL = import.meta.env.VITE_APP_URL as string

const whiteList = ['/file/',]
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const url = config.url
    if (url) {
      if (promiseArr[url] && !whiteList.includes(url) && url.indexOf('/file/') === -1) {
        promiseArr[url](`操作取消:${url}`)
        promiseArr[url] = cancel
      } else {
        promiseArr[url] = cancel
      }
    }
    let $store = useStore()
    config.headers['Content-type'] = config.headers['Content-type'] ? config.headers['Content-type'] : 'application/json'
    config.headers.Authorization = sessionStorage.getItem('access_token')
    return config
  },
  (err) => Promise.reject(err)
)
axios.interceptors.response.use(
  (response) => {
    if ([200].includes(response.data.code)) return response.data
    // if ([2009, 2010].includes(response.data.code)) {
    //   ElMessageBox.alert(response.data.msg, '提示', {
    //     confirmButtonText: '确认',
    //     showClose: false,
    //     callback: () => {
    //       window.location.href = `${window.location.origin}/Login`
    //     },
    //   })
    //   return Promise.reject(response.data.msg)
    // }
    if (/application\/(\S*);charset=utf-8/.test(response.headers['content-type'])) return { data: response.data, headers: response.headers }
    ElMessage.error(response.data.msg)
    return Promise.reject(response.data)
  },
  (err) => Promise.reject(err.toString())
)

export default (option: AxiosRequestConfig) => {
  return new Promise<any>((resolve, reject) => {
    axios({
      ...option,
      cancelToken: new CancelToken((c: Canceler) => {
        cancel = c
      }),
    }).then((res) => {
      resolve(res)
    }).catch((res) => {
      reject(res)
    })
  })
}