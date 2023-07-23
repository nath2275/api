import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Pokemon() {
    const [Number, setNumber] = useState(1)
    const [Name, setName] = useState('')
    const [Imge, setImge ] = useState('')


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Number}`).then( response => {
            setName(response.data.forms[0].name)
            setImge(response.data.sprites.front_default)
        }).catch(err => console.log(err))
    },[Number])

  return (
    <div>
        <h1>Pokemon Data</h1>
        <div>
            Please Enter an ID:
            <input type='number' min={1} value={Number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <h1>{Name}</h1>
        <img src={Imge} alt="" />
    </div>
  )
}

export default Pokemon