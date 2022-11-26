import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DetailItem from "./DetailItem";
import Hospital from '../Data/Hospital.json'


const Detail = () => {
    

    
    const {category} = useContext(Context);
    const [hospitalData,setHospitalData] = useState(Hospital); 

    
    
    

    


    return (  
    <div>                
        {  
            category && category.map((item, i)=>{  
            return (
                <div>
        <h4>dd</h4>
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
            )
        })
        
        }           
    </div>   
    );
} 

export default Detail;