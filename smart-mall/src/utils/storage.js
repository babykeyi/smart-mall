const INFO_KEY = 'hm_shopping_info'
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}
export const setInfo = (obj) => {
  console.log('进入setInfo', obj) // 加这句
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
  console.log('存好了', obj) // 加这句
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
