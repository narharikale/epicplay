import { createContext, useContext } from "react"
import { useState } from "react";
import { AUTH_TOKEN } from '../../constants';
const AuthContext = createContext();

function AuthProvider({ children }){

    const [isAuth , setIsAuth] = useState({
        status:localStorage.getItem(AUTH_TOKEN) ? true : false ,
        token:localStorage.getItem(AUTH_TOKEN)
    })
    localStorage.getItem(AUTH_TOKEN);
    return(
            <AuthContext.Provider value={{ isAuth , setIsAuth }} >
                { children }
            </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext) ;
export  { AuthProvider , useAuth } 

