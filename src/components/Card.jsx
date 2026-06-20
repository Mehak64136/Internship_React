import React from "react";

function Card(props){
    return(
    <div>
        this is my fisrt comp
        <div style={{width:"250px",height:"250px",backgroundColor:"beige",border:"1px solid black",borderRadius:"5px",objectFit:"cover",margin:"2px"}}>
            <img src={props.productimage} alt=""  height={150} width={250}/>
            <p>{props.productname}</p>
            <p>{props.productprice}</p>
        </div>
    </div>

    )
}

export default Card