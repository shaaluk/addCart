import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./container/Home";

function App(){
  return (
      
    <Routes>
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={Contact}/>
    <Route path="/" Component={Home}/>
    </Routes>
  
  );
}

export default App;