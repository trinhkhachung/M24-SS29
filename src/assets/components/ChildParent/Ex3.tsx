import React, { useState } from 'react'

export default function Ex3() {
    const [data, setData] = useState<string>("")
    // let date = document.getElementById("meo") as ht
    const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
    }
    return (
        <div>
            <h2>Dữ liệu ng dùng nhập:{data}</h2>
            <input onChange={inputText} type="date" name="" id="meo" />
            {/* <button onClick={bts}>nhập</button> */}
        </div>
    )
}
