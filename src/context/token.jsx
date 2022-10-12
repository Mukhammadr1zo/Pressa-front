import { createContext, useEffect, useState } from "react";

let TokenContext = createContext()

function TokenProvider({ children }) {

    let [token, setToken] = useState(window.localStorage.getItem('token') || false)
    console.log(token);

    useEffect(() => {
        window.localStorage.setItem('token', token)
    }, [token])


    return (
        <>
            <TokenContext.Provider value={{token, setToken}}>{children}</TokenContext.Provider>
        </>
    )
}

export { TokenContext, TokenProvider }