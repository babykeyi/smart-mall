import request from '@/utils/request.js'
// 请求图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 请求短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.get('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
