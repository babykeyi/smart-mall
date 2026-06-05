import request from '@/utils/request.js'

export const getSearchList = (goodsName, page) => {
  return request.get('/goods/list', {
    params: {
      sortType: 'all',
      sortPrice: 0,
      categoryId1: 0,
      goodsName,
      page
    }
  })
}
