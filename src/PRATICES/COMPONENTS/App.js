import React from 'react'
const bgChanged=()=>{
  console.log("c;ickd")
}

export default function App() {
  return (
    <div style={{backgroundColor: "red"}}>
      <button onClick={bgChanged}>Click Here</button>
    </div>
  )
}
