import { useRef } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import Navbar from "./Components/Navbar";
import Predict from "./Components/Predict";

function App() {
  const aboutRef = useRef(null);  // Ref for the About section
  const highlightRef = useRef(null);
  const modelRef = useRef(null);
  const predictRef = useRef(null);  // Ref for the Predict section

  return (
    <div style={{ backgroundColor: '#ffe6e6' }}>
      <Navbar
        refs={{ aboutRef, highlightRef, modelRef, predictRef }}
      />
      {/* Pass the aboutRef to About component */}
      <About ref={aboutRef} predictRef={predictRef} />
      <Highlights ref={highlightRef} />
      <Model ref={modelRef} />
      <Predict ref={predictRef} />
    </div>
  );
}

export default App;
