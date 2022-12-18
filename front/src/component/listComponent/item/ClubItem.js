import React from 'react'
import { Link } from 'react-router-dom'

function ClubItem(props) {
  return (
    <article>
      <div>
        <div>profile_img</div>
        <div>
          <h5>id {props.clubItem.id}</h5>
          <h6>profile</h6>
        </div>
      </div>
      <div>
        <image src={props.clubItem.img}></image>
      </div>
      <div>
        <Link to={'/'}>
          <i>like</i>
        </Link>
        <Link to={'/writing_reply'}>
          <i>writing_reply</i>{' '}
        </Link>
        <Link to={'/Chatroom'}>
          <i>Chatroom</i>
        </Link>
      </div>
      <div>reply</div>
      <div>writing_time</div>
    </article>
  )
}
export default ClubItem
