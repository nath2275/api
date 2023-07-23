import React from 'react'
import { Route, Routes, NavLink, Navigate  } from 'react-router-dom';
import Find from './Find';
import Create from './Create';
import Delete from './Delete';
import Update from './Update';
import FindID from './FindID';
import styled from 'styled-components';
import styles from './Database.module.css'


function Database() {
  return (
    <div>
      <h1>Database</h1>
      <NavLink to="find" className={styles.link}>
        <button className={styles.button}>find</button>
      </NavLink>
      
      <NavLink to="create" className={styles.link} >
        <button className={styles.button}>create</button>
      </NavLink>

      <Routes>
        <Route path='/' element={<Navigate to={'find'} />} />
        <Route path='find' element={<Find />} />
        <Route path='create' element={<Create />} />
        <Route path='Delete/:id' element={<Delete />} />
        <Route path='FindID/:id' element={<FindID />} />
        <Route path='Update/:id/:name/:email' element={<Update />} />
      </Routes>
    </div>
  )
}

export default Database