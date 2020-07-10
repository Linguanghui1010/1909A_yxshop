<template>
  <div class="box">
    <div id="banner">
        <!--轮播图区域-->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item,index) in bannerList">
                <img :src="item.picUrl"/>
            </van-swipe-item>
        </van-swipe>
        <!--四个小按钮-->
        <nav>
            <ul>
                <li>
                    <van-icon name="like" size="50" color="#FF0000"/>
                    <p>签到</p>
                </li>
                 <li>
                    <van-icon name="bag" size="50" color="#FF0000"/>
                    <p>礼券</p>
                </li>
                 <li>
                    <van-icon name="coupon" size="50" color="#FF0000"/>
                    <p>砍价</p>
                </li>
                 <li>
                    <van-icon name="gift" size="50" color="#FF0000"/>
                    <p>专栏</p>
                </li>
            </ul>
        </nav>
    </div>

    <div class="cut">
        <p class="cut-head">砍价列表</p>
        <!--砍价列表信息-->
        <div class="item" v-for="(item,index) in cutList">
            <div class="item-left">
                <img :src="item.pic" />
            </div>
            <div class="item-right">
                <p v-html="item.name"></p>
                <p v-html="item.characteristic"></p>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
      this.getBanner();
      this.getCutList();
  },
  data() {
    return {
        bannerList: [],
        cutList: [],
    };
  },
  computed:{
  },
  methods: {

      getBanner(){
          //获取首页轮播图的区域的接口数据
            this.$axios({
                url: "https://api.it120.cc/small4/banner/list"
            }).then(res=>{
                //判断数据是否为空
                if(res.code == 0){
                    this.bannerList = res.data;
                }
               
            })
      },

      getCutList(){
          this.$axios({
              url: "https://api.it120.cc/small4/shop/goods/kanjia/list"
          }).then(res=>{
              console.log(res);

              if(res.code == 0){
                  console.log(res.data.goodsMap);
                  this.cutList = res.data.goodsMap;
              }
          })
      }
      
  },
};
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    background-color: #F0F0F0;

    #banner{
    width: 100%;
    margin-bottom: .2rem;
    position: relative;

    nav{
        width: 100%;
        padding: .3rem .12rem;
        box-sizing: border-box;
        position:absolute;
        bottom: 0px;
        background-color: #FFF;
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        ul{
            width: 100%;
            display:flex;
            justify-content: space-around;
            align-items: center;
            li{
                width:25%;
                text-align:center;
                p{
                    margin-top: .12rem;
                    font-size: .35rem;
                }
            }
        }
    }
}

.cut{
    width: 100%;
    background-color: #FFF;
    .cut-head{
        line-height: .88rem;
        width: 100%;
        font-size: .35rem;
        text-align:center;
    }
    .item{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .1rem;
        box-sizing: border-box;
        .item-left{
            width: 30%;
            padding: .1rem;
            box-sizing: border-box;
            img{
                width: 100%;
                border-radius: .1rem;
            }
        }
        .item-right{
            width: 70%;
        }
    }
}
}



</style>
