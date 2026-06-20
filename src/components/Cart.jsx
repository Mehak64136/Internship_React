import React from 'react'

function Cart(props) {
  return (
    <div>
       
        <div style={{width:"210px",height:"350px",backgroundColor:"white",border:"1px solid black",borderRadius:"5px",objectFit:"cover",margin:"2px"}}>
            <img src={props.productimage} alt=""  height={140} width={180}/>
            <p style={{margin:"0",color:"blue"}}>{props.productdes}</p>
            <h3 style={{margin:"5px",display:"inline",color:"red"}}>{props.proddis}</h3>
            <h3 style={{margin:"5px",display:"inline"}}>{props.productprice}</h3>
            <p style={{textDecoration:"line-through",margin:"5px",color:"gray"}}>{props.prodmrp}</p>
        </div>
    </div>
  )
}

export default Cart