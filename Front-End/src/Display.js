import { useState, useEffect } from "react";
import axios from "axios";




const Display=()=>{

const [myData, setdata]= useState([]);

const loadData=async()=>{
       let apis = `https://renderdjangoreactapp.onrender.com/Employ/`
             await axios.get(apis).then((res)=>{
                     setdata(res.data);
              });
}
useEffect(()=>{
       loadData();
}, []);

const ans=myData.map((key)=>{
       return(
              <>
              <tr>
                     <td>{key.EmployID}</td>
                     <td>{key.EmployName}</td>
                     <td>{key.EmployAddress}</td>
                     <td>{key.EmploySalary}</td>
              </tr>
              
              </>
       );
})



       return(
        <>
       <center><h1>Display Inserted Records </h1></center> 
       <div className="dismain" data-aos="zoom-out"data-aos-duration="3000">
        <table width="100%" align="center" border="1px">
              <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Address</th>
                     <th>Salary</th>
              </tr>
              {ans}
        </table>
       </div>
    
        </>
       );
}

export default Display;
