
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Update=()=>{

    const[myData, setdata]= useState([]);
    const loadData=()=>{
        let url="http://127.0.0.1:8000/Employ/";
        axios.get(url).then((res)=>{
               setdata(res.data);
        });
}
useEffect(()=>{
 loadData();
}, []);

  const MyDelete=(myid)=>{
        let url=`http://127.0.0.1:8000/Employ/${myid}/`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted !!")
            loadData();
        })  
  }

  const ans=myData.map((key)=>{
    return(
           <>
           <tr>
                  <td>{key.EmployID}</td>
                  <td>{key.EmployName}</td>
                  <td>{key.EmployAddress}</td>
                  <td>{key.EmploySalary}</td>
                  
                  <td>
                    <Link to={"/Edit/"+key.id}><FaEdit  style={{color:"#222222", marginRight:"5px"}}/>
                  
                   </Link>
                   <a href="#" onClick={()=>{MyDelete(key.id)}}><AiFillDelete style={{color:"#222222", marginLeft:"10px"}}/>
                 
                    </a> 
                  </td>
           </tr>
           </>
    );
})

    return(
        <>
      <center>  <h1>Update Data !!</h1></center>
        <div className="dismain" data-aos="zoom-in"data-aos-duration="3000">
        <table width="100%" align="center" border="1px">
              <tr>
                     <th>Employ ID</th>
                     <th>Employ Name</th>
                     <th>Employ Address</th>
                     <th>Employ Salary</th>
                     <th>Edit / Del</th>
              </tr>
              {ans}
        </table>
        </div>
        </>
    );
}

export default Update;