import React, { useState } from 'react'

const Usecallback_memo = () => {
    const[count,setcount]=useState(0)
    console.log("state change hui")
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>increase</button>
    </div>
  )
}

export default Usecallback_memo