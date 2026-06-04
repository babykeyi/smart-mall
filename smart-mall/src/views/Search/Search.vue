<template>
<div class="Search">
  <div class="header">
    <span @click="handleBack" class="back "><i class="iconfont icon-a-huaban1fuben44">返回</i></span>
        <h3>商品搜索</h3>
  </div>

  <div class="searchInput">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch(value)">搜索</div>
        </template>
      </van-search>
    </div>

  <div class="history">
    <div class="title">
      <span>最近搜索</span>
      <i  class="iconfont icon-shanchu" @click="onClear"></i>
    </div>
    <div class="item" >
      <span v-for="(item,index) in historylist" :key="index" @click="onSearch(item)">{{item}} <span class="del" @click="handleDel(item)">×</span></span>

    </div>
  </div>
</div>
</template>

<script >
import { getHistoryList, setHistoryList } from '@/utils/storage'

export default {
  name: 'SearchPage',
  data () {
    return {
      value: '',
      historylist: getHistoryList()
    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    onSearch (val) {
      const index = this.historylist.indexOf(val)
      // console.log(index)
      if (index !== -1) {
        this.historylist.splice(index, 1)
      }
      this.historylist.unshift(val)
      this.value = ''
      setHistoryList(this.historylist)
    },
    onClear () {
      this.historylist = []
      setHistoryList([])
    },
    handleDel (item) {
      console.log(item)
      const index = this.historylist.indexOf(item)
      this.historylist.splice(index, 1)
      setHistoryList(this.historylist)
    }
  }

}
</script>

<style scoped>
.Search{
  width: 80%;
  height: 500px;
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
.van-search__action{
  background-color:  #f43434;
  color: white;
}
.history{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px ;
}
.item{
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 20px;
}
.item span{
  display:block;
  width: 100px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #ededed;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
}
.item  .del{
  width: 10px;
  height: 10px;
  line-height: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  right: 3px;
  top: 2px;
  background-color: #f43434;
  color: white;
}
</style>
