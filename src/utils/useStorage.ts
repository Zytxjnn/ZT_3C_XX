const setStorage = (key: string, value: Record<string, any> | string) => {
    if(typeof value === "string" ){
        localStorage.setItem(key, value);
    }else{
        localStorage.setItem(key,JSON.stringify(value));
    }
}

function getStorage(key: string,translate: boolean = false) : null | Record<string, any>{
    const result = localStorage.getItem(key) ? localStorage.getItem(key) : null;
    if (result) {
        return translate ? JSON.parse(result) : localStorage.getItem(key)
    } else {
        return null;
    }
}

function removeStorage(...key: string[]){
    key.forEach(item => {
        localStorage.removeItem(item)
    })
}

export {
    setStorage,
    getStorage,
    removeStorage
}
