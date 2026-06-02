import axios from 'axios'

import 'vant/lib/index.css'
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  console.log('发送了')
  // 在发送请求之前做些什么
  return config
}, function (error) {
  console.log('失败了')
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log('得到数据')

  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
