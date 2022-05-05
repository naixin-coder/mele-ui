/*
 * @Author: 刘林
 * @Date: 2022-04-27 20:10:23
 * @LastEditors: 刘林
 * @LastEditTime: 2022-04-27 20:51:31
 */
export default {
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  pkgs: [
    'ui',
    // 'ui-demo',
  ],
}
