import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createContext } from "react";



const PlaceDetail = () => {
    
    
    
    const {category,hospitalData} = useContext(Context);
    const [limit,setLimit] = useState(0);
    
    let {id} = useParams();
    
    // 지역별 필터링 
    const idFilter = hospitalData.filter(place=> place.주소.includes( category[id].name));
    

    
    


    return (  
        <div>
        <h2>{category[id].name}</h2> 
        <div className="detail__title">                
            <h4>지역별</h4>기준으로 <br />
            검색된 병원 목록입니다               
        </div> 
    {   

        hospitalData && idFilter.map((item, placeid)=>{    
            if(!( placeid < 10+limit )) {
                return null;
            }          
            return (             
            <div key={placeid} item={item}> 
                    
        <Link className="linktext" to={'/placedetailInfo/'+id+'/'+placeid}>
            
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
    <div>
    <button onClick={()=>{
        setLimit(limit+10)
    }} className="more-btn" >더보기</button>  
    </div>
    
    </div>
    );
} 

export default PlaceDetail;