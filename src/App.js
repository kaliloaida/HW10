import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
    .then(res=>res.json())
    .then(data=>{
      setData (data)
    })
  })
  
    
      
  

  return (
    <div className="App">
      <div className="container">
      <Post data={data}/>
      </div>
   
      
    </div>
  );
}

export default App;
