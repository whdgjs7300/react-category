import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createContext } from "react";



const Detail = () => {
    
    
    
    const {category,hospitalData} = useContext(Context);
    
    const [title,setTitle] = useState(0);
    const [count,setCount] = useState(0);
    const [majorData,setMajorData] = useState('');
    const [placeData,setPlaceData] = useState('');
    let {id} = useParams();
    
    


    return (  
    <div>                
        <h4>{category[id].name}</h4>
        {  
            hospitalData && hospitalData.filter(()=>{})
            .map((item, i)=>{  
            return (
                <div key={i}>
        
            <Link to={'/detailinfo'}>
            <div>                
                <h4>진료과목</h4>기준으로 <br />
                검색된 병원 목록입니다               
            </div>
                <div> 
                    <h5>병원</h5>  
                    <h4>{hospitalData[i].사업장}</h4>
                    <p>{hospitalData[i].주소}</p>         
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