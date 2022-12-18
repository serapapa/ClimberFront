import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandInstagram,TbHeart, TbMessageCircle2} from "react-icons/tb";

function Community() {
  return (
    <article>        {/* 아티클영역, 객체를 보여주는 프레임 */}
    
    <div className="card-body">
      <div className="media">
        <img className="mr-3" src="profile.jpg" alt="profile"/>
        <div>
          <h6 class="mt-11 "><b>keun2yo</b></h6>
          {/* <h5 class="text-muted mb-1">여기에 뜨는게 뭐지요..?</h5> */}
        </div>
        </div>
      <div>
        <img src="post1.jpg" class="w-100" alt="post_img"/>
      </div>
      <h6 class="mt-3">

      {/* 채워진 하트로 바뀌게 아이콘 설정 */}
      <Link to={"/"} class="px-3">< TbHeart  fontSize="1.6em" /></Link>
      <Link to={"/writing_reply"} class="px-3"><TbMessageCircle2 fontSize="1.6em" /></Link>
      <Link to={"/Chatroom"} class="px-3"><TbBrandInstagram fontSize="1.6em" /></Link>
      </h6>
      <p class="mb-0">
        {/* 변경되어야 하는 부분  */}
        <b>keun2yo님 외 15명이 좋아합니다</b>
        </p>
        <div class="content_container">
        <p class="mb-0">
          <b>keun2yo</b> 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 ...
          
          {/* 누르면 전체 글 보이게 */}
          <u class="text-muted">더보기</u>
        </p>
        </div>

        {/* 변경되어야 하는 부분 */}
        <p class="text-muted mb-0 time_ago">
          5시간전
        </p>
    </div>

    <div className="card-body">
      <div className="media">
        <img className="mr-3" src="profile.jpg" alt="profile"/>
        <div>

          <h6 class="mt-11 "><b>keun2yo</b></h6>
          {/* <h5 class="text-muted mb-1">여기에 뜨는게 뭐지요..?</h5> */}
        </div>
        </div>
      <div>
        <img src="post1.jpg" class="w-100" alt="post_img"/>
      </div>
      <h6 class="mt-3">

      {/* 채워진 하트로 바뀌게 아이콘 설정 */}
      <Link to={"/"} class="px-3">< TbHeart  fontSize="1.6em" /></Link>
      <Link to={"/writing_reply"} class="px-3"><TbMessageCircle2 fontSize="1.6em" /></Link>
      <Link to={"/Chatroom"} class="px-3"><TbBrandInstagram fontSize="1.6em" /></Link>
      </h6>
      <p class="mb-0">
        {/* 변경되어야 하는 부분  */}
        <b>keun2yo님 외 15명이 좋아합니다</b>
        </p>
        <div class="content_container">
        <p class="mb-0">
          <b>keun2yo</b> 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 ...
          
          {/* 누르면 전체 글 보이게 */}
          <u class="text-muted">더보기</u>
        </p>
        </div>

        {/* 변경되어야 하는 부분 */}
        <p class="text-muted mb-0 time_ago">
          5시간전
        </p>
    </div>
    <div className="card-body">
      <div className="media">
        <img className="mr-3" src="profile.jpg" alt="profile"/>
        <div>

          <h6 class="mt-11 "><b>keun2yo</b></h6>
          {/* <h5 class="text-muted mb-1">여기에 뜨는게 뭐지요..?</h5> */}
        </div>
        </div>
      <div>
        <img src="post1.jpg" class="w-100" alt="post_img"/>
      </div>
      <h6 class="mt-3">

      {/* 채워진 하트로 바뀌게 아이콘 설정 */}
      <Link to={"/"} class="px-3">< TbHeart  fontSize="1.6em" /></Link>
      <Link to={"/writing_reply"} class="px-3"><TbMessageCircle2 fontSize="1.6em" /></Link>
      <Link to={"/Chatroom"} class="px-3"><TbBrandInstagram fontSize="1.6em" /></Link>
      </h6>
      <p class="mb-0">
        {/* 변경되어야 하는 부분  */}
        <b>keun2yo님 외 15명이 좋아합니다</b>
        </p>
        <div class="content_container">
        <p class="mb-0">
          <b>keun2yo</b> 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 ...
          
          {/* 누르면 전체 글 보이게 */}
          <u class="text-muted">더보기</u>
        </p>
        </div>

        {/* 변경되어야 하는 부분 */}
        <p class="text-muted mb-0 time_ago">
          5시간전
        </p>
    </div>
  </article>
  )
}

export default Community
