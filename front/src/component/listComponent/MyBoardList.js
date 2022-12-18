import React from 'react'
import MyItem from './item/MyItem'

function MyBoardList() {
  let clubBoardList = [
    { id: 1, img: './public/logo512.png' },
    { id: 2, img: './logo512.png' },
    { id: 5, img: './logo512.png' },
    { id: 6, img: './logo512.png' },
  ]

  return (
    <div>
      {clubBoardList.map((myItem, i) => {
        return <MyItem myItem={myItem} index={i} />
      })}
    </div>
  )
}

export default MyBoardList
