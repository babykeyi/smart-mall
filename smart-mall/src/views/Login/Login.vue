<template>
<div class="Login">
    <div class="header">
        <span @click="handleBack" class="back "><i class="iconfont icon-a-huaban1fuben44">返回</i></span>
        <h3>会员登录</h3>
    </div>
    <div class="body">
        <form >
            <div class="byheader">
                <h1>手机号码登录</h1>
                <p>未注册的手机号码登录后将自动注册</p>
            </div>
            <div class="phone">
                <input type="text" placeholder="请输入手机号码" v-model="mobile">
            </div>
            <div class="picCode">
                <input type="text" placeholder="请输入图形验证码" v-model="inputPicCode">
                <img :src="picCode" @click="handlepicCode">
            </div>
            <div class="smgCode">
                <input type="text" placeholder="请输入短信验证码" v-model="msgCode">
                <p class="msg"  @click="handleCount">{{ second === totalSecond?'获取短信验证码':second+'秒后重新获取'}}</p>
            </div>
            <button @click="handleLogin">登录</button>
        </form>
    </div>
</div>
</template>

<script>
import { getPicCode, getMsgCode, getLogin } from '@/api/login'

import { Toast } from 'vant'
export default {
  name: 'LojinPage',
  data () {
    return {
      inputPicCode: '',
      picCode: '',
      totalSecond: 60,
      second: 60,
      timer: null,
      mobile: '',
      msgCode: ''
    }
  },
  async created () {
    await this.handlepicCode()
  },
  methods: {
    async handlepicCode () {
      const res = await getPicCode()
      // console.log(res.data.data)
      this.picCode = res.data.data.base64
      this.userId = res.data.data.key
    },
    async handleCount () {
      if (!this.validFn()) {
        return
      }
      const res = await getMsgCode(this.inputPicCode, this.userId, this.mobile)
      //   console.log(res.data.status)
      if (res.data.status === 200) {
        Toast('发送成功')
      }
      if (!this.timer && this.second === this.totalSecond) {
        this.second = 59
        this.timer = setInterval(() => {
          this.second--
          //   console.log('你好')

          if (this.second < 0) {
            clearInterval(this.timer)
            this.second = this.totalSecond
          }
        }, 1000)
      }
    },
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        Toast('请输入正确的手机号码')
        return false
      }
      if (!/^\w{4}$/.test(this.inputPicCode)) {
        Toast('请输入图形验证码')
        return false
      }
      return true
    },
    async handleLogin () {
    //   console.log('你好')
      if (!this.validFn()) return
      if (!/^\d{6}$/.test(this.msgCode)) {
        Toast('请输入短信验证码')
        return
      }
      const res = await getLogin(this.mobile, this.msgCode)
      console.log(res)
      console.log(res.data.data.token)
      console.log(res.data.data.userId)
      console.log({ token: res.data.data.token, userId: res.data.data.userId })

      this.$store.commit('user/setUserInfo', { token: res.data.data.token, userId: res.data.data.userId })
      Toast('登录成功')
      this.$router.push('/')
    },
    handleBack () {
      console.log('你好')

      this.$router.back()
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}

</script>

<style scoped>
.Login{
    width: 80%;
    /* border: 1px solid #555; */
}
.header{
    width: 100%;
    height: 45px;
    position: relative;
    text-align: center;
    padding: 10px 20px;
}
.back{
    z-index: 999;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 11px;
}
.body{
    width: 100%;
}
form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0;
}
form>div{
    height: 50px;
    width: 100%;
    border: 1px solid #444;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
}
form>div>input{
    height: 45px;
    flex: 1;
    border: none;
}
input:focus{
    outline: none;
}
.picCode>img{
    height: 45px;
}
.byheader{
    display: flex;
    flex-direction: column;
    height: 70px;
    align-items: baseline;
    border: none;
}
.msg{
    color: orange;
}
button{
    height: 45px;
    width: 100%;
    background-color: orange;
    color: #fff;
    border-radius: 30px;
    border: none;
    font-size: 20px;
}
</style>
