import {  useContext, useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CartContext } from "./CarProvider";

function Cart(){


    const {cartItems, setCartItems}=useContext(CartContext)
    const removeItem=(item)=>{
        setCartItems((prev)=>prev.filter(i=>i.id!==item.id))


    }
useEffect(()=>{
    if(cartItems.length === 0) {
        
        alert("Your cart is empty!");
    }
})


//     const [data,setData]=useState([])
    
//     const onsubmit=async()=>{ 
//         const res=await fetch('https://fakestoreapi.com/products/')
//         const d=await res.json()
//         setData(d)

//     }
// useEffect(()=>{
//     onsubmit()},[])


    return<>
    <h2>Your Cart</h2>
<Container>


    <Row>
             
   {
   
    cartItems.map(item=><Col>
   
    <Card style={{ width: '300px',height:'100%',backgroundColor:"grey" }}>
      <Card.Img variant="top" src={item.image} height={300} width={300} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          $::{item.price}<br/>
          <button onClick={()=>removeItem(item)}>Remove</button>
        </Card.Text>
    </Card.Body>
    </Card>
    
     
    
    </Col>)
   
   }
    </Row>
</Container>
    
    </>
}



export default Cart