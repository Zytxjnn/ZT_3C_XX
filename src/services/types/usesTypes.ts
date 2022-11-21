import {UserSex} from "@/constances";

export type UserResponse = {
    id: number,
    userName: string,
    mobileNumber: string,
    sex: UserSex,
    creator: number,
    remark: string,
    enable: boolean,
    updateTime:  Date,
    createTime: Date
}

export type LoginResponse = {
    permissions: number[],
    token: string,
    user: UserResponse
}
