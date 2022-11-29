import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";


const DetailInfo = () => {
    const {id, majorid} = useParams();
    
    const {category,hospitalData} = useContext(Context);

    const filter = 
    hospitalData.
    filter(major => major.진료과목내용명.includes(category[id].name));
    
    console.log(filter[majorid].사업장);

    return ( 
    
    <div>
        <div>
            병원 지도 api
        </div>
        <div>  
            <h4> 병원이름</h4>
            <p> 주소</p>
        </div>
        
        <div>진료과목</div>

        <div>
            예약하기
        </div>
    </div> 
    );
}

export default DetailInfo;