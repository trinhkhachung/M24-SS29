import React, { useState } from 'react'

export default function Funcition() {
    const [name,setName]=useState<string>("hoa");
    const handleChange=()=>{
        console.log("đã gọi vào hàm");
        
    }
  return (
    <div>
      <p></p>
      <button onClick={handleChange}>click</button>
    </div>
  )
}
