import React from "react";
import { NavLink } from "react-router-dom";

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
        width: "300px",
        borderRadius: "10px",
        border: "none",
      }} type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <div
        style={{
          display: "flex",
          alignItems: "centre",
          gap: "20px",
          marginTop: "20px",
        }}
      >


        <button style={{
          padding: "7px",
          width: "80px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "25px",
          background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
          color: "black"
        }}>
          Theme Change
        </button>


        <NavLink to='/' style={{
          padding: "7px",
          width: "50px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "25px",
          background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
          color: "black"
        }}>Home</NavLink>
        <NavLink to='/about' style={{
          padding: "7px",
          width: "50px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "25px",
          background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
          color: "black"
        }}>About</NavLink>
        <NavLink to='/home' style={{
          padding: "7px",
          width: "50px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "25px",
          background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
          color: "black"
        }}>Main</NavLink>
        <NavLink to='/contact' style={{
          padding: "7px",
          width: "50px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "25px",
          background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
          color: "black"
        }}>contact</NavLink>

        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            // padding:"4px",
            width: "80px",
            border: "none",
            borderRadius: "10px",
            marginBottom: "25px",
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