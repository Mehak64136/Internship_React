import React, { useState,useMemo } from 'react'

const Usememo = () => {
    const[text,settext]=useState("")
    const[count,setcount]=useState(0)
    function showfunction(){
        console.log("ye cal yad rkhega")
        let sum = 0
        for(let i=0; i<10000;i++){
            sum += i
        }
        return sum
    }

    // const result = showfunction()
    const result= useMemo(()=>showfunction())
  return (
    <div>
        <input value={text} onChange={(e)=>settext(e.target.value)}/>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>increase</button>

        <p>{result}</p>

    </div>
  )
}

export default Usememo