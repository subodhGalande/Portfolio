import { useState } from "react";

import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
