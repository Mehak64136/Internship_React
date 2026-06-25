import React from 'react'
import { useState } from "react";
// import './App.css'
// import Visitingcard from './components/visitingcard'
import Navbar from './components/Navbar'
// import Cardcart from './components/Cardcart'
import MainLanding from './components/MainLanding'
import MyFirsTusestate from './components/MyFirsTusestate'
import Checksyntheticevent from './components/Checksyntheticevent'

const App = ()=>{
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
  return(
    <div>
      <MyFirsTusestate/>
      <Checksyntheticevent/>
        <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        />
        
        
    {showCart && <div>
  <h2>Cart Items</h2>
  {cart.length===0 ?(
    <h3>Cart Empty</h3>
  ):(
    cart.map((item)=>(
      <div key={item.id} style={{
        border:"1px solid black",
        padding:"10px",

      }}>
        <img src={item.image} alt="" width={200} height={150} style={{objectFit:"cover"}}/>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
      </div>
    ))
    )}</div>}


         {/* <Cardcart/> */}
      
   
      <MainLanding cart={cart} setCart={setCart}/>

    </div>
  )
}




export default App