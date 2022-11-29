import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const MajorDetail = () => {

    const {category,hospitalData,setHospitalData,} = useContext(Context);
    let {id} = useParams();
    
    const idFilter = hospitalData
    .filter(major=> major.진료과목내용명.includes( category[id].name));
    


    return ( 
        <div>
            <h4>{category[id].name}</h4>
        {  
            hospitalData && idFilter.map((item, majorid)=>{  
            return (
                <div key={majorid}> 
        
            <Link to={'/detailinfo/'+id+'/'+majorid}>
            <div>                
                <h4>진료과목</h4>기준으로 <br />
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

export default MajorDetail;