import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
export default App;
