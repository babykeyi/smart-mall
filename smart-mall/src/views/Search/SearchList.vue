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
   <div class="body">
    <GoodsList></GoodsList>
   </div>
</div>
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'

export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    GoodsList
  },
  methods: {
    handleBack () {
      this.$router.push('/search').catch(() => {})
    }
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
</style>
