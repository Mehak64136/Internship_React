import React from 'react'
// import './App.css'
import Card from './components/card'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

// const App = () => {
//   return (
//     <div className='whole'>
//       <div className='left'>
//         <div className='upper'>
//           <p className='he1'>MEHAK</p>
//           <p className='para1'>Software Developer</p>
//         </div>

//         <div className='lower'>
//           <p>📞 +91 xxxxx xxxxx</p>
//           <p>✉️ mehak@gmail.com</p>
//           <p>🌐 mywebsite.com</p>
//           <p>📍 my address</p>
//         </div>
//       </div>

//       <div className='right'>
//         <div className='initialst'>
//           <div className="initials">M</div>
//         </div>
//       </div>
//     </div>
//   )
// }

const App = ()=>{
  return(
    <div>
        <Navbar/>

      <div style={{display:"flex"}}>
        <Card productimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMBmFPi8uVdvE8d_iTvdz2Szf5RCgO_9y7g&s" productname="Toast" productprice={1800}/>
        <Card productimage="https://img.magnific.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740&q=80" productname="pasta" productprice={2300}/>
        <Card productimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrN_KZJZReNbkwKFSWfrOTCw-P6poE1jwIg&s" productname="Meal" productprice={40000}/>
      </div>

      <div style={{display:"flex"}}>

      <Cart productimage="https://m.media-amazon.com/images/I/61JPGZHFKiL._SX522_.jpg" 
      productdes="Spigen Audio Newly Launched SA-HP P10 Wireless Over Ear Headphones with 60H Playtime"
      proddis="-53% "
      productprice="₹1,896 "
      prodmrp="M.R.P.: ₹3,999"/>

      <Cart productimage="https://m.media-amazon.com/images/I/41qYmsz+7LL._SY300_SX300_QL70_FMwebp_.jpg"
      productdes="vivo X300 FE 5G (Lilac Purple, 12GB RAM, 256GB Storage) with No Cost EMI"
      proddis="-33%"
      productprice=" ₹79,999 "
      prodmrp="M.R.P.: ₹1,19,990"/>

      <Cart productimage="https://m.media-amazon.com/images/I/61JBh+juL3L._SX522_.jpg"
      productdes="RENARO J13 Wireless Mic for YouTube, 3-Level Adjustable MicNoise Reduction Lapel Mic with Charging Case"
      proddis="-53%"
      productprice=" ₹1,896 "
      prodmrp="M.R.P.: ₹3,999"/>

      <Cart productimage="https://m.media-amazon.com/images/I/414URLXjsXL._SY300_SX300_QL70_FMwebp_.jpg"
      productdes="CEROAN 2-in-1 Wireless CarPlay Adapter & Android Auto Wireless Adapter with Bluetooth 5.3 & 5GHz Dual-Band WiFi "
      proddis="-75%"
      productprice=" ₹1,499"
      prodmrp="M.R.P.: ₹5,999"/>

      <Cart productimage="https://m.media-amazon.com/images/I/312X0wyfvmL._SY300_SX300_QL70_FMwebp_.jpg"
      productdes="URBN Lithium_Polymer 20000 mAh 22.5W Super Fast Charging Ultra Compact Power Bank with Quick Charge & Power Delivery"
      proddis="-69%"
      productprice=" ₹1,234"
      prodmrp="M.R.P.: ₹3,999"/>

      <Cart productimage="https://m.media-amazon.com/images/I/51fAwMX4oBL._SX679_.jpg"
      productdes="Godox SB-UBW80, 80 cm Octa Softbox for Speedlite"
      proddis="-25% "
      productprice="₹1,348"
      prodmrp="M.R.P.: ₹1,790"/>

      <Cart productimage="https://m.media-amazon.com/images/I/51ERIm74MAL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
      productdes="Stuffcool Major Ultra 65W PD Super Fast USB Charging 20000Mah Laptop Powerbank Supports Super Fast Charging"
      proddis="-44% "
      productprice="₹2,799 "
      prodmrp="M.R.P.: ₹4,999"/>

      </div>

    </div>
  )
}




export default App