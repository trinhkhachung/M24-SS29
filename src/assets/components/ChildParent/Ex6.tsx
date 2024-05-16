import React, { useState } from 'react'

export default function Ex6() {
    const [item, setItem] = useState<string>("hien")
    const doi = () => {
        if (item === "hien") {
            setItem("an")
        }
        else {
            setItem("hien")
        }
    }
    return (
        <div>
            <button onClick={doi}>{item}</button>
        </div>
    )
}
