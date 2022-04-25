
import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to="/logout">
        Logout
      </Link>

      <Link className="nav-login" to="/login">
        Login
      </Link>
    </div>
    
  );
};
