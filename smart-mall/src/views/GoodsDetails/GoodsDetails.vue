<template>
<div class="GoodsDetails">
   <div class="header">
        <span @click="handleBack" class="back "><i class="iconfont icon-a-huaban1fuben44">返回</i></span>
        <h3>商品详情</h3>
    </div>
    <!-- 轮播区域 -->
    <div class="carousel">
      <div class="img-wrap">
      <div v-for="(item,index) in images" :key="index">
        <img :src="item.external_url" alt="轮播图">
      </div>
      </div>
      <!-- 底部圆点 -->
      <div class="indicator">
        <span>3/5</span>
      </div>
      <!-- 左右切换按钮 -->
      <div class="button">
        <button><i class="iconfont icon-shangyizhang"></i></button>
      <button> <i class="iconfont icon-xiayizhang"></i> </button>
      </div>
    </div>
    <!-- 价格 -->
    <div class="doll">
      <span>￥0.11<del>￥6699.00</del></span> <span>已售5件</span>
    </div>
    <!-- 标题 -->
    <div class="text">
      三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机
      三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机
      三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机三星手机
    </div>
    <!-- 退货声明 -->
    <div class="tui">
      <div>
        <span><i class="iconfont icon-duihao2"></i>七天无理由</span>
      <span><i class="iconfont icon-duihao2"></i>48小时发货</span>
      </div>
      <span><i class="iconfont icon-xiayizhang"></i></span>
    </div>
    <!-- 评价 -->
    <div class="comments">
      <div class="cheader">
        <span>商品评价（5条）</span>
        <span>查看更多</span>
      </div>
      <div class="cbody">
        <div class="author">
          <img src="" alt="头像">
          <span>本地</span>
        </div>
        <div class="cont">质量不错，挺喜欢的</div>
        <div class="time">2026-5-7</div>
      </div>
    </div>
    <!-- 加入购物车 -->
    <div class="footer">
      <span><i class="iconfont icon-shouyechangguishouye"></i>首页</span>
      <span><i class="iconfont icon-gouwuchekong"></i>购物车</span>
      <span class="addcar">加入购物车</span>
      <span class="buy">立刻购买</span>
    </div>
</div>
</template>

<script>
import { goodsDetails } from '@/api/goodsdetails'
export default {
  data () {
    return {
      goodsId: '',
      shuju: [],
      images: [],
      currentIndex: 0, // 初始下标
      timer: null// 这是定时器
    }
  },
  created () {
  },
  async mounted () {
    this.goodsId = this.$route.params.id
    console.log(this.goodsId)
    const res = await goodsDetails(this.goodsId)
    console.log('111', res.data.data.detail)
    this.shuju = res.data.data.detail

    this.images = res.data.data.detail.goods_images
    console.log(this.images)
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.GoodsDetails{
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
.carousel{

  position: relative;
}
.carousel,.img-wrap div{
  width: 100%;
  height: 700px;
  overflow: hidden;
}
img{
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
}
.indicator{
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  background-color:rgba(255,255, 255, .8);
}
.button{
  position: absolute;
  width: 100%;
  top: 50%;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  padding-right: 3px;
}
.button>button{
  background: none;
  border: none;
  cursor: pointer;
}
.button i{
  font-size: 24px;
}
.doll{
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.text{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tui{
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding:0 10px;
  display: flex;
  justify-content: space-between;
}
.tui>div{
display: flex;
gap: 10px;
}
.tui>div>span>i{
  color: red;
}
.comments{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
}
.cheader{
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.cbody{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.footer{
  width: 80%;
  position: fixed;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #fff;
}
.addcar,.buy{
  font-size: 13px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  background-color: #eab346;
}
.buy{
  background-color: #de2828;
}
</style>
