import request from '@/utils/request.js'

export const getSearchList = (categoryId, goodsName, page) => {
  return request.get('/goods/list', {
    params: {
      categoryId,
      sortType: 'all',
      sortPrice: 0,
      categoryId1: 0,
      goodsName,
      page
    }
  })
}
