import {useRoute, useRouter} from "vue-router";
import { useIsLogged } from "./useIsLogged";

// app加载回调
const useAppLoad = async () => {
    const isLogged = await useIsLogged();
}


export {
    useAppLoad
}
