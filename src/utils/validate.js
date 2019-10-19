/**
 *校验用户名
 *
 * @param {String} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valida_map = ["admin", "editor"];
  return valida_map.indexOf(str.trim()) >= 0;
}
