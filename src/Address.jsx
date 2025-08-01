import React, { useEffect, useState } from "react";

// import React, { useEffect } from "react";
import PostCard from "./PostCard";
import Card from 'react-bootstrap/Card';

import Table from 'react-bootstrap/Table';


function Address() {

  const [name, setName] = useState()
  const [item, setItem] = useState([])
  const onsubmit = async () => {


    let link = `https://api.postalpincode.in/pincode/${name}`
    let res = await fetch(link)
    let data = await res.json()

    setItem(data[0]["PostOffice"])
    // alert(data[0]["PostOffice"][0].Name)
  }

  useEffect(() => {
    const t = setTimeout(() => onsubmit(), 1000)

    return () => clearTimeout(t)
  }, [name])

  return <div className="">

    <center>
      <h2 className="btn-calculator">pincode:{name ?? ""}</h2>
    </center>

    <input style={{ justifyItems: "", justifyContent: "start", marginLeft: 55 }} type="text" onChange={(e) => setName(e.target.value)} />
    {/* <button  className="btn-submit" onClick={onsubmit}>submit</button> */}
    {
      item ? item.map(item => <PostCard name={item.Name} st={item.State} ds={item.DeliveryStatus} bt={item.BranchType} dec={item.Division} dis={item.District} reg={item.Region} con={item.Country} pin={item.Pincode} />) :
        <><br />no data found</>
    }
  </div>
}






{/* <Table striped bordered hover  border="2" style={{border:"3px solid black",
       background:" linear-gradient(30deg,#0753,#3c3eaf)",
       margin:"5px",
      
       fontWeight:"bold"}}>
      <thead >
        <tr style={{fontSize:"20px", fontWeight:"bolder",fontFamily:"Montserrat", }}>
          
          <th> Name</th>
          <th>Division</th>
          <th>District</th>
        </tr>
      </thead> */}
{/* {
        item?item.map(item=><PostCard Name={item.Name} Division={item.Division} District={item.District}  />):
        <>no data found</>
      } */}
{/* </Table> */ }








// function TableItem(props){

//     return<tr >
//             <td>{props.Name}</td>
//             <td>{props.Division}</td>
//             <td>{props.District}</td>
//             <td></td>
//         </tr>
// }



export default Address


