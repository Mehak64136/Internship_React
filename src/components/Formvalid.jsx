import React from 'react'
import {useState} from "react"

const Formvalid = () => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")


    function handleSubmit(e){
        e.preventDefault();
        if (email === ""){
            alert("email required")
        }
        if (password === ""){
            alert("password required")
        }
    }
  return (
    <div>
        <h1>Form Validation</h1>
        <form>
            <input type = "text" placeholder="enter ur name" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input type = "password" placeholder="enter ur password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>

        </form>
    </div>
  )
}

export default Formvalid