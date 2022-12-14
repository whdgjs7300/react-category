
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import categorydata from "../Data/categorydata";
import categorydata1 from "../Data/categorydata1";
import { Context } from "../App";




const Filter = () => { 
    

    const {category, setCategory} = useContext(Context);

    const [isFilter,setIsFilter] = useState(false);


    // 필터버튼 이벤트 함수
    const handleBtns = (e) =>{  
        setIsFilter == true ? setIsFilter(false) : setIsFilter(true);
        let word = e.target.value; 
        if (word === 'Major') { 
            setCategory(categorydata);
            
        }else if(word === 'Place') {  
            setCategory(categorydata1);
            
        }
        
    } 
            

    return (  


    <>  
    <div className="filter__container">
        <div>
            <button  className="filter__btn" value='Place' onClick={handleBtns}>지역별</button>
            <button  className="filter__btn" value='Major' onClick={handleBtns}>진료별</button>
        </div>            
        
        <div className="category__container">         
        {        
        isFilter == true ? 
        category == categorydata1 ? categorydata1.map((item,id)=>{  
            return ( 
                
        <div key={id} className="category__box">              
            <Link className="linktext" to={'/placedetail/'+id+'/'}>
                <span>{item.icon}</span>  
                <h4>{item.name}</h4>       
            </Link>  
                
        </div>  
            )
        }) :   categorydata.map((item,id)=>{
            return (
        <div key={id} className="category__box">             
            <Link className="linktext" to={'/majordetail/'+id+'/'}>
                <span>{item.icon}</span> 
                <h4>{item.name}</h4>   
            </Link> 
        </div>
            )
        })
        : null
        }  

        </div>        
                
    </div>      
    

        
        
    </>
    );
}

export default Filter;