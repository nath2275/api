import axios from 'axios';
import React, { useEffect } from 'react'
import {Navigate, useParams} from 'react-router-dom'

function Delete() {
    const {id} = useParams();
    
    useEffect(()=>{
        axios.delete(`http://localhost:4000/Delete/${id}`).then(res =>{
            console.log(res.data);
        }).catch(err =>{
            console.log(err);
        })
    }, [])
  return (
    <div>
        <Navigate to='/Database/find' />
    </div>
  )
}

export default Delete