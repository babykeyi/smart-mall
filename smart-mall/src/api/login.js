import request from '@/utils/request.js'
export const getPicCode = () => {
  return request.get('/captcha/image')
}
