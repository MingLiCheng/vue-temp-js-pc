/*
 * @Description:
 * @Author: mlcheng2
 * @Date: 2021-05-20 17:42:59
 */

import { clipboard } from './clipboard'

export default {
  install: Vue => {
    Vue.directive('clipboard', clipboard)
  }
}
