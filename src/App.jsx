import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;