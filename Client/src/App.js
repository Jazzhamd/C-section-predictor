import { useEffect,useState, useRef } from "react"
import React from 'react'
import "./App.css"
import Home from "./Components/Home"
import About from "./Components/About"
import Testimonial from "./Components/Testimonial"
import Model from "./Components/Model"
import Navbar from "./Components/Navbar"
import Predict from "./Components/Predict"


function App() {
  const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const testimonialRef = useRef(null);
    const modelRef = useRef(null);
    const predictRef = useRef(null);
  const [data,setData]=useState([{}])
  
  useEffect(()=>{
    fetch("/results").then(
      res=>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
  },[])
  return (
    <div>
            <Navbar 
                refs={{ homeRef, aboutRef, testimonialRef, modelRef, predictRef }} 
            />
            <Home ref={homeRef} />
            <About ref={aboutRef} />
            <Testimonial ref={testimonialRef} />
            <Model ref={modelRef} />
            <Predict ref={predictRef}/>

        </div>
  )
}

export default App