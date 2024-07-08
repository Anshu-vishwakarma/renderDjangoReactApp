import { useState } from "react";
import axios from "axios";


const Insert=()=>
{
       const[input, setInput]=useState({});

       const handleInput=(e)=>{
              let name=e.target.name;
              let value=e.target.value;

              setInput(values=>({...values, [name]:value}));

       }

       const handleSumit=async()=>{
              let api=`https://renderdjangoreactapp.onrender.com/Employ/`;
             await axios.post(api, input).then((res)=>{
                     alert("Data save !!")
                     
              })

              setInput({
                     
                     EmployID: "",
                     EmployName: "",
                     EmployAddress: "",
                     EmploySalary: ""
              })
       }


       

       return(
        <>

     <div className="inmain" data-aos="flip-left"data-aos-duration="3000">
     <div className="insert-container">
        <h1>Insert Record</h1>
        <input type="text" name="EmployID" value={input.EmployID} onChange={handleInput} placeholder="Employ ID"/>
        <br/>
        <input type="text" name="EmployName" value={input.EmployName} onChange={handleInput} placeholder="Employ Name"/>
        <br/>
       <input type="text" name="EmployAddress" value={input.EmployAddress} onChange={handleInput} placeholder="Employ Address"/>
        <br/>
         <input type="text" name="EmploySalary" value={input.EmploySalary} onChange={handleInput} placeholder="Employ Salary"/>
        <br/>
        <button onClick={handleSumit}>Data save</button>
       </div>
     </div>
       
         </>
       );
}

export default Insert;
