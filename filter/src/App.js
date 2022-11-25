
import './App.css'; 
import Filter from './Components/Filter';
import { Routes,Route, Link, useNavigate, Outlet } 
from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Detail from './Components/Detail';
import { useState } from "react";
import { createContext } from 'react'; 

// State 보관함 
export const Context = createContext();

function App() {

  const [category,setCategory] = useState();
  


  return ( 
    <Context.Provider value={{category,setCategory}}> 
      <div className="App">
      
      
      
      <Routes>     
        <Route path='' element={<Filter/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>

      </Routes>


      
      
      
    </div>
    </Context.Provider>
    
  );
} 

export default App;