import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//定义一个对象
const store = new Vuex.Store({
    //数据池
    state:{
        loading: false,
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

    }
});

//导出对象
export default store;