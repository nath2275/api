import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FindID() {
    const {id} = useParams()
    const [dataId ,setdataId] = useState({
        name:'', email:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:4000/FindID/${id}`).then(res => {
            console.log(res.data);
            setdataId({ name:res.data.name, email:res.data.email})
        }).catch(err =>{
            console.log(err);
        })
    },[])
  return (
    <div>
        <h1>FindID</h1>
        <h3>name : {dataId.name}</h3>
        <h3>email : {dataId.email}</h3>
    </div>
  )
}

export default FindID