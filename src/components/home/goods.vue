<template>
  <div>
    <div class="goods-item">
      <div class="g-item" v-for="(item,index) in goodsList" :key="index">
        <img :src="item.pic" />
        <p v-html="item.name"></p>
        <p>￥ {{item.originalPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:['goodsList'],
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.goods-item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .g-item {
    width: 48%;
    margin: 1%;
    img {
      width: 100%;
      height: 3.2rem;
    }
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 0.6rem;
    }
    p:nth-of-type(2){
      color: #FF0000;
      font-size: .3rem;
    }
  }
}
</style>
