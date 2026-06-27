import React from 'react'
import { useState } from "react";
// import './App.css'
// import Visitingcard from './components/visitingcard'
import Navbar from './components/Navbar'
// import Cardcart from './components/Cardcart'
import MainLanding from './components/MainLanding'
// import MyFirsTusestate from './components/MyFirsTusestate'
// import Checksyntheticevent from './components/Checksyntheticevent'
import Formvalid from './components/Formvalid'
import Studentregis from './components/Studentregis';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Component1 from './components/Component1';
import Usercontext from './components/Usercontext';
import Navbarr from './components/Navbarr';

const App = ()=>{
  const user="geeta uni"
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
  const [search, setSearch] = useState("");
  return(
    <div>
      <Usercontext.Provider value = {user}>
        <Navbarr/>
      </Usercontext.Provider>
      <Component1/>
  <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        search={search}
        setSearch={setSearch}
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

      <Routes>
        <Route path='/' element={<MainLanding cart={cart} setCart={setCart} search={search} setSearch={setSearch}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>


      {/* <Studentregis/> */}
      {/* <Formvalid/> */}
      {/* <MyFirsTusestate/> */}
      {/* <Checksyntheticevent/> */}
        {/* <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        search={search}
        setSearch={setSearch}
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
    )}</div>} */}


         {/* <Cardcart/> */}
      
   
    </div>
  )
}


export default App