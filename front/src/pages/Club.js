import React from 'react'
import {Link} from 'react-router-dom';

function Club() {
  return (
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
        <Link to={"/"}><i>like</i></Link>
        <Link to={"/writing_reply"}><i>writing_reply</i></Link>
        <Link to={"/Chatroom"}><i>Chatroom</i></Link>
      </div>
      <div>reply</div>
      <div>writing_time</div>
    </article>
  )
}

export default Club