import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  let [formData, setFormData] = useState({});
  let [records, setRecords] = useState([]);
  useEffect(()=>{
    loadAllData();
  },[]);
  let loadAllData = ()=>{
    axios.get('http://localhost:8000/user').then((res)=>{
      console.log(res.data);
      setRecords(res.data);
    }).catch((err)=>{
      console.log(e);
    })
  }

  let onChangeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  let submitHandler = (e)=>{
    e.preventDefault();
    // making an api call with the current form data
    axios.post('http://localhost:8000/user',formData).then((res)=>{
      console.log(res);
      alert('posted data successfully');
    }).catch((e)=>{
      console.log(e);
      alert('error posting the record');
    })
  }

  return (
    <>
        <h1>Admin dashboard portal</h1>
        <form method='post'>
          <input type="text" placeholder="Enter FName here" name="firstName" onChange={(e)=>onChangeHandler(e)} /> <br />
          <input type="text" placeholder="Enter LName here" name="lastName" onChange={(e)=>onChangeHandler(e)} /> <br />
          <input type="email" placeholder="Enter Email here" name="email" onChange={(e)=>onChangeHandler(e)} /> <br />
          <button onClick={(e)=>submitHandler(e)}>Add details</button>
        </form>
        <hr />
        <h3>Records present in db</h3>
          {
            records.map((record)=>(
              <li key={record._id} >{record.firstName} - {record.lastName} - {record.email}</li>
            ))
          }
    </>
  )
}

export default App
