import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";

function App() {
  const [nav, setNav] = useState("projects");

  return (
    <>
      <Header active={nav} onClick={(current) => setNav(current)} />

      <main>
        {nav === "info" && <Info />}
        {nav === "projects" && <Projects />}
      </main>
    </>
  );
}

export default App;
