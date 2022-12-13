import React from 'react'
import {Link} from 'react-router-dom';

function Community() {
  return (
    <>
    {/* 헤더영역, 각 페이지 연결하는 버튼만 들어가는 공간 */}
    <header>
      <h3>
        Logo
      </h3>
      <h6>
        <Link><i>Editor</i></Link>
        <Link ><i>Chatlist</i></Link>
      </h6>
    </header>


    {/* 섹션영역, 아티클 형태로 객체가 유입되는 공간 */}
    <section>
      <article>        {/* 아티클영역, 객체를 보여주는 프레임 */}
        <div>
          <div>profile_img</div>
          <div>
            <h5>id</h5>
            <h6>profile</h6>
          </div>
        </div>
        <div>main_img</div>
        <div>
          <Link><i>like</i></Link>
          <Link><i>writing_reply</i></Link>
          <Link><i>1:1 Chat</i></Link>
        </div>
        <div>reply</div>
        <div>writing_time</div>
      </article>
      </section>
    </>
  )
}

export default Community
