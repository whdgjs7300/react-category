import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Pagination from 'react-js-pagination';

const MajorDetail = () => {

    const {category,hospitalData,} = useContext(Context);
    const [limit,setLimit] = useState(0);
    const [page, setPage] = useState(1);

    let {id} = useParams(); 
    
    // 과목별 필터링
    const idFilter = hospitalData
    .filter(major=> major.진료과목내용명.includes( category[id].name));
    
    // 페이지 핸들링 함수
    const handlePageChange =(page)=>{
        setPage(page)
    }


    return ( 
        <div> 
            <h2>{category[id].name}</h2>
            <div className="detail__title">                
                <h4>진료과목</h4>기준으로 <br />
                검색된 병원 목록입니다               
            </div>
            {
    idFilter.slice(
        10*(page-1),
        10*(page-1)+10 
    ).map((item, majorid)=>{    
        if(!( majorid >= limit && majorid <10+limit )) {
            return null;
        }          
        return (             
        <div key={majorid} item={item}> 
                
    <Link className="linktext" to={'/majordetailInfo/'+id+'/'+ majorid}>
        
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
    
    <Pagination
    //activePage: 현재 페이지
        activePage={page}
        //itemsCountPerPage: 한 페이지당 보여줄 리스트 아이템의 개수
        itemsCountPerPage={10}
        //totalItemsCount: 총 아이템의 개수
        totalItemsCount={idFilter.length}
        //pageRangeDisplayed: Paginator 내에서 보여줄 페이지의 범위
        pageRangeDisplayed={5}
        // 이전, 다음페이지
        prevPageText="‹"
        nextPageText="›"
        // 페이지가 바뀔때 핸들링 해줄함수
        onChange={handlePageChange}
    />
    
        </div>
    );
}



export default MajorDetail;