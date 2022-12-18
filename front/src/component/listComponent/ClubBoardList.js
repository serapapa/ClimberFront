import React from 'react'
import ClubItem from './item/ClubItem'

function ClubBoardList() {
  let clubBoardList = [
    { id: 1, img: './public/logo512.png' },
    { id: 2, img: './logo512.png' },
    { id: 5, img: './logo512.png' },
    { id: 6, img: './logo512.png' },
  ]

  return (
    <div>
      {clubBoardList.map((clubItem, i) => {
        return <ClubItem clubItem={clubItem} index={i} />
      })}
    </div>
  )
}

export default ClubBoardList
