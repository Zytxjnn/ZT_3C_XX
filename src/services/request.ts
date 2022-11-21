import Axios from "axios";
import { useBaseConfig } from "@/hooks/config/useBaseConfig";
import { removeStorage } from "@/utils/useStorage";
import { useRouter,useRoute } from "vue-router";


const config = useBaseConfig();
const instance = Axios.create({
    baseURL: config.baseUrl
})

instance.interceptors.request.use(config => {
    // 非登录页面的所有请求，添加上 token 在请求头上
    if(config.url !== "/login"){
        config.headers!.token = localStorage.getItem("token");
    }
    return config;
})

instance.interceptors.response.use(response => {
    const router = useRouter();
    const route = useRoute();
    if (response.data?.code === 200) {
        return response.data;
    }

    if(response.data?.code === 401){

        removeStorage('token','user');

        console.log(router)
        router.replace({
            path:'/login'
        })
    }

    return response;
})

export default instance

