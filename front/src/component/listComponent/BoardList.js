import React from 'react'
import BoardItem from './item/Board'

function BoardList() {
  let boardList = [
    { id: 1, img: './public/logo512.png' },
    { id: 2, img: './logo512.png' },
    { id: 5, img: './logo512.png' },
    { id: 6, img: './logo512.png' },
  ]

  return (
    <div>
      {boardList.map((board, i) => {
        return <BoardItem board={board} index={i} />
      })}
    </div>
  )
}

export default BoardList
