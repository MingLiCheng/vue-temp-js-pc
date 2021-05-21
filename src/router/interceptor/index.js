/*
 * @Description:
 * @Author: mlcheng2
 * @Date: 2021-05-20 17:19:42
 */
import { Route } from 'vue-router'
export async function routerBeforeEachFunc(to, from, next) {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Vue Ts Temp Pc'
  }
  next()
}

// 进入路由后
export function routerAfterEachFunc(to, from) {
  console.log('from', from)
}
