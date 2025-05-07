import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {


  const handleTestRoute = () => {
    console.log("handleTestRoute  HIT")

    axios({
      method: "GET",
      url: "http://localhost:3000/test"
    })
      .then(res => {
        console.log("test res hit")
      })
      .catch(err => console.log("test err", err))
  }

  const handle2ndRoute = () => {

    axios({
      method: "GET",
      url: 'http://localhost:3000/2ndRoute',
    })
      .then(res => {
        console.log("2nd route res", res)
        // This is where we would add the res.data to state 
      })
      .catch(err => console.log("2nd err", err))

  }



  return (
    <>
      <button onClick={(e) => handleTestRoute()}>Test Route</button>
      <br />
      <button  onClick={(e) => handle2ndRoute(e)}>2nd Route</button>
    </>
  )
}

export default App
