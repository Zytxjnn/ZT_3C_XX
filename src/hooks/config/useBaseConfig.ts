const useBaseConfig = () => {
    const mode = import.meta.env.MODE;
    return {
        name:"中铁隧道集团三处信息化公司项目管理平台",
        baseUrl: mode === "dev" ? "http://localhost:5000" : "http://219.134.241.188:5000",
        frontBaseUrl:mode=== "dev" ? "http://localhost:8080" : "http://219.134.241.188:8081",
    }
}

export {
    useBaseConfig
}
