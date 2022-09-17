import { useState } from "react";

import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
