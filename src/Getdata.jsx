import { useEffect, useState } from "react"
// import SetItem from "./SetItem"
function GetData(){
    const [data,setData]=useState([])

    const getItem=async()=>{
     const  res=await fetch("http://localhost:8080/user")
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


function Created({data}){
        const {name,email,number}=data
    return<>
    <h2>data </h2>
    <p>
        name={name},
        email={email},
        number={number}

    </p>
    </>
}

