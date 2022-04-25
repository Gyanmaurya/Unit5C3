import axios from "axios";
import {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom"



    export const EmployeeDetails = () => {
      const { id }=useParams();
      const [employee,setEmployee]=useState({});
      useEffect(()=>{
        axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
          setEmployee(data)
          console.log(data)
            
        })
    },[]);
 

  return (

    <div className="user_details">
    <img className="user_image"  src={employee.image}/>
      <h4 className="user_name">Employee: {employee.employee_name}</h4>
      <span className="user_salary"> Salary :${employee.salary}</span>
      <span className="tasks">
        <li className="task">Task: {employee.tasks}</li>
      </span>
       <div className="status">Status: {employee.status}</div>
       <div className="title"> Title: {employee.title}</div>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    
    </div>
  );
};
