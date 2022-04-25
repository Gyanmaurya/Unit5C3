
import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


export const Login = () => {
  //  use reqres to log user in.
  const {handleAuth}= useContext(AuthContext)
    
  const navigate=useNavigate()
  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <button onClick={()=>{
             handleAuth(true)
             navigate('/employees' ,{replace:true})
         }}>Submit</button>
    </form>
  );
};
