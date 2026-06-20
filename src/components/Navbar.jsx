import React from "react";
const Navbar = () => {
    return(
        <nav style={{display:"flex",backgroundColor:"skyblue", justifyContent:"space-between",padding:"2px"}}>
            <h2>Logo</h2>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#Contact">Contact</a>
                <a href="#Services">Services</a>
            </div>
        </nav>
    )
}

export default Navbar