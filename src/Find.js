import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import './Find.css'

const Button = styled.div`
width: 35px;
height: 35px;
margin: 0 0px 0px 5px;
display: flex;
align-items: center;
justify-content: center;
color: white;
border-radius: 8px;
background: ${(props)=>{
    const {color} = props
    if (color === 'red') {
        return '#e91e63'
    }
    else if(color === 'blue'){
        return '#3f51b5'
    }
}} ;
`

function Find() {
    const [post, setpost] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/').then(res => {
            console.log(res.data);
            setpost(res.data)
            console.log('post =',post,'fect data ไวกว่า api ซะอีก');
        })
        .catch(err =>{
            console.log(err);
        })
        
    }, [])


    const elements = post.map((item,index) =>{
        return (
            <div key={index} className='container'>

                <div className='flex'>
                    <NavLink className="noText" to={`/Database/FindID/${item._id}`}>
                        <Button color='red' ><i class="fa-solid fa-address-card" ></i></Button>
                    </NavLink>
                    
                    <NavLink className="noText" to={`/Database/Delete/${item._id}`}>
                        <Button color='red' ><i class="fa-regular fa-trash-can"></i></Button>
                    </NavLink>
                    
                    <NavLink className="noText" to={`/Database/Update/${item._id}/${item.name}/${item.email}`}>
                        <Button color='blue' ><i class="fa-solid fa-pen-to-square"></i></Button>
                    </NavLink>
                </div>

                <div className='List'>
                    {/* <p>{item._id}</p> */}
                    <div className='box center'>name : {item.name}</div>
                    <div className='box center'>email : {item.email}</div>
                </div>
            </div>
        )
    })
  return (
    <div>
        <h1>Find</h1>
        {elements}
    </div>
  )
}

export default Find