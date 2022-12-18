import React from 'react'
import { Link } from 'react-router-dom'

function CommunityItem(props) {
  return (
    <article>
      <div>
        <image src={props.communityItem.profileImg}></image>
        <div>
          <h5>id {props.communityItem.id}</h5>
          <h6>profile {props.communityItem.profile}</h6>
        </div>
      </div>
      <div>
        <image src={props.communityItem.img}></image>
      </div>
      <div>
        <Link to={'/'}>
          <i>Like</i>
        </Link>
        <Link to={'/writing_reply'}>
          <i>     |       writing_reply</i>{' '}
        </Link>
        <Link to={'/Chatroom'}>
          <i>     |       Chatroom</i>
        </Link>
      </div>
      <div>{props.communityItem.reply} <button>...더보기</button></div>
      <div>{props.communityItem.writingTime} 전</div>
      <br/>
      <br/>
      <br/>
    </article>
  )
}
export default CommunityItem
