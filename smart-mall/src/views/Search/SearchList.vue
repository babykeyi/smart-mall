<template>
<div class="SearchList">
    <div class="header">
        <span @click="handleBack" class="back "><i class="iconfont icon-a-huaban1fuben44">返回</i></span>
        <h3>商品列表</h3>
  </div>
  <div class="searchinput">
       <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div  class="iconfont icon-fenlei1"></div>
        </template>
      </van-search>
  </div>
  <div class="sort">
    <ul>
        <li>综合</li>
        <li>销量</li>
        <li>价格</li>
    </ul>
   </div>
   <div class="body" v-if="goodslist.length > 0">
    <GoodsList  v-for="item in goodslist" :key="item.goods_id" :item="item"></GoodsList>

   </div>
   <div class="body2" v-else>
    <h5 >没有对应的商品</h5>
   </div>
</div>
</template>

<script>
import { getSearchList } from '@/api/searchlist'
import GoodsList from '@/components/GoodsList.vue'

export default {
  data () {
    return {
      value: '',
      page: 1,
      goodslist: []
    }
  },
  components: {
    GoodsList
  },
  methods: {
    handleBack () {
      this.$router.push('/search').catch(() => {})
    },
    onSearch (val) {
      console.log(val)
      if (!val) {
        return
      }
      this.$router.push(`/searchlist?search=${val}`).catch(() => {})
    },
    async getList () {
      const categoryId = this.$route.query.categoryId || ''
      const search = this.$route.query.search || ''
      console.log('接收参数：', categoryId, search)

      const res = await getSearchList(categoryId, search, this.page)
      console.log('接口返回：', res)
    }
  },
  async created () {
    this.getList()
    console.log('这是搜索列表页面')

    const res = await getSearchList(this.$route.query.categoryId, this.$route.query.search, this.page)
    // // console.log('111', res)
    this.goodslist = res.data.data.list.data
    console.log(this.goodslist)
  },
  mounted () {
    this.value = this.$route.query.search
  }
}
</script>

<style scoped>
.SearchList{
  width: 80%;
  /* height: 500px; */
  /* border: 1px solid #333; */
  display: flex;
  flex-direction: column;
  gap: 10px;
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
.sort ul{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.body{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.body2{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
</style>
