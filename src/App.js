import { Route, Routes, NavLink  } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';
import Pokemon from './Pokemon';
import Database from './Database';

// const Button = styled.button`
// width: 90px;
// height: 35px;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// margin: 20px 5px;
// `
const Tolink = styled.div`
text-decoration: none; 
display:flex;`

function App() {

  function getNavClass(navLinkProps) {
    let navClass = 'app-header-item';
    if (navLinkProps.isActive) navClass += ' app-header-item-active';
    return navClass;
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Tolink>
        <NavLink className={getNavClass} to="/"> Home </NavLink>
        <NavLink className={getNavClass} to="/Pokemon"> Pokemon </NavLink>
        <NavLink className={getNavClass} to="/Database"> Database </NavLink>
      </Tolink>
      
      <Routes>
        <Route path='Pokemon' element={<Pokemon />} />
        <Route path='Database/*' element={<Database />} />
      </Routes>
      
    </div>
  );
}

export default App;
