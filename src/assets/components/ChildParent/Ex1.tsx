import React, { useState } from 'react'

export default function Ex1() {
  const [item,setItem]=useState<string>("clickme")
  const doi =()=>{
    setItem("clicked")
  }
  return (
    <div>
      <button onClick={doi}>{item}</button>
    </div>
  )
}
