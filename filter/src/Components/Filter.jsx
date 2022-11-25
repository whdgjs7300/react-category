import MajorCategory from "./MajorCategory";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
import categorydata from "../Data/categorydata";


const Filter = () => {
    const navigate = useNavigate();
    
    const {major,setMajor} = useContext(Context);
    
    const handleBtns = (e) =>{
        let word = e.target.value;

        if (word === "ALL") {
            setMajor(); 
        }else if(word === 'Major') {
            const majorFilter = categorydata
        }

    }

    
    return ( 


    <>
        <div>
            <button value='All'>ALl</button>
            <button value='Place'>지역별</button>
            <button value="Major">진료별</button>
            <Link onClick={()=>{
                navigate('./major')}} to='./major'>진료별</Link>
        </div>        
    </>
    );
}

export default Filter;