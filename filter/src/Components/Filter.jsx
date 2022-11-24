import MajorCategory from "./MajorCategory";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../App";

const Filter = () => {
    const navigate = useNavigate();
    
    const {major,setMajor} = useContext(Context);
    

    
    return ( 


    <>
        <div>
            <Link>All</Link>
            <Link>지역별</Link>
            <Link onClick={()=>{
                navigate('./major')}} to='./major'>진료별</Link>
        </div>        
    </>
    );
}

export default Filter;