import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from './component/Headers'
import Nav from './component/Nav'
import Community from './pages/Community'
import Club from './pages/Club'
import Center from './pages/Center'
import My from './pages/My'

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers></Headers>
        <section>
          <Routes>
            <Route path="/" element={<Community />} />
            <Route path="/Club" element={<Club />} />
            <Route path="/Center" element={<Center />} />
            <Route path="/My" element={<My />} />
            <Route path="/Community/write" element={<My />} />
          </Routes>
        </section>
        <Nav></Nav>
      </BrowserRouter>
    </>
  )
}

export default App
