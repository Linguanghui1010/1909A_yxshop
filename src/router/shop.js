import Register  from  "@/views/login/register";

// 定义一个变量
const shop = [
    //注册页面的路由
    {
        path: "/shop/register",
        name: "shop_register",
        component: Register,
    }
];

//抛出shop对象
export default shop;