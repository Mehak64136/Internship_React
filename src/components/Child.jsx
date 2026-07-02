import React from 'react'
const Child = React.memo(({hello})=>{
    console.log("child component render")
    return( 
        <button onClick={hello}>click me</button>
    )
})
export default Child