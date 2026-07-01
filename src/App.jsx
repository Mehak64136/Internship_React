import React from 'react'
import { useState, useReducer } from "react";
// import './App.css'
// import Visitingcard from './components/visitingcard'
import Navbar from './components/Navbar'
import Ccart from './components/Ccart';
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
import Counterusingreducer from './components/Counterusingreducer';
import { cartReducer,initialState } from './components/CartReducer';
import products from './Products';
import Usecallback_memo from './components/Usecallback_memo';
import Usememo from './components/Usememo';

const App = ()=>{
  const user="geeta uni"
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
  const [search, setSearch] = useState("");
  const [state,dispatch]= useReducer(cartReducer,initialState);
  const[coupon,setcoupon]= useState("")

  const [sortOrder, setSortOrder] = useState("");
const sortedProducts = useMemo(() => {
  const temp = [...products];

  if (sortOrder === "lowToHigh") {
    temp.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    temp.sort((a, b) => b.price - a.price);
  }

  return temp;
}, [sortOrder]);
  

  // function Change(){

  // }
  return(
    <div>
      <Usememo/>
      <Usecallback_memo/>
      {/* <Counterusingreducer/> */}

      <h1> Shopping Cart</h1>
      <input type='number' placeholder='write discount' value={coupon} onChange={(e)=>setcoupon(e.target.value)}/>
        <h2> Total : Rs {state.total}</h2>

        <div>
  <input
    type="radio"
    name="sort"
    value="lowToHigh"
    checked={sortOrder === "lowToHigh"}
    onChange={(e) => setSortOrder(e.target.value)}
  />
  Low to High

  <input
    type="radio"
    name="sort"
    value="highToLow"
    checked={sortOrder === "highToLow"}
    onChange={(e) => setSortOrder(e.target.value)}
  />
  High to Low
</div>

        {
          sortedProducts.map((product)=>(
            <div key={product.id}
             style={{
              border:"1px solid gray",
              padding:15,
              marginBottom:15
             }}
            >

              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={()=>dispatch({
                type:"ADD_ITEM",
                payload:product
              })}>Add to Cart</button>

              <button onClick={()=>dispatch({
                type:"APPLY_COUPON",
                payload:Number(coupon)
              })}>Apply Coupon</button>

              <button onClick={()=>dispatch({
                type:"INCREASE_QTY",
                payload:product
              })}>Increase QTY </button>
            </div>
          ))
        }
        <h2> Cart </h2>
        {state.cart.map((item)=>(
          <div key={item.id}>
            {item.title}
            {"-"}
            Qty : {item.quantity}
          

          </div>
          
        ))}
          <button onClick={()=>dispatch({
                type:"CLEAR_CART"
              
              })}>Clear Cart </button>
  
      {/* <Usercontext.Provider value = {user}>
        <Navbarr/>
      </Usercontext.Provider>
      <Component1/> */}
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
        <Route path='/home' element={<Studentregis/>}></Route>
        <Route path='/cart' element={<Ccart/>}></Route>

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