import request from '@/utils/request.js'

export const getClass = () => {
  return request.get('/category/list')
}
