
import './App.css'; 
import Filter from './Components/Filter';
import { Routes,Route, Link, useNavigate, Outlet } 
from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Detail from './Components/Detail';
import { useState } from "react";
import { createContext } from 'react'; 
import DetailInfo from './Components/DetailInfo';
import Hospital from "./Data/Hospital.json"

// State 보관함 
export const Context = createContext();

function App() {

  const [category,setCategory] = useState();
  const [hospitalData,setHospitalData] = useState(Hospital); 
  

  return ( 
    <Context.Provider 
    value={{category,setCategory,hospitalData,setHospitalData}}> 
      <div className="App">
      
      
      
      <Routes>     
        <Route path='/' element={<Filter/>}></Route>
        <Route path='/detail:id' element={<Detail/>}></Route>
        <Route path='/detailinfo/' element={<DetailInfo/>} > </Route>
      </Routes>


      
      
      
    </div>
    </Context.Provider>
    
  );
} 

export default App;