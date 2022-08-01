import { useContext } from "react";
import { TokenContext } from "../context/token";

function useToken(){

    let {token, setToken} = useContext(TokenContext)

    return [token, setToken]
}

export default useToken