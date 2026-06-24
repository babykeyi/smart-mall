import request from '@/utils/request.js'

export const goodsDetails = (goodsId) => {
  return request.get('/goods/detail',
    {
      params: { goodsId }
    })
}
