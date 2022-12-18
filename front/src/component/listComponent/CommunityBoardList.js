import React from 'react'
import CommunityItem from './item/CommunityItem'


function CommunityBoardList() {
  let communityBoardList = [
    {
      id: 'pearl',
      profile: '오늘 밤에는', 
      img: './public/logo512.png',
      reply: '아무도',
      writingTime: '5시간',
    },
    {
      id: 'guraman',
      profile: '컴포넌트를',
      img: './logo512.png',
      reply: '없는 길 가운데',
      writingTime: '13시간',
    },
    { id: 'inu',       
      profile: '끝내고',
      img: './logo512.png', 
      reply: '혼자서', 
      writingTime: '22시간' },
    {
      id: 'oxjung',
      profile: '싶어요',
      img: './logo512.png',
      reply: '울고 있나요?',
      writingTime: '1일전',
    },
  ]

  return (
    <div>
      {communityBoardList.map((communityItem, i) => {
        return <CommunityItem communityItem={communityItem} index={i} />
      })}
    </div>
  )
}

export default CommunityBoardList
