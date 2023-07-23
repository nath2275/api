import axios from 'axios'
import React, { useState } from 'react'
import {useParams, Navigate} from 'react-router-dom'

function Update() {
  const {id, name, email} = useParams()
  const [PathToFind, setPathToFind] = useState(null)

  const [Input, setInput] = useState({
    nameInput:name ,emailInput:email
  })

  function changeValue(e){
    const {name, value} = e.target
    setInput((item)=>{
      return { ...item, [name]:value}
    })
  }

  function UpDateNow(){
    axios.put(`http://localhost:4000/Update/${id}`,{name:Input.nameInput,email:Input.emailInput}).then(res =>{
      console.log(res.data);
      console.log('Update success');
    })
    .catch(err => {
      console.log(err);
    })
    setPathToFind(<Navigate to='/Database/find' />)

  }
  
  return (
    <div>
        <h1>Update</h1>
        <p>name : <input name="nameInput" value={Input.nameInput} onChange={changeValue} placeholder='name' /></p>
        <p>email : <input name="emailInput" value={Input.emailInput} onChange={changeValue} placeholder='email' /></p>
        <button onClick={UpDateNow}>Update</button>
        {PathToFind}
    </div>
  )
}

export default Update