<template>
  <div class="box">
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>

    <!-- 选项卡操作 -->
    <div class="tab-item">
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">
          <p>商品评价</p>
        </van-tab>
      </van-tabs>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" badge="3" text="购物车"  />
      <van-goods-action-icon icon="star-o" text="收藏"  />
       <van-goods-action-button type="warning" text="立即购买" />
      <van-goods-action-button type="danger" text="加入购物车" />
    </van-goods-action>

    <div class="arrow">
        <van-icon name="arrow-left" size="30"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.gId = this.$route.params.id;
    this.getGoodsInfo();
  },
  data() {
    return {
      active: 0,
      gId: 0,
      banners: [], //商品轮播图
      content: null
    };
  },
  computed: {},
  methods: {
    //获取商品详情信息
    getGoodsInfo() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.gId
        }
      }).then(res => {
        console.log(res);
        this.banners = res.data.pics;
        this.content = res.data.content;
      });
    }
  }
};
</script>

<style lang="scss">
.box {
  
  width: 100%;
  background: #f0f0f0;
  padding-bottom:.88rem;
  .tab-item {
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
    p {
      padding: 0.15rem;
      width: 100% !important;
      box-sizing: border-box;
      img {
        width: 100% !important;
      }
    }
  }
  .arrow{
      padding: .1rem;
      background: #808080;
      position: fixed;
      top: .5rem;
      left: .3rem;
  }
}
</style>
