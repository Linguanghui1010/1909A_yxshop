import Vue from "vue";
import Vuex from "vuex";

import VuexPersist from "vuex-persist";//导入持久化的工具

Vue.use(Vuex);

//实例化插件
const vuexLocal = new VuexPersist({
    storage: window.localStorage
});
//定义一个对象
const store = new Vuex.Store({
    //数据池
    state:{
        loading: false,
        cartList:[],//购物车列表
        nums: 0,//总数量
    },
    //操作state的内容
    mutations:{
        setLoading(state,payload){
            state.loading = payload;
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{

    },
    plugins: [vuexLocal.plugin]
});

//导出对象
export default store;