<template>
  <div class="Layout">
    <div class="header">
        <router-view></router-view>
    </div>
    <div class="foot">
        <ul>
            <li><router-link to="/home"><i class="iconfont icon-shouyechangguishouye"></i>首页</router-link></li>
            <li><router-link to="/class"><i class="iconfont icon-fenlei"></i>分类</router-link></li>
            <li><router-link to="/cart"><i class="iconfont icon-gouwuchekong"></i>购物车</router-link></li>
            <li><router-link to="/about"><i class="iconfont icon-a-wodedefuben2"></i>我的</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style scope>
.Layout{
    width: 80%;
    /* border: 1px solid #666; */
}
.foot{
    width: 80%;
    position: fixed;
    bottom: 0;
    /* border: 1px solid #666; */
    background-color: #fff;

}
.foot>ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    /* line-height: 40px; */
    list-style: none;
}
.foot>ul a{
    text-decoration: none;
    color: #333;
    transition: all .3s;
}
.foot>ul .router-link-active{
    color: red;
}

</style>
