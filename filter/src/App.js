import logo from './logo.svg';
import './App.css'; 
import {createContext, useState} from 'react';
import Filter from './Components/Filter';
import categorydata from './Data/categorydata';
import { Routes,Route, Link, useNavigate, Outlet } 
from 'react-router-dom';
import MajorCategory from './Components/MajorCategory';

// State 보관함
  export let Context = createContext();


function App() {

  const [major, setMajor] = useState(categorydata);
  const [filter, setFilter] = useState(false);


  return ( 
    <div className="App">
      <Context.Provider value={{ major, setMajor, filter, setFilter }}> 
      <Filter/>  
      {
        filter == true ? <MajorCategory/> : null 
      }
      



      <Routes>   
      <Route path='major' element={ <MajorCategory/> }></Route>
      </Routes>


    </Context.Provider>      
      
      
    </div>
  );
} 

export default App;