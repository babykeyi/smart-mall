<template>
<div class="Home">
  <div class="header">
    <h3>智慧商城</h3>
  </div>
  <div class="searchInput">
    <van-search @click="handleSearch" v-model="value" placeholder="请输入搜索关键词" />
  </div>
  <div class="navbar">
    <van-swipe :autoplay="3000"  :touchable="true"  height="450px">
      <van-swipe-item v-for="(image) in images" :key="image.imgUrl">
        <img v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="grid">
    <van-grid :column-num="5">
      <van-grid-item v-for="item in grid" :key="item.imgUrl" :icon="item.imgUrl" :text="item.text" />
    </van-grid>
  </div>

    <GoodsList v-for="item in goddslist" :key="item.goods_id" :item="item"></GoodsList>

</div>
</template>

<script >
import { getHomeData } from '@/api/home'
import GoodsList from '@/components/GoodsList.vue'
export default {
  components: { GoodsList },
  name: 'HomePage',
  data () {
    return {
      value: '',
      images: [],
      grid: [],
      goddslist: ''
    }
  },
  async created () {
    const res = await getHomeData()
    console.log(res.data.data)
    this.images = res.data.data.pageData.items[1].data
    this.grid = res.data.data.pageData.items[3].data
    this.goddslist = res.data.data.pageData.items[6].data
    console.log(this.goddslist)
  },
  methods: {
    handleSearch () {
      // console.log('你好')4
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.Home{
  width: 100%;
  /* border: 1px solid #333; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 50px;
}
.header{
background-color: #f43434;
height: 45px;
line-height: 45px;
text-align: center;
color: #fff;

}
.van-swipe-item>img{
  width: 100%;
  height: 400px;
}
.navbar {
  width: 100%;
  height: 450px;
}
  .my-swipe .van-swipe {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>
