import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "./DetailItem";


const Detail = () => {

    const {id} = useParams();
    const {major} = useContext(Context);
    const [detailData,setDetailData] = useState(''); 


    return (  
    <div>
        { 
            major && major.map((item, i)=>{  
            return <DetailItem key={i} item={item}/>
        })
        
        }         
    </div>   
    );
} 

export default Detail;