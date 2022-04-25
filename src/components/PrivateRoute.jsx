

import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"


export const PrivateRoute=({children})=>{
   
   const {isAuth}=useContext(AuthContext)
    if(!isAuth){
      return  <Navigate to={`/login`}  />
    }
    return children;
    
  }