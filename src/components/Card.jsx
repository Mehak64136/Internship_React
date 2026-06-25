import React from "react";

function Card(props){
    return(
    <div>
        this is my fisrt comp
        <div style={{width:"250px",height:"220px",backgroundColor:"beige",border:"1px solid black",borderRadius:"5px",objectFit:"cover",margin:"2px"}}>
            <img src={props.productimage} alt=""  height={150} width={250}/>
            <p style={{margin:"0"}}>{props.productname}</p>
            <p style={{margin:"5px"}}>{props.productprice}</p>
        </div>
    </div>

    )
}

export default Card