import Register from "@/views/login/register";
import Login from "@/views/login/login";

import Index from "@/views/home/index";

import Cart from '@/views/home/cart';
import Home from '@/views/home/home';
import Category from '@/views/home/category';
import Me from '@/views/home/me';
import CutList from '@/views/goods/cutList';
import Recommand from '@/views/goods/recommand';

// 定义一个变量
const shop = [
    //注册页面的路由
    {
        path: "/shop/register",
        name: "shop_register",
        component: Register,
        meta: {
            title: "严选商城-注册"
        }
    },
    //登陆页面的路由地址
    {
        path: "/shop/login",
        name: "shop_login",
        component: Login,
        meta: {
            title: "严选商城-登陆"
        }
    },

    //严选商城首页
    {
        path: "/home",
        name: "home",
        redirect: "/",
        component: Home,
        children: [
            {
                path: "/",
                name: "index",
                component: Index,
                meta: {
                    title: "严选商城-首页"
                }
            },
            {
                path: "/category",
                name: "category",
                component: Category,
                meta: {
                    title: "严选商城-分类页面"
                }
            }, {
                path: "/cart",
                name: "cart",
                component: Cart,
                meta: {
                    title: "严选商城-购物车"
                }
            }, {
                path: "/me",
                name: "me",
                component: Me,
                meta: {
                    title: "严选商城-个人中心"
                }
            }
        ]
    }, {
        path: "/cutList",
        name: "cutlist",
        component: CutList,
        meta: {
            title: "严选商城-砍价列表"
        }
    }, {
        path: "/recommand",
        name: "recommand",
        component: Recommand,
        meta: {
            title: "严选商城-人气推荐"
        }
    }
];

//抛出shop对象
export default shop;