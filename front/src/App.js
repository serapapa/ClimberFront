import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Community from './pages/Community'
import Club from './pages/Club'
import Center from './pages/Center'
import My from './pages/My'
import Nav from './pages/Nav'
import Headers from './pages/Headers'
import Articles from './pages/Articles'


function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/Club" element={<Club />} />
        <Route path="/Center" element={<Center />} />
        <Route path="/My" element={<My />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
