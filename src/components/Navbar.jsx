import React from "react";

const Navbar = ({ cart, showCart, setShowCart, search, setSearch }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
        // padding: "2px",
      }}
    >
      <h2>Logo</h2>

      <input style={{
          display: "flex",
          alignItems: "centre",
          gap: "25px",
          margin: "18px",
          width:"300px",
          borderRadius:"10px",
          border:"none",
        }} type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <div
        style={{
          display: "flex",
          alignItems: "centre",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
             color:"black"
            }} href="#home">Home</a>
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
             color:"black"
             }} href="#About">About</a>
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
             color:"black"
             }} href="Contact">Contact</a>

        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            // padding:"4px",
            width:"80px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
            background: "linear-gradient(to right, #ebf4f5, #b5c6e0)"
          }}
        >
          Cart({cart.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;