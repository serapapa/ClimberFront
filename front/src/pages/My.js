import React from 'react'
import {Link} from 'react-router-dom';
import { TbUserPlus } from "react-icons/tb";

function My() {
  return (
    <>
    {/* 섹션영역, 아티클 형태로 객체가 유입되는 공간 */}
    <section>
    <div class="pro_container">
      
      <div class="pro">
        <img className="mr-3 pro_img" src="profile.jpg" alt="profile"/>
      </div>
      
      <div class="pro_stats">
        <div>
          <h3>642</h3>
          <p>게시물</p>
        </div>
        <div>
          <h3>112</h3>
          <p>팔로워</p>
        </div>
        <div>
          <h3>110</h3>
          <p>팔로잉</p>
        </div>
      </div>
    </div>

    <div class="pro_set">
        {/* 프로필편집으로 이동하는 버튼 */}
        <button class="btn pro_edit_btn">프로필 편집</button>
        {/* 주변 친구추천 리스트로 이동하는 버튼 */}
        <button class="btn pro_recommend"><TbUserPlus fontSize="1.5rem"/></button>
      </div>
      </section>
      {/* 상단 프로필 끝 */}

      {/* 아이콘 : if 암장이면 , 아이콘 3개 중간에 나옴/}
      {/* <div id="">
        <i class="fas fa-th"></i>
        <i class="far fa-id-badge"></i>
        </div> */}
      
      {/* 이미지 그리드 */}

      <div class="grid_photo">
        {/* 이미지 클릭하면 해당 게시물로 이동 */}
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       <div class="img_box">
         <img src="avatar-1.jpg" alt="img"/>
       </div>
       
      </div>

    </>
  )
}

export default My