import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {

    const {id} = useParams();
    const {major} = useContext(Context);

    return ( 
        <>   
    <div>
                <h3>ff</h3>
            <div>                
                <h4>진료과목</h4> 기준으로 <br />
                검색된 병원 목록입니다               
            </div>
        <div> 
            <h5>병원</h5> 
            <h4>병원이름</h4>
            <p>병원주소</p>        
        </div>    
        
    </div>   
                
        </>
    );
}

export default Detail;