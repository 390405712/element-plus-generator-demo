

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<any, any, any>
  export default component
}
// declare function $ref<T>(val?: T): T
// declare function $ref<T extends object>(value: T): [T];
declare function $ref<T>(value: T): T;
declare function $ref<T = any>(): T | undefined;

/**
 * @description: 接口响应内容
 * @param code 响应code
 * @param data 响应数据< T >
 * @param rows 列表< T >
 * @param total 总计列表数< T >
 * @param msg 响应描述
 */
declare interface res<T> {
  code: number
  data?: T
  rows?: T
  total?: number
  msg: string
}

/**
 * @description: 接口响应内容列表格式
 * @param total 总计列表数
 * @param rows 列表 Array< T >
 */
declare interface list<T> {
  total: number
  list: Array<T>
}
