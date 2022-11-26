import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Detail from "./Detail";
import DetailInfo from "./DetailInfo";
    
    
    
    const DetailItem = (props) => {
        
        
        const {id} = useParams();
        
        return ( 
    <div>
        <h4>{  }</h4>
            <Link to={'/detailinfo'}>
            <div>                
                <h4>진료과목</h4>기준으로 <br />
                검색된 병원 목록입니다               
            </div>
                <div> 
                    <h5>병원</h5>  
                    <h4>병원이름</h4>
                    <p>병원주소</p>         
                </div>
            </Link>    
            
    </div>
            
                );
            }
    
    export default DetailItem;