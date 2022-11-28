
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import categorydata from "../Data/categorydata";
import categorydata1 from "../Data/categorydata1";
import Detail from "./Detail";
import { Context } from "../App";




const Filter = () => { 
    const navigate = useNavigate(); 
    
    const {category, setCategory} = useContext(Context);
    

    // 필터버튼 이벤트 함수
    const handleBtns = (e) =>{ 
        let word = e.target.value;
        if (word === 'Major') { 
            setCategory(categorydata);  
        }else if(word === 'Place') {  
            setCategory(categorydata1);
        }
        
    }
    let {id} = useParams();

    
    


    return (  


    <>
    <div className="filter__container">
        <div>
            <button value='Place' onClick={handleBtns}>지역별</button>
            <button value='Major' onClick={handleBtns}>진료별</button>
        </div>            
        
        <div> 
        {               
        category ? category.map((item,i)=>{  
            return ( 
        <div key={i} className="category__box">   
            <Link  to={`/detail${i}`}>
                <span>{item.icon}</span> 
                <h4>{item.name}</h4>   
            </Link> 
        </div>  
            )
        }) :  null
        
        } 
        </div>                
    </div>      
    

        
        
    </>
    );
}

export default Filter;