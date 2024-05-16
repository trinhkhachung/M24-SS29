import React from 'react'
import { useState } from 'react'
export default function Ex7() {
    const [arr, showArr] = useState<number[]>([])
    const showArr2 = () => {
        showArr([6,4,3,8,0,4,])
    }


    return (
        <div>
            <h4>Bt 7</h4>
            <p>[{
                arr.map((item, index) => {
                    return <span>{item},</span>
                })
            }]</p>
            <button onClick={showArr2}>Show Arr</button>
        </div>
    )
}