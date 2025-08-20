import { useEffect, useState } from "react"
import { CartContext } from "./CarProvider";
// import SetItem from "./SetItem"
function GetData(){
    const [data,setData]=useState([])

    const getItem=async()=>{
     const  res=await fetch("http://localhost:8080/admin")
     const  data=await res.json()
       setData(data)
    }
    useEffect(()=>{
            getItem()
    },[])

    return<>
    <h2>Added Items</h2>
    {
        data.map(item=><Created data={item} key={item._id}/>)
    }
    </>
}

export default GetData

function Created(){
    const {name,price,img}={data}
    return<>
    name={name}
    price={price}
    <img src={img}/>
    </>
}

