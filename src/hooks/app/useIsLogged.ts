import instance from "@/services/request";
import {getPermissionByUser, getSystemMenuByUserRequest} from "@/router/systemRequest";
import {getStorage} from "@/utils/useStorage";
import {useRoute, useRouter} from "vue-router";

export const useIsLogged = async () => {
    const router = useRouter();
    const route = useRoute();
    const token = getStorage('token');

    // 根据登录状态，执行不同逻辑
    if (token) {
        // 已登录，获取permissions和menu信息
        const { data : menus } = await getSystemMenuByUserRequest();
        const { data : permissions } = await getPermissionByUser();
        console.log(permissions)

    } else { // 没有登录
        // 没有登录并且当前不在login页面，跳转到login页面
        if (route.path !== '/login') {
            await router.push('/login');
        }
    }
}
