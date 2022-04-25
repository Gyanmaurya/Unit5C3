import { Home } from "./components/Home";

import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import './App.css'
import { Login } from "./components/Login";
import {PrivateRoute} from './components/PrivateRoute'
function App() {

  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
      <Route  path='/' element={<Home/>} ></Route>
      <Route  path='/login' element={<Login/>} ></Route>
      <Route  path='/employees' element={<EmployeeList/>} ></Route>
      <Route  path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>} ></Route>
      <Route  path='/logout' element={<Logout/>} ></Route>
      <Route  path='/employee/:id' element={<PrivateRoute><EmployeeDetails/></PrivateRoute>} ></Route>
      </Routes>
    </div>
  )
}

export default App;