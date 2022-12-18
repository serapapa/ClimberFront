import React from 'react'
import CenterItem from './item/CenterItem'

function CenterBoardList() {
  let centerBoardList = [
    { id: 1, img: './public/logo512.png' },
    { id: 2, img: './logo512.png' },
    { id: 5, img: './logo512.png' },
    { id: 6, img: './logo512.png' },
  ]

  return (
    <div>
      {centerBoardList.map((centerItem, i) => {
        return <CenterItem centerItem={centerItem} index={i} />
      })}
    </div>
  )
}

export default CenterBoardList
