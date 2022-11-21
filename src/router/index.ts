import {createRouter, createWebHistory, RouteRecordRaw, useRoute} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: import('../views/login/Login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to,from, next) => {
//     console.log('before each')
//     // const token = localStorage.getItem("token");
//     // if (token) {
//     //     if(to.path === "/login"){ // 有token且进入login页面，跳转首页
//     //         next("/");
//     //         return false;
//     //     }
//     // } else {
//     //     if (to.path === '/login') {
//     //         next();
//     //         return;
//     //     }
//     // }
//     next();
//
// })

export default router
