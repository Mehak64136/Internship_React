// import React from 'react'

// const CheckSyntheticEvent = () => {
//     // function handleClick(event){
//     //     console.log(event)
//     // }

//     function handleChange(e){
//         console.log(e.target.value)
//     }

//   return (
//     <div>
//       {/* <button onClick={handleClick}>Click</button> */}
//       <input type="text" onChange={handleChange} />
//     </div>
//   )
// }

// export default CheckSyntheticEvent




// import React from 'react'

// const CheckSyntheticEvent = () => {
//     function handleClick(event){
//         console.log("helloo")
//     }
//   return (
//     <div>
      
//       <button onClick={handleClick()}>Click</button>
//     </div>
//   )
// }

// export default CheckSyntheticEvent




import React from 'react'
import { useState } from 'react'

const Checksyntheticevent = () => {
    const users=[
        {id:1,name:"Mehak",age:20},
        {id:2,name:"mohit",age:22},
        {id:3,name:"Rohit",age:22},
        {id:4,name:"rohan",age:22},
    ]
    const[search,setSearch]=useState("");
    const filteredusers=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredusers)

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredusers.map((user) => (
        <div key={user.id}>
            {user.name}
        </div>
      ))}
    </div>
  )
}

export default Checksyntheticevent