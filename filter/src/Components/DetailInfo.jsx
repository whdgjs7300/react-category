import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";


const DetailInfo = () => {
    const {id, majorid} = useParams();
    
    const {category,hospitalData} = useContext(Context);

    const majorfilter = 
    hospitalData.
    filter(major => major.진료과목내용명.includes(category[id].name));
    
    console.log(majorfilter[majorid].사업장);

    const placefilter = 
    hospitalData.
    filter(place => place.주소.includes(category[id].name));
    
    


    return ( 
    
    <div>
        <div>
            병원 지도 api
        </div>
        <div>  
            <h4> {majorfilter[majorid].사업장}</h4>
            <p> {majorfilter[majorid].주소}</p>
        </div>
        
        <div>진료과목</div>

        <div>
            예약하기
        </div>
    </div> 
    );
}

export default DetailInfo;