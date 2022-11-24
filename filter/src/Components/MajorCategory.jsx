import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../App";


const MajorCategory = () => {
    let {major, setMajor} = useContext(Context);


    return ( 

        <>              
            { major.map((a,i)=>{
                return (
            <div key={i} className="category__box"> 
                <div>
                    <span>{major[i].icon}</span>
                    <h4>{major[i].name}</h4>
                </div>
            </div>
                )
            })

            }
            
        </> 
    );
}

export default MajorCategory;