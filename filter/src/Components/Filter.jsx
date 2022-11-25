import MajorCategory from "./MajorCategory";
import PlaceCategory from "./PlaceCategory";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
import categorydata from "../Data/categorydata";
import categorydata1 from "../Data/categorydata1";



const Filter = () => {
    const navigate = useNavigate();
    
    const {major,setMajor,filter,setFilter} = useContext(Context);
    
    const handleBtns = (e) =>{
        let word = e.target.value;
        if (word === "ALL") {
            setMajor(); 
        }else if(word === 'Major') {
            setMajor(categorydata);
        }else if(word === 'Place') {
            setMajor(categorydata1);
        }
        filter === false ? setFilter(true) : setFilter(false);
    }

    
    return ( 


    <>
        <div>
            <button value='All' onClick={handleBtns}>ALL</button>
            <button value='Place' onClick={handleBtns}>지역별</button>
            <button value='Major' onClick={handleBtns}>진료별</button>
            <Link onClick={()=>{
                navigate('./major')}} to='./major'>진료별</Link>
        </div>        
    </>
    );
}

export default Filter;