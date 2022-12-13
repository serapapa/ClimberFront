import React from 'react'
import Headers from './component/Headers'
import Articles from './component/Articles'
import Nav from './component/Nav'

function Community() {
  return (
    <>
    {/* 헤더영역, 각 페이지 연결하는 버튼만 들어가는 공간 */}
    <Headers></Headers>
    {/* 섹션영역, 아티클 형태로 객체가 유입되는 공간 */}
    <section>
      <h1>커뮤니티홈</h1>
      <Articles/>
    </section>
    <Nav/>
    </>
  )
}

export default Community
