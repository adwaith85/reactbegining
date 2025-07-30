import React, { useEffect, useState } from "react";

// import React, { useEffect } from "react";
import PostCard from "./PostCard";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function Address(){
const [name,setName]=useState(0)
const [item,setItem]=useState([])
const onsubmit=async()=>{


let link=`https://api.postalpincode.in/pincode/${name}`
let res= await fetch(link)
let data = await res.json()
setItem(data[0]["PostOffice"])
}

    return <div className="">
        
        <center>
            <h2 className="btn-calculator">pincode:{name}</h2>
        </center>
          
        <input style={{justifyItems:"flex-end", justifyContent:"start"}} type="text" onChange={(e)=>setName(e.target.value)} />
        <button  className="btn-submit" onClick={onsubmit}>submit</button>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th> Name</th>
          <th>Division</th>
          <th>District</th>
        </tr>
      </thead>
      {
        item.map(item=><TableItem Name={item.Name} Division={item.Division} District={item.District}  />)
      }
      </Table>




            
      
        
        {/* <Card border="primary" style={{ width: 'auto', background: 'linear-gradient(30deg,#0753,#3c3eaf)', display: 'flex' }}>
            <Card.Body style={{display:'flex',flexWrap:'wrap'}}>
        {
            item.map(item=><PostCard name={item.Name} dec={item.Division} dis={item.District} />)
        }
        </Card.Body>
        </Card> */}
        
    </div>
}

function TableItem(props){

    return<tr>
            <td>{props.Name}</td>
            <td>{props.Division}</td>
            <td>{props.District}</td>
            <td></td>
        </tr>
}



export default Address


