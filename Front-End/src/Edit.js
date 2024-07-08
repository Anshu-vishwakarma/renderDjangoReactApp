import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Edit=()=>{
    const {myid}= useParams();
    const [myData, setMydata] = useState({});
    const myNav = useNavigate();

    const loadData=()=>{
        let url=`http://127.0.0.1:8000/Employ/${myid}/`;
        axios.get(url).then((res)=>{
            setMydata(res.data); 
        });
    }

    useEffect(()=>{
       loadData();
    }, []);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setMydata(values=>({...values, [name]:value}));

 }

    const handleSumit=()=>{
        let url=`http://127.0.0.1:8000/Employ/${myid}/`;
        axios.put(url, myData).then((res)=>{
               alert("Data successfully Updated !!");
               myNav("/Update");
               
        })

 }



    return(
        <>
        <div className="editmain">
        <div className="edit-container">
        <center>
        <h1>Edit Record</h1>
        Enter Employ ID : <input type="text" name="EmployID" value={myData.EmployID} onChange={handleInput} />
       <br/>
       Enter Employ Name : <input type="text" name="EmployName" value={myData.EmployName} onChange={handleInput}/>
       <br/>
       Enter Employ Address : <input type="text" name="EmployAddress" value={myData.EmployAddress} onChange={handleInput}/>
       <br/>
       Enter Employ Salary : <input type="text" name="EmploySalary" value={myData.EmploySalary} onChange={handleInput}/>
       <br/>
       <button onClick={handleSumit}>Update Now!</button>
       </center>
        </div>
        </div>
        </>
    );

    
}

export default Edit;