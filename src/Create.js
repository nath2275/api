import React, { useState } from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

function Create() {
    const [AddData,setAddData] = useState({
        name:"",email:""
    })
    const [LinkToFind ,setLinkToFind] = useState('')
    

    function changeValue(e){
        const {name ,value} = e.target
        setAddData((item)=>{
            return { ...item, [name]:value }
        })
    }

    function addToDatabase(){
        axios.post('http://localhost:4000/AddData',AddData).then(res=>{
            console.log(res.data);
            console.log('create success');
            setLinkToFind(<Navigate to='/Database/find' />)
        }).catch(err =>{
            console.log(err);
        })
    }

  return (
    <div>
        <h1>Create</h1>
        <p>name : <input type="text" name="name" value={AddData.name} placeholder='name' onChange={changeValue}/></p>
        <p>email : <input type="text" name="email" value={AddData.email} placeholder='email' onChange={changeValue} /></p>
        <button onClick={addToDatabase}>Add to database</button>
        {LinkToFind}
    </div>
  )
}

export default Create