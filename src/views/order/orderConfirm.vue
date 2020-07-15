<template>
  <div class="box">
    <van-nav-bar title="确认订单" left-arrow @click-left="goBack" />

    <!-- 地址信息 -->
    <div class="address">
      <div>
        <van-icon name="location-o" />
      </div>
      <div>
        <p>{{addressInfo.linkMan}}-{{addressInfo.mobile}}</p>
        <p>{{addressInfo.address}}</p>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="goods">
      <p class="goods-head">商品列表</p>
      <van-card
        v-for="(item,index) in this.$store.state.orderList"
        :key="index"
        :thumb="item.pic"
        :num="item.nums"
        :title="item.name"
        :price="item.price"
      ></van-card>
    </div>

    <div class="remark">
        <van-field  placeholder="如需备注请输入" label="备注"/>
    </div>

    <van-submit-bar :price="this.$store.getters.totalAmounts*100" button-text="确认订单" @submit="createOrder"/>
  </div>
</template>

<script>
import storage from "@/utils/storage";
import qs from "qs";
export default {
  name: "",
  mounted() {
    this.getAddress();
  },
  data() {
    return {
      addressInfo: []
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //获取默认的收货地址
    getAddress() {
      //获取用户的基本信息
      let data = storage.get("09A_user", true);
      if (data == null) {
        this.$toast.fail("请先登录");
        this.$router.push("/shop/login");
        return false;
      }
      this.$axios({
        url: "https://api.it120.cc/small4/user/shipping-address/default",
        params: {
          token: data.token
        }
      }).then(res => {
        console.log(res);
        if (res.code != 0) {
          this.$toast.fail("请先登录");
          this.$router.push("/shop/login");
          return false;
        }

        this.addressInfo = res.data;
      });
    },
    //创建订单的信息
    createOrder(){
        //获取用户的登录信息
        let user = storage.get("09A_user", true);

        //组装一下商品的数据
        let arr = [];
        this.$store.state.orderList.forEach(item=>{
            let object = new Object();
            object.goodsId = item.goods_id;
            object.number = item.nums;
            object.propertyChildIds = item.properties;
            object.logisticsType = 0;
            arr.push(object);
        });

        //创建订单的接口数据
        //创建formDate的数据
        let formdata = new FormData();
        formdata.append("token",user.token);
        formdata.append("goodsJsonStr",JSON.stringify(arr));

        this.$axios.post("https://api.it120.cc/small4/order/create",
        formdata).then(res=>{
            this.$toast.loading({
                message:"订单正在努力生成中",
                overlay: true,
            });
            this.$store.commit("setOrder",res.data);

            setTimeout(()=>{
                this.$router.push("/order/pay");
            },2000);
            
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #f0f0f0;

  .address {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: #dddddd 2px solid;
    div:nth-of-type(2){
        width: 80%;
    }
    p {
      line-height: 0.6rem;
    }
  }

  .goods {
      margin-top: .3rem;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    .goods-head{
        line-height:.7rem;
        border-bottom: #dddddd 1px solid;
        text-indent: .2rem;
    }
  }
}
</style>
