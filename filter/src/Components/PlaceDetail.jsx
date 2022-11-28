import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createContext } from "react";



const PlaceDetail = () => {
    
    
    
    const {category,hospitalData,setHospitalData} = useContext(Context);
    
    
    let {id} = useParams();
    
    const idFilter = hospitalData
    .filter(place=> place.주소.includes( category[id].name));
    console.log(idFilter)


    return (  
        <div>
        <h4>{category[id].name}</h4>
    {  
        hospitalData && idFilter.map((item, i)=>{  
        return (
            <div key={i}>
    
        <Link to={'/detailinfo'}>
        <div>                
            <h4>지역별</h4>기준으로 <br />
            검색된 병원 목록입니다               
        </div>
            <div> 
                <h5>병원</h5>  
                <h4>{item.사업장}</h4>
                <p>{item.주소}</p>         
            </div>
        </Link>                
            </div>
        )
    })
    
    }           
    </div>
    );
} 

export default PlaceDetail;