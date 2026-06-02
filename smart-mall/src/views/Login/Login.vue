<template>
<div class="Login">
    <div class="header">
        <span class="back van-nav-bar"><i class="iconfont icon-a-huaban1fuben44">返回</i></span>
        <h3>会员登录</h3>
    </div>
    <div class="body">
        <form >
            <div class="byheader">
                <h1>手机号码登录</h1>
                <p>未注册的手机号码登录后将自动注册</p>
            </div>
            <div class="phone">
                <input type="text" placeholder="请输入手机号码">
            </div>
            <div class="picCode">
                <input type="text" placeholder="请输入图形验证码">
                <img :src="picCode" @click="handlepicCode">
            </div>
            <div class="smgCode">
                <input type="text" placeholder="请输入短信验证码">
                <p class="msg">获取验证码</p>
            </div>
            <button>登录</button>
        </form>
    </div>
</div>
</template>

<script>
import { getPicCode } from '@/api/login'
export default {
  name: 'LojinPage',
  data () {
    return {
      picCode: '',
      userId: ''
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
    }
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
