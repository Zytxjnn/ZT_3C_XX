import instance from "@/services/request";
import { LoginResponse } from "@/services/types/usesTypes";
import { SystemMenu } from "@/services/types/systemTypes";
import {Result} from "@/services/types/commonTypes";

// 登录
const loginRequest = (mobileNumber: string, password: string): Promise<LoginResponse> => {
    return instance.post('/login', {
        mobileNumber,
        password
    })
}

// 获取用户导航菜单
const getSystemMenuByUserRequest = (): Promise<Result<Array<SystemMenu>>> => {
    return instance.get("/systemConfig/menu")
}

// 获取用户权限
const getPermissionByUser = (): Promise<Result<Array<Number>>> => {
    return instance.get("/systemConfig/permission")
}

export {
    loginRequest,
    getSystemMenuByUserRequest,
    getPermissionByUser
}
