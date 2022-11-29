
import './App.css'; 
import Filter from './Components/Filter';
import { Routes,Route, Link, useNavigate, Outlet } 
from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PlaceDetail from './Components/PlaceDetail';
import { useState } from "react";
import { createContext } from 'react'; 
import DetailInfo from './Components/DetailInfo';
import Hospital from "./Data/Hospital.json"
import MajorDetail from './Components/MajorDetail';


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
        <Route path='/placedetail/:id' element={<PlaceDetail/>}></Route>
        <Route path='/Majordetail/:id' element={<MajorDetail/>}></Route>
        <Route path='/detailinfo/:id/:majorid' element={<DetailInfo/>} > </Route>
      </Routes>


      
      
      
    </div>
    </Context.Provider>
    
  );
} 

export default App;