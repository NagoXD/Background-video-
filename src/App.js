import "./App.css"
import React from "react";
function App(){
  return(
    <div className="container">
  <video autoPlay loop muted playsInline className="back-video"> 
    <source src="video2.mp4" type="video/mp4"></source>  
  </video>
  <nav>
  <ul>
    <li><a href="#">TEXT</a></li>
    <li><a href="#">TEXT</a></li>
    <li><a href="#">TEXT</a></li>
    <li><a href="#">TEXT</a></li>
  </ul>
  </nav>
  <div className="text">
  <h1>
    TEXT
  </h1>
  </div>
  <button className="btne1">
    TEXT
  </button>
    </div>
    )
}

export default App;