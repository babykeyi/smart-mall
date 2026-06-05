<template>
  <div class="GoodsList"  @click="handkeClick(item.goods_id)" v-if="item">
    <img :src="item.goods_image" alt="">
    <div class="content">
        <p>{{item.goods_name}}</p>
        <p>已售{{item.goods_sales}}件</p>
        <p><span>￥{{item.goods_price_min}}</span> <i class="oldmoney">￥{{item.goods_price_max}}</i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    handkeClick (id) {
      console.log(id)
      this.$router.push(`/goodsdetails/${id}`)
    }
  }
}
</script>

<style scoped>
.GoodsList{
    width: 100%;
    /* border: 1px solid #333; */
    display: flex;
    gap: 10px;
    cursor: pointer;
}
img{
    width:  150px;
    height: 150px;
}
.content{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: baseline;
}
.oldmoney{
    text-decoration: line-through;
  color: #999; /* 一般搭配灰色更好看 */
}
</style>
