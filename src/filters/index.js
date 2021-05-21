/*
 * @Description:
 * @Author: mlcheng2
 * @Date: 2021-05-20 17:34:02
 */
// Filter to uppercase the first character
const uppercaseFirstChar = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  install: Vue => {
    Vue.filter('uppercaseFirstChar', uppercaseFirstChar)
  }
}
