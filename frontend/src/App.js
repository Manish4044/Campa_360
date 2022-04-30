import React, { useEffect, useRef, useState } from "react";
import {  Route, Routes} from "react-router-dom";
import './App.css';
import VR from "./components/vr/";
import College from "./components/college/College";
import Home from "./components/homepage/Home";

function App() {

  return (
    <div className="app">
    <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/college/:college_id" element={<College/>} /> 
      <Route exact path="/vr/:college_id" element={<VR/>} /> 
    </Routes>
    </div>
  );
}

export default App;


/*
{

title: College of Engineering and Technology,

description: The College of Engineering & Technology, Bhubaneswar was established by the Government of Odisha in 1981 to meet the growing technical man power need in the State. It was a Constituent College of the Odisha University of Agriculture & Technology, Bhubaneswar since inception. After creation of a Technical University for Odisha State, the College has become a Constituent College of Biju Patnaik University of Technology (BPUT), Odisha with effect from 09th July, 2002 as per section-37(1) of BPUT Act, 2002. 

  
}
*/ 
