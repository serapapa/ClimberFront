import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Community from "./pages/Community";
import Club from "./pages/Club";
import Center from "./pages/Center";
import My from "./pages/My";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/Club" element={<Club />} />
        <Route path="/Center" element={<Center />} />
        <Route path="/My" element={<My />} />
      </Routes>
      <nav>
        <Link to={"/"}>Community </Link>
        <Link to={"/Club"}> / Club </Link>
        <Link to={"/Center"}> / Center </Link>
        <Link to={"/My"}> / My </Link>
      </nav>
    </BrowserRouter>
  );
}

export default App;
