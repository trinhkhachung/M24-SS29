import React, { useState } from 'react'

export default function Ex5() {
    const [item, setItem] = useState<string>("hien")
    const doi = () => {
        if(item === "hien"){
            setItem("an")
        }
        else{
            setItem("hien")
        }
    }
    return (
        <div>
            <button onClick={doi}>{item}</button>
        </div>
    )
}
