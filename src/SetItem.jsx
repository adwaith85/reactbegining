import { useEffect, useState } from "react"
import GetData from "./Getdata"
function SetItem(){
  
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [number,setNumber]=useState("")
        
        const onSubmit=()=>{
            fetch(`http://localhost:8080/user`,{
                method:"post",
               headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(
        {
            name:name,
            email:email,
            number:number
        }
    )
    
  
})                    
}
    return <div className="bmi-card">
        <h2><b>Enter your details</b></h2>
        <p style={{justifyItems:"center",}}>
            
    <b>NAME=</b><input style={{margin:5,marginLeft:27}} type="text" onChange={e=>setName(e.target.value)} /><br/>
    <b>EMAIL=</b><input style={{margin:5,marginLeft:25}} type="text"  onChange={e=>setEmail(e.target.value)}/><br/>
    <b>NUMBER=</b><input style={{margin:5}} type="text" onChange={e=>setNumber(e.target.value)}/><br/>
    <button style={{margin:20}} onClick={onSubmit}>submit</button>
    
    </p>
 
    </div>

}

export default SetItem
