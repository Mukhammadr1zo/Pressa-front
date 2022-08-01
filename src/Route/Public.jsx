import { Outlet } from "react-router";
import useToken from "../Hook/useToken";

function Public() {

    let [token] = useToken()

    if(token){
        return <Outlet />
    }

    return <Outlet />
}

export default Public