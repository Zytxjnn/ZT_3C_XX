export type MenuAction = {
    actionId: number,
    menu: number,
    name: string,
    permissionId: string
}

export type SystemMenu = {
    id: number,
    pid: number,
    name: string,
    description: string,
    path: string,
    actions: Array<MenuAction>,
    children: SystemMenu[],
    show: boolean,
    sort: number,
}
