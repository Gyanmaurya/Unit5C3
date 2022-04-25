


import { createContext, useState } from "react";


export  const AuthContext=createContext();

export const  AuthContextProvider=({children})=>{
    const [isAuth,setAuth]=useState(false);
    const handleAuth=(states)=>{
setAuth(states)
    }

   return <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>

}
