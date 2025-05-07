import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {


  const handleTestRoute = () => {
    console.log("handleTestRoute  HIT")

    axios({
      method : "GET",
      url: "http://localhost:3000/test"
    })
    .then(res => {
      console.log("test res hit")
    })
    .catch(err => console.log(err)) 
  }


  return (
    <>
          <button onClick={(e) => handleTestRoute()}>Test Route</button>
    </>
  )
}

export default App
