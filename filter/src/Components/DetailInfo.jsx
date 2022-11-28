import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";


const DetailInfo = () => {
    const {id} = useParams();
    const {category} = useContext(Context)

    return ( 
    
    <div>
        <div>
            병원 지도 api
        </div>
        <div>
            <h4>병원이름</h4>
            <p>주소</p>
        </div>
        
        <div>진료과목</div>

        <div>
            예약하기
        </div>
    </div> 
    );
}

export default DetailInfo;