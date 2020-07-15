<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow @click-left="goBack"/>
    <!-- 购物车的列表组装件 -->
    <div class="item" v-for="(item,index) in cartList" :key="index">
      <van-checkbox v-model="item.checked" />
      <van-card class="card" :price="item.price" :title="item.name" :thumb="item.pic">
        <template #num>
          <van-stepper v-model="item.nums" />
        </template>
      </van-card>
    </div>

    <van-submit-bar :price="totalAmounts" button-text="提交订单" @submit="submitOrder">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.cartList = this.$store.state.cartList;
    console.log(this.checked);
  },
  data() {
    return {
      cartList: [],
      checked: true,
    };
  },
  computed: {
    totalAmounts(){
      let amounts = 0;
      this.cartList.forEach(item=>{
        if(item.checked == true){
          amounts += item.nums*item.price;
        }
      });

      return amounts*100;
    }
  },
  watch: {
    cartList:{
      handler(value){
        this.$store.commit("addCart",value);
        this.$store.commit("countCarts");

        let arr = value.filter(item=>{
          return item.checked == true;
        });

        if(value.length == arr.length){
          this.checked = true;
        }else{
          this.checked = false;
        }
      },
      deep: true,
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    //提交订单的数据
    submitOrder(){
      this.$toast.loading({
        duration: 3000, // 持续展示 toast
        message:"商品准备中",
        overlay: true,
      });
      //获取订单的数据信息
      this.$store.commit("setOrderList");
      setTimeout(()=>{
        this.$router.push("/order/confirm");
      },3000)
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  .card {
    flex: 1;
  }
}
</style>
