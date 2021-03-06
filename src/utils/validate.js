/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin']
  return valid_map.indexOf(str.trim()) >= 0
}

export function validPWD(str) {
  const valid_map = ['!Q@W3e4r']
  return valid_map.indexOf(str.trim()) >= 0
}
