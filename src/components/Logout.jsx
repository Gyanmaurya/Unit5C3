
import { Navigate } from "react-router-dom";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  alert('Logout Successfully Please Login again ')
  return <div>
    
    <Navigate to={`/login`}  />
    
  </div>;
};
