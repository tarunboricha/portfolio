import React, { useState } from "react";
import Header from "./components/Header"
import Cv from "./components/Cv";
import About from "./components/About";

function App() {
  const [nav, setNav] = useState('About');

  return (
    <div className="App">
      <Header nav={nav} setNav={setNav}></Header>
      {nav === 'About' ? <About></About> : ""}
      {nav === 'CV' ? <Cv></Cv> : ""}
    </div>
  );
}

export default App;