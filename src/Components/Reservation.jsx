import { Context } from "../App";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";


const Reservation = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>  
            <div>  
                <h2>예약하기</h2>
                
                <div>
                <h4>예약하실 날짜를 선택해주세요</h4>
                <DatePicker 
    	selected={startDate} 
	    onChange={(date) => setStartDate(date)}
        locale={ko}                   // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false}       // 화살표 변경
        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
        
    />
                </div>                                   
            </div>
            


        </div>
    ); 
}

export default Reservation; 