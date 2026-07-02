import { useState,useCallback } from 'react'
import React from 'react'
import Child from './Child'

const Usecallback_memo = () => {

  const[count,setcount]=useState(0)
  const sayhello = useCallback(()=>{
    console.log("hello")
  },[])

  
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>setcount(count+1)}>increase</button>
      <Child hello={sayhello}/>
    </div>
  )
}

export default Usecallback_memo