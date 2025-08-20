import { useEffect,useRef, useState } from "react"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import GetData from "./Getdata";
import { CartContext } from "./CarProvider"; 
function SetItem(){
  
        const [name,setName]=useState("")
        const [price,setPrice]=useState("")
        const [img,setImg]=useState("")
        
        const onSubmit=()=>{
            fetch(`http://localhost:8080/admin`,{
                method:"post",
               headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(
        {
            name:name,
            price:price,
            img:img
        }
    )
    
  
})                   
}
    return <div className="bmi-card">
         <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to={'/Getdata'} className="nav-link">ITEMS</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">about</Nav.Link>
      </Nav.Item>
    </Nav>
        <h2><b>Enter your details</b></h2>
        <p style={{justifyItems:"center",}}>
            
    <b>NAME=</b><input style={{margin:5,marginLeft:27}} type="text" onChange={e=>setName(e.target.value)} /><br/>
    <b>PRICE=</b><input style={{margin:5,marginLeft:25}} type="text"  onChange={e=>setPrice(e.target.value)}/><br/>
    <b>IMAGE=</b><input style={{margin:5}} type="text" onChange={e=>setImg(e.target.value)}/><br/>
    <button style={{margin:20}} onClick={onSubmit}>submit</button>
    
    </p>
 
    </div>

}

export default SetItem
