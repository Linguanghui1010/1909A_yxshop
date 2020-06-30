import Register  from  "@/views/login/register";
import Login  from  "@/views/login/login";

// 定义一个变量
const shop = [
    //注册页面的路由
    {
        path: "/shop/register",
        name: "shop_register",
        component: Register,
        meta:{
            title:"严选商城-注册"
        }
    },
    //登陆页面的路由地址
    {
        path: "/shop/login",
        name: "shop_login",
        component:Login,
        meta:{
            title:"严选商城-登陆"
        }
    }
];

//抛出shop对象
export default shop;