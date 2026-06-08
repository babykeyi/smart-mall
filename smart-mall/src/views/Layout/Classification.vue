<template>
  <div class="Classification">

    <div class="header">全部分类</div>

    <div class="search">
      <van-search @click="handleSearch" v-model="value" placeholder="请输入搜索关键词" />
    </div>

    <div class="footcontent">
      <div class="body" >
        <div class="list">
          <div class="menu-item" :class="{active: item.category_id === classActiveId}" v-for="item in classlist" :key="item.category_id" @click="handleClick(item)">{{item.name}}</div>
        </div>
        <div class="content" >
          <div class="active-item" v-for="children in classActive.children" :key="children.category_id" @click="goGoods(children.category_id)">
            <img :src=" children.image.external_url" alt="">
            <p>{{ children.name }}</p>
          </div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
import { getClass } from '@/api/class'
export default {
  name: 'ClassPage',
  data () {
    return {
      value: '',
      classlist: [],
      classActive: [],
      classActiveId: null
    }
  },
  async created () {
    const res = await getClass()
    this.classlist = res.data.data.list
    this.classActive = this.classlist[0]
    this.classActiveId = this.classActive.category_id
  },
  methods: {
    handleSearch () {
      // console.log('你好')4
      this.$router.push('/search')
    },
    handleClick (item) {
      this.classActive = item
      console.log(this.classActive)
      this.classActiveId = item.category_id
    },
    goGoods (id) {
      console.log(id)
      this.$router.push(`/searchlist?categoryId=${id}`)
    }
  }
}
</script>

<style scoped>
.Classification{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 50px;
}
.header{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.footcontent {
  width: 100%;
}
.body{
  flex: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  overflow: hidden;
}
.list{
  width: 150px;
  height: 750px;
  background: #f5f5f5;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
   /* ========= 👇 加这两行就有回弹效果 ========= */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: auto;

}
.list .menu-item{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;

}
.menu-item.active{
  background-color: #fff;
}
.content{
  flex: 1;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 10px 15px;
}
.active-item{
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  justify-self: center;
  align-items: center;
}
.active-item>img{
  height: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
