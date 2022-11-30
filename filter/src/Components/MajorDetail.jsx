import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const MajorDetail = () => {

    const {category,hospitalData,} = useContext(Context);
    let {id} = useParams();
    
    const idFilter = hospitalData
    .filter(major=> major.진료과목내용명.includes( category[id].name));
    


    return ( 
        <div>
            <h2>{category[id].name}</h2>
            <div className="detail__title">                
                <h4>진료과목</h4>기준으로 <br />
                검색된 병원 목록입니다               
            </div>
        {  
            hospitalData && idFilter.map((item, majorid)=>{  
            return (
                <div key={majorid} item={item}> 
        
            <Link className="linktext" to={'/majordetailinfo/'+id+'/'+majorid}>          
        <div className="detail__box"> 
                    
                    <h4>{item.사업장}</h4>
                    <p>{item.주소}</p>
            <div className="detail__box2">
                <div>의료인수 <br />
                {item.의료인수}
                </div> 
                <div>입원실수 <br />
                {item.입원실수}
                </div> 
                <div>병상수 <br />
                {item.병상수}
                </div> 
            </div>         
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