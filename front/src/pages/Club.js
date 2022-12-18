import React from 'react'
import {Link} from 'react-router-dom';
import {TbSearch, TbChevronRight} from "react-icons/tb";

function Club() {
  return (
   <>
   <div class= "box">
      <div class="top_box">
        <div class="container-1">
           <div class="icon"><TbSearch fontSize="1.4em"/></div>
           <input type="search" id="search" placeholder="클럽 이름 검색하기" />
        </div>
      </div>
    </div>

    <div class="my_club_box">
      <h3 class="my_club"><b>내 클럽</b></h3>
       {/* 클릭하면 해당 클럽 홈으로 이동 */}
        <div>
          <p class="club_name"> 딜라이트 클라이밍</p>
        </div>
        <div>
          <p class="club_name">돌고래 크루</p>
        </div>
    </div>
    <hr/>

    <div>
      <h3><b>클럽 추천</b></h3>
    


    </div>







      <div class="bottom_box">
        <button class="btn club_create_btn">클럽 생성</button>
      </div>
   
   </>
  )
}

export default Club